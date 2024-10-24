import { defineStore } from 'pinia'

export const usePostsStore = defineStore('postsStore', () => {
  // setup
  const config = useAppConfig()

  // state
  const posts = ref<Post[]>([])
  const isLoading = ref<boolean>(false)

  // utils
  async function fetchPosts(): Promise<Post[]> {
    const data: { posts: Post[] } = await $fetch(config.postsApi.url, {
      params: {
        limit: config.postsApi.limit,
      }
    })
    return data.posts
  }

  // actions
  async function loadPosts(): Promise<void> {
    isLoading.value = true
    posts.value = await fetchPosts()
    isLoading.value = false
  }

  return {
    posts,
    isLoading,
    loadPosts,
  }
})
