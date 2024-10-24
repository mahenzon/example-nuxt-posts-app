<template>
  <div>
    <TagDetails
      v-for="tag in tags"
      :name="tag"
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
