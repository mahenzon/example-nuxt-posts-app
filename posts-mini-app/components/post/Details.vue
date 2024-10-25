<template>
  <div>
    <h1 class="text-3xl font-bold">
      {{ post.title }}
    </h1>
    <div class="text-lg mt-1">
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
