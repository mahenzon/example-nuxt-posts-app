<template>
  <button
    :class="[
      'flex',
      'items-center',
      'px-3',
      'py-1.5',
      'focus:outline-none',
      style.background,
      style.text,
    ]"
    @click="emit('click')"
  >
    <FontAwesome
      :icon="style.icon.name"
      :style="{ color: style.icon.color }"
      class="mr-2"
    />
    <span class="mr-3">{{ props.title }}</span>
    <span
      :class="[
        style.count.opacity,
      ]"
    >{{ props.count }}</span>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  iconPressed: string[]
  iconDefault: string[]
  activeBgClass: string
  title: string
  count: number
  isPressed: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  click: []
}>()

const style = computed(() => {
  if (props.isPressed) {
    return {
      background: props.activeBgClass,
      text: 'text-white',
      icon: {
        name: props.iconPressed,
        color: 'white',
      },
      count: {
        opacity: 'opacity-100',
      },
    }
  }
  return {
    background: 'bg-gray-100',
    text: 'text-black',
    icon: {
      name: props.iconDefault,
      color: 'black',
    },
    count: {
      opacity: 'opacity-30',
    },
  }
})
</script>

<style>

</style>
