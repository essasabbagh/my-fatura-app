<template>
  <nav
    class="flex items-center justify-between text-gray-900 p-6"
    :class="color"
  >
    <div class="flex items-center flex-no-shrink mr-6">
      <span class="w-10 mr-5 text-gray-900 text-4xl"
        ><i class="fas fa-wallet"></i
      ></span>
      <span class="font-semibold text-2xl w-0 invisible sm:w-max sm:visible"
        >My Fatura</span
      >
    </div>
    <div class="w-full flex-grow flex items-center relative">
      <div class="text-sm lg:flex-grow">
        <router-link
          to="/"
          class="text-xl inline-block mt-0 hover:text-teal-50 mr-4"
          >Home</router-link
        >

        <router-link
          to="/about"
          class="text-xl inline-block mt-0 hover:text-teal-50 mr-4"
          >About</router-link
        >
      </div>
      <div></div>
      <router-link
        to="/newbill"
        class="absolute text-white bg-red-500 hover:text-teal-50 hover:bg-red-600 hover:shadow-sm transition-all"
        ><i class="fas fa-plus"></i
      ></router-link>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      setting: "allSetting",
    }),
    color() {
      return [
        this.setting.color == "teal" ? "bg-teal-500" : "",
        this.setting.color == "red" ? "bg-red-500" : "",
        this.setting.color == "yellow" ? "bg-yellow-500" : "",
        this.setting.color == "blue" ? "bg-blue-500" : "",
      ];
    },
  },
};
</script>
<style>
svg {
  fill: #173834;
}
.absolute {
  text-align: center;
  font-weight: 900;
  width: 4em;
  height: 4em;
  position: absolute;
  border: 5px solid white;
  border-radius: 50%;
  right: 4em;
  top: 45px;
  line-height: 3.2em;
  z-index: 5;
}
@media (max-width: 640px) {
  .absolute {
    right: 1em;
  }
}
</style>
