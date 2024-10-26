<template>
  <div class="my-4 flex space-x-5">
    <CommentAvatar class="my-2" :user="comment.user" />
    <div>
      <CommentAuthorName :user="comment.user" />
      <CommentText :comment="comment" />
      <div class="flex space-x-6 mt-2">
        <CommonDate />
        <CommentDelete :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  comment: Comment
}

const { comment } = defineProps<Props>()
</script>
