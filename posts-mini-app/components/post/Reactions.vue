<template>
  <div class="flex items-center space-x-0.5">
    <ButtonLike
      @click="handleClick('like')"
      :is-pressed="postReactionsToggled.like"
      :count="reactions.likes"
      />
    <ButtonDislike
      @click="handleClick('dislike')"
      :is-pressed="postReactionsToggled.dislike"
      :count="reactions.dislikes"
      />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  post: Post,
}

// todo: on toggle increase / decrease value
const { post } = defineProps<Props>()
const store = usePostsStore()
const reactions = computed(() => store.getPost(post.id)!.reactions)
const postReactionsToggled = computed(() => store.getStoredPostReactions(post.id))

async function handleClick(reaction: 'like' | 'dislike') {
  await store.toggleReaction(post.id, reaction)
}
</script>

<style>

</style>
