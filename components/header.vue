<!-- components/Header.vue -->
<template>
  <div
    class="h-20 font-dotgothic font-bold text-black flex items-center pl-3 shadow-xl"
  >
    <div>
      <h1 class="text-lg px-8 py-4 w-12/12 overflow-hidden whitespace-nowrap">
        ひかきんTV
      </h1>
    </div>
    <div class="w-11/12 px-8 py-4">
      <ul class="flex justify-end space-x-4 transform">
        <li class="hover:scale-110 transition-transform hover:text-pink-500">
          チェキ一覧
        </li>
        <li class="hover:scale-110 transition-transform hover:text-pink-500">
          トークルーム
        </li>
        <li class="hover:scale-110 transition-transform hover:text-pink-500">
          page3
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
