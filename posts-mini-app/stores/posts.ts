import { defineStore } from 'pinia'

export const usePostsStore = defineStore('postsStore', () => {
  // setup
  const config = useAppConfig()

  // state
  const postsData = ref<Map<number, Post>>(new Map())
  const postsReactions = ref<Map<number, PostReaction>>(new Map())
  const isLoading = ref<boolean>(false)

  // getters
  const posts = computed(() => [...postsData.value.values()].sort((a, b) => a.id - b.id))
  const getPost = computed(() => (id: number) => postsData.value.get(id))

  // utils
  async function fetchPosts(): Promise<Post[]> {
    const data: { posts: Post[] } = await $fetch(config.postsApi.url, {
      params: {
        limit: config.postsApi.limit,
      }
    })
    return data.posts
  }

  async function fetchPost(postId: number): Promise<Post | undefined> {
    const url = `${config.postsApi.url}/${postId}`
    try {
      return await $fetch(url)
    } catch (e) {
      console.error('Could not load post by id', postId, e)
      return undefined
    }
  }

  function savePost(post: Post) {
    postsData.value.set(post.id, post)
  }

  function savePosts(posts: Post[]) {
    posts.map(savePost)
  }

  // actions
  async function loadPosts(): Promise<void> {
    isLoading.value = true
    const posts = await fetchPosts()
    savePosts(posts)
    isLoading.value = false
  }

  async function loadPost(id: number): Promise<Post | undefined> {
    let post = postsData.value.get(id)
    if (post) {
      return post
    }
    post = await fetchPost(id)
    if (post) {
      savePost(post)
    }
    return post
  }

  function getStoredPostReactions(id: number): PostReaction {
    if (!postsReactions.value.has(id)) {
      postsReactions.value.set(id, { like: false, dislike: false })
    }
    return postsReactions.value.get(id)!
  }

  function setStoredPostReactions(id: number, reaction: 'like' | 'dislike', value: boolean): void {
    // if `reaction` has true `value`, then the other one should be false. make sure it's false here
    const postReaction: PostReaction = {
      like: false,
      dislike: false,
    }
    postReaction[reaction] = value
    postsReactions.value.set(id, postReaction)
  }

  async function toggleReaction(postId: number, reaction: 'like' | 'dislike') {
    // async because there should be some API request too, now 'on mocks'
    const postReaction = getStoredPostReactions(postId)
    setStoredPostReactions(postId, reaction, !postReaction[reaction])
    // fire async call here. maybe debounced for ~1 second
  }

  return {
    // state
    postsData,
    isLoading,
    // getters
    posts,
    getPost,
    // actions
    loadPosts,
    loadPost,
    getStoredPostReactions,
    toggleReaction,
  }
})
