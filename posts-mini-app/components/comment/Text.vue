<template>
  <div>
    {{ comment.body }}
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
