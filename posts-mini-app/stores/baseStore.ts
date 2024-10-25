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

  return {
    // state
    data,
    isLoading,
  }
}
