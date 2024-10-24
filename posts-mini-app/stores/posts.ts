import { defineStore } from 'pinia'

export const usePostsStore = defineStore('postsStore', () => {
  // setup
  const config = useAppConfig()

  // state
  const postsData = ref<Map<number, Post>>(new Map())
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
  }
})
