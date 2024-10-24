<template>
  <ButtonGenericReaction
    icon="icon-like"
    title="Like"
    :count="count"
  />
</template>

<script lang="ts" setup>
interface Props {
  count: number
}

const { count } = defineProps<Props>()
</script>

<style></style>
