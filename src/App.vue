<template>
  <div class="grid grid-rows-12 grid-cols-12 h-screen text-gray-700">
    <router-view
      name="appHeader"
      class="row-span-1 col-span-full max-h-24 shadow"
    />
    <router-view name="sideBar" class="row-span-5 col-span-1 max-w-max" />

    <transition name="fade">
      <router-view class="row-span-5 col-span-11 col-start-2" />
    </transition>
  </div>
</template>

<script>

export default {
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
