<template>
  <ButtonGenericReaction
    @click="emit('click')"
    class="rounded-l-full"
    :icon-pressed="['fas', iconName]"
    :icon-default="['far', iconName]"
    title="Like"
    active-bg-class="bg-red-420"
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
const iconName = 'heart'

const emit = defineEmits<{
  click: [],
}>()
</script>

<style></style>
