<template>
  <div
    class="relative"
    :class="{
      // space for the left pointer
      'ml-1': isFirst,
    }"
  >
    <div
      :class="[
        'font-light',
        'bg-gray-100',
        'hover:bg-gray-200',
        'rounded',
        'px-1',
        ...pointyClasses,
      ]"
    >
      {{ name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  name: string
  isFirst: boolean
}
const { name, isFirst } = defineProps<Props>()

const pointyClasses = computed((): string[] => {
  if (!isFirst) {
    return []
  }
  return [
    'before:w-4',
    'before:h-4',
    'before:rotate-45',
    'before:bg-gray-100',
    'before:hover:bg-gray-200',
    'before:absolute',
    'before:z-[-1]',
    'before:-left-1.5',
    'before:top-1',
  ]
})
</script>

<style>

</style>
