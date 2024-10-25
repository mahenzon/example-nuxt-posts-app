import { defineStore } from 'pinia'

type PostId = number
type CommentId = number
type CommentsData = Map<CommentId, Comment>
type PostCommentsData = Map<PostId, CommentsData>

export const useCommentsStore = defineStore('commentsStore', () => {
  // setup
  const config = useAppConfig()

  // base store
  const store = createBaseStore<Comment>()

  // state
  const data = ref<PostCommentsData>(new Map()) as Ref<PostCommentsData>

  // utils
  async function fetchComments(postId: number): Promise<Comment[]> {
    const data: { comments: Comment[] } = await $fetch(config.api.comments.getUrl(postId))
    return data.comments
  }

  function getPostCommentsData(postId: number): CommentsData {
    if (!data.value.has(postId)) {
      data.value.set(postId, new Map())
    }
    return data.value.get(postId)!
  }

  function getPostComments(postId: number): Comment[] {
    return [...getPostCommentsData(postId).values()]
  }

  function saveComment(postId: number, comment: Comment) {
    const comments = getPostCommentsData(postId)
    comments.set(comment.id, comment)
  }

  function saveItems(postId: number, comments: Comment[]) {
    comments.map(comment => saveComment(postId, comment))
  }

  async function loadComments(postId: number): Promise<void> {
    store.isLoading.value = true
    const comments = await fetchComments(postId)
    saveItems(postId, comments)
    store.isLoading.value = false
  }

  return {
    ...store,
    // actions
    getPostComments,
    loadComments,
  }
})
