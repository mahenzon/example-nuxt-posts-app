<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auth p-4 flex justify-between">
        <ul class="flex space-x-4">
          <li
            v-for="[path, title] in paths"
            :key="path"
          >
            <NuxtLink class="font-semibold" :to="path">
              {{ title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script lang="ts" setup>
const paths = [
  ['/', 'Home'],
  ['/posts', 'Posts'],
  ['/about', 'About'],
]
</script>

<style>
/* style for current NuxtLink */
.router-link-exact-active {
  color: orange;
}
</style>
