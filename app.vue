<template>
  <div class="flex flex-row gap-4 bg-gray-100">
    <Navbar />
    <MainSection />
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar.vue";
import MainSection from "./components/sections/MainSection.vue";

export default {
  components: {
    Navbar,
    MainSection,
  },
  methods: {
    callNavbarMethod() {
      this.$ref.navbarRef.sayHello();
    },
    callMainSectionMethod() {
      this.$ref.mainsection.sayHelloMainSection();
    },
  },
};
</script>
