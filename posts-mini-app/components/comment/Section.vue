<template>
  <div>
    <h2 ref="comments-header" class="text-3xl font-bold">
      {{ comments.length }} comment{{ pluralSuffix }}
    </h2>
    <CommentList :comments="comments" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  comments: Comment[]
}

const { comments } = defineProps<Props>()
const pluralSuffix = computed(() => comments.length === 1 ? '' : 's')
</script>
