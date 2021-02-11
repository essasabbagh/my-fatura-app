<template>
  <div class="flex justify-center px-6 my-12">
    <!-- Row -->
    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
      <!-- Col -->
      <div
        class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
        style="background-image: url('https://source.unsplash.com/5fNmWej4tAA/600x800')"
      ></div>
      <!-- Col -->
      <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
        <div class="px-8 mb-4 text-center">
          <h3 class="pt-4 mb-2 text-2xl">Add New Bill</h3>
          <!-- <p class="mb-4 text-sm text-gray-700">
            We get it, stuff happens. Just enter your email address below and
            we'll send you a link to reset your password!
          </p> -->
        </div>
        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <!-- Alert Error -->
          <div
            v-if="errorMessage"
            class="bg-red-200 px-6 py-4 my-5 rounded-md text-sm flex items-center mx-auto "
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
            <label class="block mb-2 text-gray-700" for="cost">
              Cost
            </label>
            <input
              v-model="billInfo.cost"
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="cost"
              type="email"
              placeholder="Enter Email Address..."
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 text-gray-700" for="date">
              Date
            </label>
            <input
              v-model="billInfo.date"
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              placeholder="Enter password..."
            />
          </div>
          <div
            class="options md:flex md:space-x-6 items-center text-gray-700 mt-4"
          >
            <p class="w-1/2 mb-2 md:mb-0">Type of bill</p>
            <select
              v-model="billInfo.type"
              class="w-full border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
            >
              <option class="text-gray-400" value="select" selected>
                Select an option
              </option>
              <option
                v-for="category in categories"
                :key="category.id"
                value="category"
                >{{ category.categoryName }}</option
              >
            </select>
          </div>

          <div
            class="options md:flex md:space-x-6 items-center text-gray-700 mt-4"
          >
            <label for="paid" class="block mb-2 text-gray-700">
              Has been paid?
            </label>
            <input
              v-model="billInfo.hasPaid"
              type="checkbox"
              name="paid"
              id="paid"
            />
          </div>

          <div class="text-sm flex flex-col mt-5">
            <label for="description" class="block mb-2 text-gray-700">
              Description
            </label>
            <textarea
              v-model="billInfo.description"
              rows="2"
              class=" appearance-none w-full border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
              placeholder="Enter your description"
            ></textarea>
          </div>

          <div class="mb-6 mt-6 text-center">
            <button
              @click="createNewBill"
              class="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add
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
      selectedCat: "select",
      billInfo: {
        cost: null,
        date: null,
        hasPaid: false,
        type: "select",
        description: "",
      },
    };
  },
  methods: {
    createNewBill() {
      console.log(this.billInfo);
      // this.$store.dispatch("createBill", {});
    },
  },
  mounted() {
    this.$store.dispatch("fetchCategory");
  },
  computed: {
    ...mapGetters({
      errorMessage: "errMessage",
      categories: "categoriesList",
    }),
  },
  watch: {
    billInfo() {
      if (this.billInfo.type.value === "select") {
        this.$store.commit("setError", "You have to select type of bill!");
      } else {
        this.$store.commit("setError", null);
      }
    },
  },
};
</script>
