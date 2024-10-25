<template>
  <div class="flex items-center space-x-3 my-5">
    <PostReactions :post="post" />
    <PostMeta :post="post" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  post: Post
}

const { post } = defineProps<Props>()
</script>
