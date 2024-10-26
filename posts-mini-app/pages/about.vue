<template>
  <div class="flex items-center justify-center">
    <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">
        About This App
      </h1>

      <section>
        <h2 class="text-2xl font-semibold text-gray-700">
          Who am I?
        </h2>
        <p class="mt-2 text-gray-600">
          Hello 👋
          <br>
          My name is Suren,
          I'm a passionate developer
          with a love for creating dynamic and interactive web applications.
          <br>
          I enjoy exploring new technologies and continuously improving my skills.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-700">
          Technologies Used
        </h2>
        <ul class="mt-2 list-disc list-inside text-gray-600">
          <li>Nuxt 3</li>
          <li>Vue 3</li>
          <li>Pinia</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-700">
          Why This App Was Made
        </h2>
        <p class="mt-2 text-gray-600">
          This app was created to practice and enhance my skills in Nuxt 3 and Vue 3.
          It utilizes dummyjson posts API.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-700">
          Resources
        </h2>
        <ul class="mt-2 list-none text-gray-600">
          <li class="mt-2">
            This app is open source and
            <a
              href="https://github.com/mahenzon/example-nuxt-posts-app/"
              target="_blank"
              class="text-blue-500 hover:underline"
            >available at GitHub</a>
          </li>
          <li class="mt-2">
            Here's
            <a
              href="https://www.linkedin.com/in/mahenzon/"
              target="_blank"
              class="text-blue-500 hover:underline"
            >my Linkedin</a>
          </li>
          <li class="mt-2">
            Also you can
            <a
              href="https://t.me/mahenzon"
              target="_blank"
              class="text-blue-500 hover:underline"
            >contact me at Telegram</a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About the Posts App',
  meta: [
    {
      name: 'description',
      content: 'About my Posts App',
    },
  ],
})
</script>
