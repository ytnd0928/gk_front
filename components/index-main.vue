<template>
  <div class="grid grid-cols-5 py-12 font-dotgothic font-bold">
    <p class="stay">{{ displayedItemsCount }}</p>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex flex-col items-center"
      ref="observeItems"
    >
      <nuxt-link :to="item.id ? `/user/chekis/${item.id}` : '#'">
        <img
          class="rounded-full w-24 h-24 hover:ring-4 hover:ring-pink-500 hover:scale-110 transition-transform object-cover shadow-md"
          :src="item.image"
          alt="Image"
        />
      </nuxt-link>
      <p class="text-center mt-2">{{ item.name }}</p>
    </div>
  </div>
  <IndexUserPlus @submit="addItem" />
</template>

<style>
.stay {
  grid-column: 1 / span 5;
  text-align: center;
  font-size: 5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  /* right: 50%; */
  color: red;
}
</style>

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
      items: JSON.parse(localStorage.getItem("items")) || [],
      displayedItemsCount: 0,
    };
  },
  methods: {
    addItem(item) {
      if (item && item.name && item.image) {
        const id = this.items.length + 1;

        item.id = id;

        this.items.push(item);
        localStorage.setItem("items", JSON.stringify(this.items));
      }
    },
  },

  mounted() {
    this.$nextTick(() => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.displayedItemsCount++;
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 1.0,
        }
      );

      if (this.$refs.observeItems) {
        this.$refs.observeItems.forEach((item) => {
          observer.observe(item);
        });
      }
    });
  },
};
</script>
