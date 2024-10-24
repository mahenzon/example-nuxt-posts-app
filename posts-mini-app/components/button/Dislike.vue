<template>
  <ButtonGenericReaction
    icon="icon-dislike"
    title="Trash"
    :count="count"
  />
</template>

<script lang="ts" setup>
interface Props {
  count: number
}

const { count } = defineProps<Props>()
</script>

<style>

</style>
