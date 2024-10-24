<template>
  <div>
    <span class="tag-name">{{ name }}</span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  name: string
}

const { name } = defineProps<Props>()
</script>

<style>

</style>
