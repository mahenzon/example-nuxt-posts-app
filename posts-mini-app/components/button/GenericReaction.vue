<template>
  <div>
    <span :class="props.icon"></span>
    <span class="title">{{ props.title }}</span>
    <span class="count">{{ props.count }}</span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  icon: string
  title: string
  count: number
}
const props = defineProps<Props>()
</script>

<style>

</style>