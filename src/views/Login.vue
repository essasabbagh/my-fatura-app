<template>
  <div class="flex justify-center px-6 my-12">
    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
      <div
        class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
        style="background-image: url('https://source.unsplash.com/fwqB5mJNOcE/600x800')"
      ></div>
      <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
        <div class="px-8 mb-4 text-center">
          <h3 class="pt-4 mb-2 text-2xl">Login</h3>
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
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="email"
            >
              Email
            </label>
            <input
              v-model="userInfo.email"
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Email Address..."
            />
          </div>
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="password"
            >
              Password
            </label>
            <input
              v-model="userInfo.password"
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter password..."
            />
          </div>
          <div class="mb-6 text-center">
            <button
              @click="login"
              class="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-700 focus:outline-none focus:shadow-outline transition-all"
              type="button"
            >
              Log in
            </button>
          </div>
          <hr class="mb-6 border-t" />
          <div class="text-center">
            <router-link
              to="/register"
              class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800 transition-all"
            >
              Create an Account!
            </router-link>
          </div>
          <div class="text-center">
            <router-link
              to="/reset"
              class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800 transition-all"
              href="./index.html"
            >
              Forget your password? Password Reset!
            </router-link>
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
      userInfo: { email: "", password: "" }
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.userInfo);
    }
  },
  computed: {
    ...mapGetters({
      errorMessage: "errMessage"
    })
  },
  watch: {
    password() {
      if (this.userInfo.email !== "" && this.userInfo.password !== "") {
        this.$store.commit("setError", "Empty value!");
      } else {
        this.$store.commit("setError", null);
      }
    }
  }
};
</script>
