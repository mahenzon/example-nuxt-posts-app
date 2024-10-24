<template>
  <div>
    <ButtonLike :count="reactions.likes"/>
    <ButtonDislike :count="reactions.dislikes"/>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  reactions: Reactions
}
const { reactions } = defineProps<Props>()
</script>

<style>

</style>
