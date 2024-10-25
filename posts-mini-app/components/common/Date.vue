<template>
  <div class="text-gray-300">
    <span class="date">{{ date }}</span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  date?: string
}

const { date = 'Today' } = defineProps<Props>()
</script>

<style>

</style>
