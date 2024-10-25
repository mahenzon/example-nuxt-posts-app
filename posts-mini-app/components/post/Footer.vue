<template>
  <div class="flex items-center flex-col md:flex-row md:space-x-3 mt-5">
    <PostReactions :post="post" />
    <PostMeta :post="post" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  post: Post
}

const { post } = defineProps<Props>()
</script>
