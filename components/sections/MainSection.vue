<template>
  <div class="flex flex-col w-full gap-10 pt-20 px-10 relative">
    <div class="flex flex-col w-full relative">
      <h2 class="font-semibold text-3xl">Good Morning!</h2>
      <p class="text-gray-500">Today, Wed 6 July 2025</p>
    </div>
    <div class="flex flex-col gap-3 items-center">
      <div
        class="flex flex-row justify-between items-center w-full bg-white rounded-xl py-3 px-4"
      >
        <div class="flex flex-row gap-4">
          <input type="checkbox" class="w-10 rounded-4xl checked:bg-black" />
          <span> Jogging </span>
        </div>
        <div class="items-center justify-center relative">
          <div class="cursor-pointer" @click="toggleDropdown">
            <Menu class="w-4" />
          </div>
        </div>
        {{ dropdownOpen }}
      </div>
    </div>

    <button class="absolute bottom-0">Create new task</button>
  </div>
</template>

<script>
import { Menu } from "lucide-vue-next";
import { ActionDropdown } from "@/utils/action.js";
import Dropdown from "@/components/ui/Dropdown.vue";

export default {
  name: "MainSection",
  components: {
    Menu,
    Dropdown,
  },
  data() {
    return {
      ActionDropdown,
      dropdownOpen: false,
      selectedItem: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    handleSelection(item) {
      this.selectedItem = item;
      this.dropdownOpen = false;
      console.log("Selected item:", item);
    },
  },
};
</script>
