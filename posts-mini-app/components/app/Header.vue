<template>
  <div>
    <nav>
      <ul>
        <li
          v-for="[path, title] in paths"
          :key="path"
        >
          <NuxtLink :to="path">
            {{ title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const paths = [
  ['/', 'Home'],
  ['/posts', 'Posts'],
  ['/about', 'About'],
]
</script>
