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
    let result: T
    try {
      result = await call()
    }
    catch (error) {
      console.error('Could not fetch, got error:', error)
      throw error
    }
    finally {
      isLoading.value = false
    }
    return result
  }

  return {
    // state
    data,
    isLoading,
    // utils
    withLoading,
  }
}
