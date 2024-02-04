<!-- components/Header.vue -->
<template>
  <div class="h-20 white font-bold text-black flex items-center pl-3 shadow-xl">
    <div>
      <h1 class="text-lg px-8 py-4 w-12/12 overflow-hidden whitespace-nowrap">
        SEIKIN専用
      </h1>
    </div>
    <div class="w-11/12 px-8 py-4">
      <ul class="flex justify-end space-x-4">
        <li>page1</li>
        <li>page2</li>
        <li>page3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
