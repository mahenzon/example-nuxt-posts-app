<template>
  <ButtonGenericReaction
    @click="emit('click')"
    class="rounded-r-full"
    icon-pressed="fa6-solid:thumbs-down"
    icon-default="fa6-regular:thumbs-down"
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
const emit = defineEmits<{
  click: [],
}>()
</script>

<style>

</style>
