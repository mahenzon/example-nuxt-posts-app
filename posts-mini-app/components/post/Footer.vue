<template>
  <div class="actions">
    <PostReactions :reactions="post.reactions" />
    <PostMeta :post="post" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  post: Post,
}

const { post } = defineProps<Props>()
</script>

<style></style>
