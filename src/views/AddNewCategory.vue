<template>
  <div class="flex justify-center px-6 my-12">
    <!-- Row -->
    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
      <!-- Col -->
      <div
        class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
        style="
          background-image: url('https://source.unsplash.com/MI8He1NWPWg/600x800');
        "
      ></div>
      <!-- Col -->
      <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
        <div class="px-8 mb-4 text-center">
          <h3 class="pt-4 mb-2 text-2xl">Add New Category</h3>
        </div>
        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <!-- Alert Success -->
          <div
            v-if="successMessage"
            class="bg-green-200 px-6 py-4 rounded-md text-sm flex items-center mx-auto"
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
            class="bg-red-200 px-6 py-4 rounded-md text-sm flex items-center mx-auto"
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
            <label class="block mb-2 text-gray-700" for="catName">
              Name Of Category
            </label>
            <input
              v-model="catName"
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="catName"
              type="email"
              placeholder="Enter name..."
            />
          </div>
          <div class="text-sm flex flex-col mt-5">
            <label for="description" class="block mb-2 text-gray-700">
              Description
            </label>
            <textarea
              v-model="description"
              id="description"
              rows="2"
              class="appearance-none w-full border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
              placeholder="Enter your description"
            ></textarea>
          </div>

          <div class="mb-6 mt-6 text-center flex flex-row justify-between">
            <button
              @click="addNewCat"
              class="w-full mt-2 mr-2 px-4 py-2 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-700 focus:outline-none focus:shadow-outline transition-all"
              type="button"
            >
              Add
            </button>
            <button
              @click="$router.go(-1)"
              class="w-full mt-2 px-4 py-2 font-bold text-white bg-gray-500 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline transition-all"
              type="button"
            >
              Cancel
            </button>
          </div>
          <hr class="mb-6 border-t" />
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
      catName: "",
      description: "",
    };
  },
  mounted() {
    this.$store.dispatch("fetchCategory");
    this.$store.commit("setSuccess", null);
  },
  methods: {
    addNewCat() {
      if (this.catName === "" || this.catName == null) {
        this.$store.commit("setError", "Empty value!");
      } else {
        this.$store.commit("setError", null);
        this.$store.dispatch("createCategory", {
          categoryName: this.catName,
          description: this.description,
        });
        this.catName = null;
        this.description = null;
      }
    },
  },
  computed: {
    ...mapGetters({
      errorMessage: "errMessage",
      successMessage: "sucMessage",
      categories: "categoriesList",
    }),
  },
};
</script>
