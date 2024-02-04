import type { IndexUserPlus } from '#build/components';
<!-- メインコンテンツ -->
<template>
  <div class="grid grid-cols-5 gap-8 px-32 py-12 font-dotgothic font-bold">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex flex-col items-center"
    >
      <img
        class="rounded-full w-44 h-44 hover:ring-4 hover:ring-orange-500 hover:scale-110 transition-transform object-cover shadow-md"
        :src="item.image"
        alt="Image"
      />
      <p class="text-center mt-2">{{ item.name }}</p>
    </div>
  </div>
  <IndexUserPlus @submit="addItem" />
</template>
<script>
export default {
  name: "IndexMain",
  data() {
    return {
      isModalOpen: false,
      form: {
        name: "",
        image: null,
      },
      items: [], // 新しい配列
    };
  },
  // methods, computed properties, etc...
  methods: {
    // Other methods...
    addItem(item) {
      if (item && item.name && item.image) {
        this.items.push(item);
      }
    },
  },
};
</script>
