<template>
  <div class="font-semibold">
    {{ user.fullName }}
  </div>
</template>

<script lang="ts" setup>
interface Props {
  user: UserMinimalProfile
}

const { user } = defineProps<Props>()
</script>

<style>

</style>
