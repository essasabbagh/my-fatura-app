<template>
  <div class="grid grid-rows-12 grid-cols-12 h-screen">
    <router-view name="appHeader" class="row-span-1 col-span-full max-h-24 shadow" />
    <router-view name="sideBar" class="row-span-5 col-span-1 max-w-max" />
    <!-- <div class="col-span-12 "></div> -->
    <transition name="fade">
    <router-view class="row-span-5 col-span-11 col-start-2" />
    </transition>
  </div>
  <!-- <Alert /> -->
</template>

<script>
// import sideBar from "@/components/sideBar";

export default {
  // components: { sideBar },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
