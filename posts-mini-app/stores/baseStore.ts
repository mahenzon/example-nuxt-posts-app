type EntityId = number
interface Entity {
  id: EntityId
}

export function createBaseStore<T extends Entity>() {
  // types
  type Data = Map<EntityId, T>

  // state
  // annotate as Ref to silence typescript
  const data = ref<Data>(new Map()) as Ref<Data>
  const isLoading = ref<boolean>(false)

  // util
  async function withLoading<T>(call: () => Promise<T>): Promise<T> {
    isLoading.value = true
    const res = await call()
    isLoading.value = false
    return res
  }

  return {
    // state
    data,
    isLoading,
    // utils
    withLoading,
  }
}
