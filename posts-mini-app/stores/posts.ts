import { defineStore } from 'pinia'

export const usePostsStore = defineStore('postsStore', () => {
  // setup
  const config = useAppConfig()

  // base store
  const store = createBaseStore<Post>()

  // state
  const postsReactions = ref<Map<number, PostReaction>>(new Map())

  // getters
  const posts = computed(() => [...store.data.value.values()].sort((a, b) => a.id - b.id))
  const getPost = computed(() => (id: number) => store.data.value.get(id))

  // utils
  async function fetchPosts(): Promise<Post[]> {
    const data: { posts: Post[] } = await $fetch(config.api.posts.url, {
      params: {
        limit: config.api.posts.limit,
      },
    })
    return data.posts
  }

  async function fetchPost(postId: number): Promise<Post | undefined> {
    const url = `${config.api.posts.url}/${postId}`
    try {
      return await $fetch(url)
    }
    catch (e) {
      console.error('Could not load post by id', postId, e)
      return undefined
    }
  }

  // utils
  function getStoredPostReactions(id: number): PostReaction {
    if (!postsReactions.value.has(id)) {
      postsReactions.value.set(id, { like: false, dislike: false })
    }
    return postsReactions.value.get(id)!
  }

  function applyStoredReaction(post: Post) {
    // when /posts page is visited after visiting another page,
    // number gets reset to the value from API.
    // so if there was a reaction applied, we loose the previous number.
    // re-apply reaction so number of likes/dislikes corresponds the chosen reaction.
    // in the real-world application this won't be needed
    // since the value from the backend would be real.
    const reactions = getStoredPostReactions(post.id)
    for (const reaction of ['like', 'dislike'] as const) {
      if (reactions[reaction]) {
        // up to one reaction will be incremented.
        post.reactions[`${reaction}s`] += 1
      }
    }
  }

  function savePost(post: Post) {
    applyStoredReaction(post)
    store.data.value.set(post.id, post)
  }

  function savePosts(posts: Post[]) {
    posts.map(savePost)
  }

  // actions
  async function loadPosts(): Promise<void> {
    store.isLoading.value = true
    const posts = await fetchPosts()
    savePosts(posts)
    store.isLoading.value = false
  }

  async function loadPost(id: number): Promise<Post | undefined> {
    let post = store.data.value.get(id)
    if (post) {
      return post
    }
    post = await fetchPost(id)
    if (post) {
      savePost(post)
    }
    return post
  }

  function toggleStoredPostReactions(id: number, reaction: 'like' | 'dislike'): void {
    const postReaction = getStoredPostReactions(id)
    const secondReaction: 'like' | 'dislike' = reaction === 'like' ? 'dislike' : 'like'

    const reactionsCount = store.data.value.get(id)!.reactions
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
    ...store,
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
