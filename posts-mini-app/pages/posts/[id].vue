<template>
  <div>
    <h1 class="big-header">
      This is the Post details page
    </h1>
    <PostView />
    <CommentView />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: [
    'ensure-integer-id',
  ],
})

const { id } = useRoute().params
useHead({
  title: `Post #${id} details`,
  meta: [
    {
      name: 'description',
      content: 'This is the Posts List',
    },
  ],
})
</script>

<style>

</style>
