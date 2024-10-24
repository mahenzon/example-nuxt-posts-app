<template>

   <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts">Posts</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>

    <slot />
    <footer>
      Footer
    </footer>
  </div>

</template>

<script lang="ts" setup>

</script>

<style>

</style>
