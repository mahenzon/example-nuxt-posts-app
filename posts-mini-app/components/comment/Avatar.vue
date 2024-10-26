<template>
  <div>
    <span class="relative group">
      <span
        :class="[
          'relative',
          'inline-flex',
          'items-center',
          'justify-center',
          'w-10',
          'h-10',
          'overflow-hidden',
          'bg-white',
          'rounded-full',
          'ring',
          'ring-black',
        ]"
      >
        {{ initials }}
      </span>
      <span
        :class="[
          'absolute',
          'shadow-lg',
          'hidden',
          'group-hover:block',
          'bg-gray-900',
          'text-white',
          'font-light',
          'px-3',
          'py-1.5',
          'text-sm',
          'right-0',
          'left-0',
          'mx-auto',
          'w-max',
          '-top-1',
          'left-14',
          'rounded-lg',
          'before:w-5',
          'before:h-5',
          'before:rotate-45',
          'before:bg-gray-900',
          'before:absolute',
          'before:z-[-1]',
          'before:top-1.5',
          'before:-left-1.5',
          'before:mx-auto',
        ]"
      >
        {{ user.fullName }} (<code> {{ user.username }}</code>)
      </span>
    </span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  user: UserMinimalProfile
}

const { user } = defineProps<Props>()

const initials = computed(() => getInitials(user.fullName))
</script>
