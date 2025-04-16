<template>
  <client-only>
    <div
      ref="dropdown"
      class="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md"
    >
      <ul>
        <li
          v-for="item in items"
          :key="item.value"
          class="px-4 py-2 cursor-pointer hover:bg-gray-100"
          @click="selectItem(item)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </client-only>
</template>

<script>
import { onClickOutside } from "@vueuse/core";

export default {
  props: {
    items: Array,
    open: Boolean,
  },
  setup() {
    const dropdown = ref(null);

    onClickOutside(dropdown, () => {
      console.log("Clicked outside!");
    });

    return {
      dropdown,
    };
  },
  methods: {
    selectItem(item) {
      this.$emit("select", item);
    },
  },
};
</script>
