<template>
  <div
    class="flex flex-col w-full max-w-[380px] border h-full min-h-screen p-6 gap-3 bg-white"
  >
    <h2 class="text-2xl font-medium">Private</h2>
    <!-- card -->
    <div class="flex flex-col w-full min-h-[300px]">
      <div
        class="flex flex-row px-3 py-2 hover:border hover:border-purple-200 justify-between rounded-xl items-center"
      >
        <h3 class="text-purple-600">Home</h3>
        <span class="p-2 px-3 rounded-xl bg-purple-300 text-purple-600">8</span>
      </div>
    </div>
    <!-- button create list -->
    <button
      class="flex flex-row gap-6 rounded-xl p-3 text-purple-600 bg-purple-100 hover:bg-purple-200 cursor-pointer"
    >
      <Plus class="w-6 h-6 p-1 rounded-xl bg-purple-600 text-white" />
      <div class="">Create new list</div>
    </button>
  </div>
</template>

<script>
import { Plus } from "lucide-vue-next";

export default {
  name: "Navbar",
  components: {
    Plus,
  },
  methods: {
    sayHello() {
      console.log("Hello from Navbar!");
    },
  },
};
</script>
