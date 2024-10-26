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
</script>

<style>

</style>
