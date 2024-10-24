<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div>{{ post.body }}</div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  post: Post,
}

const { post } = defineProps<Props>()
</script>

<style></style>
