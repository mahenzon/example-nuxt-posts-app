<template>
  <div class="py-1">
    <div class="animate-pulse flex my-2 space-x-3">
      <!-- Avatar -->
      <div class="my-1 w-9 h-9 md:w-10 md:h-10 bg-slate-200 rounded-full ring ring-slate-200" />
      <!-- Content -->
      <div class="w-full md:w-1/2">
        <div class="grid grid-cols-2">
          <!-- Avatar -->
          <div class="w-1/3 h-4 bg-slate-200 rounded-xl col-span-2" />
          <!-- Body -->
          <div class="col-span-2 mt-1">
            <div class="h-3 w-5/6 bg-slate-200 rounded my-2" />
            <div class="h-3 w-3/4 bg-slate-200 rounded my-2" />
          </div>
          <!-- Actions -->
          <div class="space-x-6 flex mt-2">
            <!-- Today -->
            <div class="h-3 w-5/6 bg-slate-200 rounded" />
            <!-- Delete -->
            <div class="h-3 w-5/6 bg-slate-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
