<template>
  <div>
    <h1 class="big-header">
      This is the Post details page
    </h1>
    <PostView :post-id="intId" />
    <CommentView :post-id="intId" />
  </div>
</template>

<script lang="ts" setup>
const { id } = useRoute().params

const intId = Number(id)

if (!Number.isInteger(intId)) {
  console.log('todo: throw')
}
</script>

<style>

</style>
