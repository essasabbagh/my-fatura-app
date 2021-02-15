<template>
  <div class="flex justify-start  ">
    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
      <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
        <div class="px-8  text-left">
          <h3 class="pt-4 text-4xl">Setting:</h3>
        </div>
        <form class="px-8 pt-5 pb-8 mb-4 bg-white rounded">
          <!-- Alert Success -->
          <div
            v-if="successMessage"
            class="bg-green-200 px-6 py-4 rounded-md text-sm flex items-center mx-auto "
          >
            <svg
              viewBox="0 0 24 24"
              class="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <span class="text-green-800">{{ successMessage }}</span>
          </div>
          <!-- End Alert Success -->
          <!-- Alert Error -->
          <div
            v-if="errorMessage"
            class="bg-red-200 px-6 py-4 rounded-md text-sm flex items-center mx-auto "
          >
            <svg
              viewBox="0 0 24 24"
              class="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
            >
              <path
                fill="currentColor"
                d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
              ></path>
            </svg>
            <span class="text-red-800">{{ errorMessage }} </span>
          </div>
          <!-- End Alert Error -->
          <div class="mb-4">
            <label class="block mb-2 text-gray-700" for="email">
              Color
            </label>
          </div>
          <div>
            <ul class="flex flex-row justify-center items-center">
              <li class="mr-4 last:mr-0">
                <span
                  class="block p-1 border-2  rounded-full transition ease-in duration-300"
                  :class="[
                    setting.color == 'teal'
                      ? 'border-gray-500'
                      : 'border-white hover:border-gray-500'
                  ]"
                >
                  <!-- :class="{
                    'border-gray-500': isTeal,
                    'border-white hover:border-gray-500': !isTeal,
                  }" -->
                  <a
                    @click="setColor('teal')"
                    class="block w-6 h-6 bg-teal-900 rounded-full"
                  ></a>
                </span>
              </li>
              <li class="mr-4 last:mr-0">
                <span
                  class="block p-1 border-2 rounded-full transition ease-in duration-300"
                  :class="[
                    setting.color == 'yellow'
                      ? 'border-gray-500'
                      : 'border-white hover:border-gray-500'
                  ]"
                >
                  <a
                    @click="setColor('yellow')"
                    class="block w-6 h-6 bg-yellow-500 rounded-full"
                  ></a>
                </span>
              </li>
              <li class="mr-4 last:mr-0">
                <span
                  class="block p-1 border-2 rounded-full transition ease-in duration-300"
                  :class="[
                    setting.color == 'red'
                      ? 'border-gray-500'
                      : 'border-white hover:border-gray-500'
                  ]"
                >
                  <a
                    @click="setColor('red')"
                    class="block w-6 h-6 bg-red-500 rounded-full"
                  ></a>
                </span>
              </li>
              <li class="mr-4 last:mr-0">
                <span
                  class="block p-1 border-2 rounded-full transition ease-in duration-300"
                  :class="[
                    setting.color == 'blue'
                      ? 'border-gray-500'
                      : 'border-white hover:border-gray-500'
                  ]"
                >
                  <a
                    @click="setColor('blue')"
                    class="block w-6 h-6 bg-blue-500 rounded-full"
                  ></a>
                </span>
              </li>
            </ul>
          </div>
          <div class="mb-4">
            <label class="block mb-2 text-gray-700" for="limit">
              Limit
            </label>
            <input
              v-model="setting.limit"
              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="limit"
              type="number"
              placeholder="Enter limit"
            />
          </div>
          <div
            class="options md:flex md:space-x-6 items-center text-gray-700 mt-5"
          >
            <p class="w-1/2 mb-2 md:mb-0">Type of Currency</p>
            <select
              v-model="setting.currency"
              class="w-full border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
            >
              <option value="₺" selected>TL</option>
              <option value="$">USD</option>
              <option value="€">EUR</option>
            </select>
          </div>
          <!-- <div
            class="options md:flex md:space-x-6 items-center text-gray-700 mt-4"
          >
            <p class="w-1/2 mb-2 md:mb-0">
               Has been finish?
            </p>
              <input type="checkbox" name="" id="" />
          </div> -->
          <div class="mb-6 mt-6 text-center">
            <a
              href="/newcategory"
              class="block w-full px-4 py-2 font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-600 focus:outline-none focus:shadow-outline transition-all"
              type="button"
            >
              Add New Category <i class="fas fa-external-link-alt"></i>
            </a>
            <hr class="my-5 border-t" />
            <button
              @click="saveSetting"
              class="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-700 focus:outline-none focus:shadow-outline transition-all"
              type="button"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      setting: {
        currency: "₺",
        color: "",
        limit: 222
      }
    };
  },
  mounted() {
    const setting = localStorage.getItem("setting");
    if (setting) {
      this.$store.commit(
        "setSetting",
        JSON.parse(localStorage.getItem("setting"))
      );
    } else {
      this.$store.commit("setSetting", {
        currency: "₺",
        color: "",
        limit: 0
      });
    }
    this.setting = JSON.parse(localStorage.getItem("setting"));

    this.$store.commit("setSuccess", null);
  },
  methods: {
    setColor(color) {
      this.setting.color = color;
    },
    saveSetting() {
      if (this.setting.limit === "") {
        this.$store.commit("setError", "Limit value is invalid!");
      } else {
        this.$store.commit("setSetting", this.setting);
      }
    }
  },
  computed: {
    ...mapGetters({
      errorMessage: "errMessage",
      successMessage: "sucMessage"
    })
  }
};
</script>
