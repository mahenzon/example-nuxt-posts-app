export default defineAppConfig({
  api: {
    posts: {
      url: 'https://dummyjson.com/posts',
      limit: 5,
    },
    comments: {
      getUrl: (id: number) => `https://dummyjson.com/posts/${id}/comments`,
    },
  },
  // store global events name to be reused over the app
  events: {
    openComments: 'open-comments',
  },
})
