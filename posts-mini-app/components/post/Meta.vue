<template>
  <div>
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

<style>

</style>
