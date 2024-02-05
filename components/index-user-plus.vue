<template>
  <!-- +アイコン -->
  <div>
    <div class="fixed bottom-20 right-12">
      <button
        @click="openModal"
        class="bg-pink-500 text-white rounded-full h-16 w-16 flex items-center justify-center hover:scale-110 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="bg-white p-10 overflow-auto h-3/4 rounded-xl">
        <h2 class="text-2xl mb-4">登録</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block mb-2">おなまえ</label>
            <input
              v-model="form.name"
              id="name"
              class="border-2 border-gray-300 p-2 w-full"
              type="text"
              required
            />
          </div>
          <div class="mb-2">
            <label for="name" class="block">グループ名</label>
            <input
              v-model="form.group"
              id="group"
              class="border-2 border-gray-300 mb-2 w-full"
              type="text"
            />
          </div>
          <div class="mb-4">
            <label for="name" class="block mb-2">X</label>
            <input
              v-model="form.x"
              id="name"
              class="border-2 border-gray-300 p-2 w-full"
              type="text"
            />
          </div>
          <div class="mb-4">
            <label for="instagram" class="block mb-2">Instagram</label>
            <input
              v-model="form.instagram"
              id="name"
              class="border-2 border-gray-300 p-2 w-full"
              type="text"
            />
          </div>
          <div class="mb-4">
            <label for="tiktok" class="block mb-2">TikTok</label>
            <input
              v-model="form.tiktok"
              id="name"
              class="border-2 border-gray-300 p-2 w-full"
              type="text"
            />
          </div>
          <div class="mb-4">
            <label for="showroom" class="block mb-2">SHOWROOM</label>
            <input
              v-model="form.showroom"
              id="name"
              class="border-2 border-gray-300 p-2 w-full"
              type="text"
            />
          </div>
          <div class="mb-4">
            <label for="image" class="block mb-2">しゃしん</label>
            <input
              @change="onFileChange"
              id="image"
              class="border-2 border-gray-300 p-2 w-full"
              type="file"
              required
            />
          </div>

          <button
            type="submit"
            class="mt-4 px-4 py-2 bg-pink-500 text-white rounded"
          >
            とうろく
          </button>
        </form>
        <button
          @click="closeModal"
          class="mt-4 px-4 py-2 bg-pink-500 text-white rounded"
        >
          とじる
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexUserPlus",
  data() {
    return {
      isModalOpen: false,
      form: {
        name: "",
        image: null,
        group: "",
        x: "",
        instagram: "",
        tiktok: "",
        showroom: "",
      },
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    submitForm() {
      this.$emit("submit", this.form);
      console.log(this.form);
      this.form = { name: "", image: null };
      this.form = { group: "" };
      this.form = { x: "" };
      this.form = { instagram: "" };
      this.form = { tiktok: "" };
      this.form = { showroom: "" };
      this.closeModal();
      console.log(this.form);
    },
    onFileChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.form.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>
