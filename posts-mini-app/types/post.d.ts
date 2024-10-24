
declare interface Reactions {
    likes: number
    dislikes: number
}

declare interface Post {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: Reactions
    views: number
    userId: number
}
