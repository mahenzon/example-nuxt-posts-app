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

  // getters
  const getPostComments = computed(() => (postId: number): Comment[] => {
    if (!data.value.has(postId)) {
      return []
    }
    return [...data.value.get(postId)!.values()]
  })

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

  function deleteCommentFromStorage(comment: Comment): void {
    if (!data.value.has(comment.postId)) {
      return
    }
    const postComments = data.value.get(comment.postId)!
    postComments.delete(comment.id)
  }

  function saveComment(postId: number, comment: Comment) {
    const comments = getPostCommentsData(postId)
    comments.set(comment.id, comment)
  }

  function saveComments(postId: number, comments: Comment[]) {
    comments.map(comment => saveComment(postId, comment))
  }

  // actions
  async function loadComments(postId: number): Promise<void> {
    const comments = await store.withLoading(() => fetchComments(postId))
    saveComments(postId, comments)
  }

  async function deleteComment(comment: Comment): Promise<void> {
    deleteCommentFromStorage(comment)
    // any async action like API request here
  }

  return {
    // state
    isLoading: store.isLoading,
    data,
    // getters
    getPostComments,
    // actions
    loadComments,
    deleteComment,
  }
})
