<template>
  <div class="my-4">
    <CommentAvatar :user="comment.user" />
    <CommentAuthorName :user="comment.user" />
    <CommentText :comment="comment" />
    <CommonDate />
    <CommentDelete :comment="comment" />
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
