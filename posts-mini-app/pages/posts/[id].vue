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
  throw createError({
    statusCode: 404,
    statusMessage: `Post id should be an integer, got '${id}' 😔. Please try something like '3'`,
    fatal: true,
  })
}
</script>

<style>

</style>
