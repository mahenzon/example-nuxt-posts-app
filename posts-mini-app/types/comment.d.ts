declare interface Comment {
  id: number
  body: string
  postId: number
  likes: number
  user: UserMinimalProfile
}
