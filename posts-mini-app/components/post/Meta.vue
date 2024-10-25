<template>
  <div class="flex items-center space-x-3">
    <PostActionOpenComments :id="post.id" />
    <CommonDate />
    <TagArray :tags="post.tags" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  post: Post
}

const { post } = defineProps<Props>()
</script>
