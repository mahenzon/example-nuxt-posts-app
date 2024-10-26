<template>
  <div class="font-semibold text-lg">
    {{ user.fullName }}
  </div>
</template>

<script lang="ts" setup>
interface Props {
  user: UserMinimalProfile
}

const { user } = defineProps<Props>()
</script>
