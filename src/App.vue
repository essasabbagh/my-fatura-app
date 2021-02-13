<template>
  <div class="grid grid-rows-6 grid-cols-12 h-screen text-gray-700">
    <router-view name="appHeader" class="row-span-1 col-span-full shadow" />
    <router-view name="sideBar" class="row-span-5 col-span-1 max-w-max" />

    <router-view class="row-span-5 col-span-11 col-start-2" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("isAuthentication");
    this.$store.commit(
      "setSetting",
      JSON.parse(localStorage.getItem("setting"))
    );
  },
};
</script>
