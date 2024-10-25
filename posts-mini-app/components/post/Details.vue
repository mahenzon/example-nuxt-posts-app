<template>
  <div class="mb-2 md:mb-6">
    <h1 class="text-3xl font-bold">
      {{ post.title }}
    </h1>
    <div class="text-xl mt-1 leading-5">
      {{ post.body }}
    </div>
    <PostFooter :post="post" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  post: Post
}

const { post } = defineProps<Props>()
</script>

<style></style>
