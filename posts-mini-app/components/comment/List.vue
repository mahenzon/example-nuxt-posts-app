<template>
  <div>
    <TransitionGroup name="list-slide" tag="div">
      <div
        v-for="comment in comments"
        :key="comment.id"
      >
        <CommentDetails :comment="comment" />
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  comments: Comment[]
}

const { comments } = defineProps<Props>()
</script>
