<template>
  <div>
    <h1 class="big-header">
      This is the Post details page
    </h1>
    <PostDetails
      v-if="post"
      :post="post"
    />
    <div v-else-if="loading">
      Loading...
    </div>
    <div v-else>
      Post <code>{{ id }}</code> not found
    </div>
  </div>
</template>

<script lang="ts" setup>
const { id } = useRoute().params
const store = usePostsStore()

const loading = ref(true)

const intId = Number(id)
const post = computed((): Post | undefined => store.getPost(intId))

if (Number.isInteger(intId)) {
  await useAsyncData('get-post', () => store.loadPost(intId).then(() => true), {
    lazy: true,
  })
}
else {
  // any error needed?
  console.log('invalid post id', id)
}
loading.value = false
</script>

<style>

</style>
