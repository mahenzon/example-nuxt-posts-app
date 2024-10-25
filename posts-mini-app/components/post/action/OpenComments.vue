<template>
  <div>
    <NuxtLink
      class="active-link-orange"
      :to="`/posts/${id}`"
    >
      Open comments
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  id: number
}
const { id } = defineProps<Props>()
</script>
