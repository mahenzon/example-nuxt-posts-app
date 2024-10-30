export default function (refName: string, focusDuration: number = 700) {
  const comments = useTemplateRef<HTMLDivElement>(refName)
  const eventBus = useEventBus()
  const isFocused = ref(false)

  const unsubscribe = eventBus.on('open-comments', () => {
    if (!comments.value) {
      return
    }
    comments.value.scrollIntoView({ behavior: 'smooth' })
    isFocused.value = true
    // disable in 700ms using timeout
    setTimeout(() => {
      isFocused.value = false
    }, focusDuration)
  })

  return {
    unsubscribe,
    isFocused,
  }
}
