<template>
  <div class="my-4">
    <CommentAvatar :user="comment.user" />
    <CommentAuthorName :user="comment.user" />
    <CommentText :comment="comment" />
    <CommonDate />
    <!-- todo action -->
    <a class="text-red-500 hover:text-red-700 border-b border-b-red-500">
      Delete
    </a>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  comment: Comment
}

const { comment } = defineProps<Props>()
</script>

<style>

</style>
