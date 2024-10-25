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
      },
    })
    return data.posts
  }

  async function fetchPost(postId: number): Promise<Post | undefined> {
    const url = `${config.postsApi.url}/${postId}`
    try {
      return await $fetch(url)
    }
    catch (e) {
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

  function toggleStoredPostReactions(id: number, reaction: 'like' | 'dislike'): void {
    const postReaction = getStoredPostReactions(id)
    const secondReaction: 'like' | 'dislike' = reaction === 'like' ? 'dislike' : 'like'

    const reactionsCount = postsData.value.get(id)!.reactions
    const prevValue = postReaction[reaction]
    postReaction[reaction] = !prevValue
    if (!prevValue) {
      // if new value is positive, check if the opposite reaction is set or not
      if (postReaction[secondReaction]) {
        // if opposite is set, unset and decrease
        postReaction[secondReaction] = false
        reactionsCount[`${secondReaction}s`] -= 1
      }
      // increase chosen reaction
      reactionsCount[`${reaction}s`] += 1
    }
    else {
      // if unmarked, just increase chosen reaction
      reactionsCount[`${reaction}s`] -= 1
    }
  }

  async function toggleReaction(postId: number, reaction: 'like' | 'dislike') {
    // func is async because there should be some API request too,
    // now works only in local state.
    toggleStoredPostReactions(postId, reaction)
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
