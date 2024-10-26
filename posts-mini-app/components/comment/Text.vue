<template>
  <div class="text-lg leading-5 font-normal">
    {{ comment.body }}
  </div>
</template>

<script lang="ts" setup>
interface Props {
  comment: Comment
}

const { comment } = defineProps<Props>()
</script>
