<template>
  <div class="relative">
    <div
      class="absolute -inset-x-3 md:-inset-x-5 -inset-y-2 z-0 rounded-lg transition-colors duration-700"
      :class="{ 'bg-amber-100': isFocused }"
    />

    <div class="z-10 relative">
      <h2 ref="comments-header" class="text-3xl font-bold">
        {{ comments.length }} comment{{ pluralSuffix }}
      </h2>
      <CommentList :comments="comments" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  comments: Comment[]
}

const { comments } = defineProps<Props>()
const pluralSuffix = computed(() => comments.length === 1 ? '' : 's')

const commentsHeader = useTemplateRef('comments-header')
const eventBus = useEventBus()
const isFocused = ref(false)

const unsubscribe = eventBus.on('open-comments', () => {
  if (!commentsHeader.value) {
    return
  }
  commentsHeader.value.scrollIntoView({ behavior: 'smooth' })
  isFocused.value = true
  // disable in 700ms using timeout
  setTimeout(() => {
    isFocused.value = false
  }, 700)
})

onBeforeUnmount(() => {
  unsubscribe()
})
</script>
