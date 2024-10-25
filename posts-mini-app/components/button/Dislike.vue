<template>
  <ButtonGenericReaction
    @click="emit('click')"
    class="rounded-r-full"
    :icon-pressed="['fas', iconName]"
    :icon-default="['far', iconName]"
    title="Trash"
    active-bg-class="bg-black"
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
const iconName = 'thumbs-down'

const emit = defineEmits<{
  click: [],
}>()
</script>

<style>

</style>
