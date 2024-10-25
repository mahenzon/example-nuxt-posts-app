<template>
  <div class="flex flex-col sm:flex-row items-center space-x-3 my-3 sm:my-0">
    <PostActionOpenComments :id="post.id" />
    <div class="flex space-x-3 my-3 md:my-0">
      <CommonDate />
      <TagArray :tags="post.tags" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  post: Post
}

const { post } = defineProps<Props>()
</script>
