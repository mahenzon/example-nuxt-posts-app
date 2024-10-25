type EntityId = number
interface Entity {
  id: EntityId
}

export function createBaseStore<T extends Entity>() {
  // types
  type Data = Map<EntityId, T>
  type FetchEntities = () => Promise<T[]>

  // state
  // annotate as Ref to silence typescript
  const data = ref<Data>(new Map()) as Ref<Data>
  const isLoading = ref<boolean>(false)

  // getters
  const items = computed((): T[] => [...data.value.values()])

  // utils
  function saveItem(item: T) {
    data.value.set(item.id, item)
  }

  function saveItems(items: T[]) {
    items.map(saveItem)
  }

  // actions
  async function loadData(call: FetchEntities): Promise<void> {
    isLoading.value = true
    const items = await call()
    saveItems(items)
    isLoading.value = false
  }

  return {
    // state
    data,
    isLoading,
    // getters
    items,
    // utils
    saveItem,
    saveItems,
    // actions
    loadData,
  }
}
