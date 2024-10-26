<template>
  <div>
    <div
      v-for="comment in comments"
      :key="comment.id"
    >
      <CommentDetails :comment="comment" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  comments: Comment[]
}

const { comments } = defineProps<Props>()
</script>

<style>

</style>
