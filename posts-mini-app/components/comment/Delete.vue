<template>
  <div>
    <a class="text-red-500 hover:text-red-700 border-b border-b-red-500" @click="deleteComment()">
      Delete
    </a>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  comment: Comment
}

const { comment } = defineProps<Props>()
const commentsStore = useCommentsStore()

async function deleteComment() {
  await commentsStore.deleteComment(comment)
}
</script>
