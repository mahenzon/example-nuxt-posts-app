<template>
  <div>
    <NuxtLink
      class="active-link-orange"
      :to="`/posts/${id}`"
      @click="handleOpenCommentsClicked()"
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

const eventBus = useEventBus()
function handleOpenCommentsClicked() {
  eventBus.emit('open-comments')
}
</script>
