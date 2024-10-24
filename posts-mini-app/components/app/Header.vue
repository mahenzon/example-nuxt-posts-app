<template>
  <div>
    <nav>
      <ul>
        <li :key="path" v-for="[path, title] in paths">
          <NuxtLink :to="path">{{ title }}</NuxtLink>
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
