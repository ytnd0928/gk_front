<script setup></script>
<template>
  <Header />
  <!-- ボディー -->
  <div class="h-screen">
    <!-- バナー -->
    <div
      class="h-80 bg-gray-200 flex justify-center items-center overflow-hidden cursor-[url('/assets/css/images/cursor.png'), auto] shadow-md"
    >
      <img
        class="w-[1512px] h-[500px] object-cover object-center"
        src="/assets/css/images/hk.jpeg"
        alt="Image 1"
      />
    </div>
    <!-- 検索バー -->
    <div class="flex justify-center items-center h-20 space-x-4">
      <input
        type="text"
        class="w-1/3 h-10 border-2 border-gray-300 rounded-full text-center"
        placeholder="検索"
      />
      <button class="bg-pink-500 text-white h-10 w-20 rounded-full">
        検索
      </button>
    </div>
    <IndexMain />
    <Footer />
  </div>
</template>
