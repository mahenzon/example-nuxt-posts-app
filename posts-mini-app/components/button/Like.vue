<template>
  <ButtonGenericReaction
    @click="emit('click')"
    class="rounded-l-full"
    active-bg-class="bg-red-420"
    icon-pressed="fa6-solid:heart"
    icon-default="fa6-regular:heart"
    title="Like"
    :count="count"
    :is-pressed="isPressed"
  />
</template>

<script lang="ts" setup>
interface Props {
  count: number
  isPressed: boolean
}

const { count, isPressed } = defineProps<Props>()
const emit = defineEmits<{
  click: [],
}>()
</script>

<style></style>
