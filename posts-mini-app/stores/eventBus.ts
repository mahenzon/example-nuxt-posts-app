import { defineStore } from 'pinia'

type EventName = string
type EventData = string | number
type Unsubscribe = () => void
type Listener = (data?: EventData) => void

// Create the event bus store
export const useEventBus = defineStore('eventBus', () => {
  const events = ref<Map<EventName, Array<Listener>>>(new Map())

  // Method to emit an event
  const emit = (event: EventName, data?: EventData) => {
    const listeners = events.value.get(event)
    if (listeners) {
      listeners.forEach(listener => listener(data))
    }
  }

  // Method to remove a listener
  const off = (event: EventName, listener: Listener) => {
    const listeners = events.value.get(event)
    if (listeners) {
      events.value.set(event, listeners.filter(l => l !== listener))
    }
  }

  // Method to listen for an event
  const on = (event: EventName, listener: Listener): Unsubscribe => {
    if (!events.value.has(event)) {
      events.value.set(event, [])
    }
    events.value.get(event)?.push(listener)

    return () => off(event, listener)
  }

  return {
    emit,
    on,
    off,
  }
})
