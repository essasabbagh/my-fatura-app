<template>
  <aside
    class="flex flex-col items-center bg-white text-gray-700 text-2xl shadow h-full"
  >
    <ul>
      <li class="hover:bg-gray-100">
        <router-link
          v-if="!isAuth"
          to="/"
          class="h-16 px-6 flex justify-center items-center w-full hover:bg-teal-200
					focus:text-teal-500"
        >
          <i class="fas fa-home"></i>
        </router-link>
      </li>
      <li class="hover:bg-gray-100">
        <router-link
          v-if="isAuth"
          to="/month"
          class="h-16 px-6 flex justify-center items-center w-full hover:bg-teal-200
					focus:text-teal-500"
        >
          <i class="fas fa-chart-line"></i>
        </router-link>
      </li>
      <li class="hover:bg-gray-100">
        <router-link
          v-if="isAuth"
          to="/year"
          class="h-16 px-6 flex justify-center items-center w-full hover:bg-teal-200
					focus:text-teal-500"
        >
          <i class="fas fa-chart-bar"></i>
        </router-link>
      </li>
      <li class="hover:bg-gray-100">
        <router-link
          v-if="isAuth"
          to="/percentage"
          class="h-16 px-6 flex justify-center items-center w-full hover:bg-teal-200
					focus:text-teal-500"
        >
          <i class="fas fa-chart-pie"></i>
        </router-link>
      </li>
      <li class="hover:bg-gray-100">
        <router-link
          v-if="isAuth"
          to="/details"
          class="h-16 px-6 flex justify-center items-center w-full hover:bg-teal-200
					focus:text-teal-500"
        >
          <i class="fas fa-table"></i>
        </router-link>
      </li>
    </ul>

    <div class="mt-auto flex flex-col items-center w-full">
      <router-link
        v-if="isAuth"
        to="/profile"
        class="h-16 px-6 flex justify-center items-center w-full hover:bg-green-300
					focus:text-blue-500"
      >
        <i class="fas fa-user-circle"></i>
      </router-link>
      <router-link
        v-if="!isAuth"
        to="/login"
        class="h-16 px-6 flex justify-center items-center w-full hover:bg-green-300
					focus:text-green-500"
      >
        <i class="fas fa-sign-in-alt"></i>
      </router-link>
      <router-link
        v-if="isAuth"
        to="/setting"
        class="h-16 mx-auto flex justify-center items-center
				w-full focus:text-yellow-500 hover:bg-yellow-300 focus:outline-none"
      >
        <i class="fas fa-cogs"></i>
      </router-link>
      <botton
        @click="$store.dispatch('logout')"
        v-if="isAuth"
        class="h-16 mx-auto flex justify-center items-center
				w-full focus:text-red-500 hover:bg-red-300 focus:outline-none"
      >
        <i class="fas fa-sign-out-alt"></i>
      </botton>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      isAuth: "isAuth"
    })
  }
};
</script>
