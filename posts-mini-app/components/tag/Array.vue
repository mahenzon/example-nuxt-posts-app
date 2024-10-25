<template>
  <div class="flex items-center space-x-1">
    <TagDetails
      v-for="(tag, index) in tags"
      :key="tag"
      :name="tag"
      :is-first="!index"
    />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  tags: string[]
}

const { tags } = defineProps<Props>()
</script>

<style>

</style>
