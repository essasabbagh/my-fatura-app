<template>
  <aside
    class="flex flex-col items-center bg-white text-gray-700 text-2xl shadow h-full"
  >
    <ul>
      <li class="hover:bg-gray-100">
        <a
          href="#"
          class="h-16 px-6 flex justify-center items-center w-full hover:bg-teal-200
					focus:text-teal-500"
        >
          <i class="fas fa-home"></i>
        </a>
      </li>
      <li class="hover:bg-gray-100">
        <router-link
          to="/year"
          class="h-16 px-6 flex justify-center items-center w-full hover:bg-teal-200
					focus:text-teal-500"
        >
          <i class="far fa-calendar-alt"></i>
        </router-link>
      </li>
      <li class="hover:bg-gray-100">
        <router-link
          to="/details"
          class="h-16 px-6 flex justify-center items-center w-full hover:bg-teal-200
					focus:text-teal-500"
        >
          <i class="fas fa-info-circle"></i>
        </router-link>
      </li>
      <li class="hover:bg-gray-100">
        <router-link
          to="/percentage"
          class="h-16 px-6 flex justify-center items-center w-full hover:bg-teal-200
					focus:text-teal-500"
        >
          <i class="fas fa-percentage"></i>
        </router-link>
      </li>
      
      
      

      <!-- <li class="hover:bg-gray-100">
        <a
          href="#"
          class="h-16 px-6 flex justify-center items-center w-full
					focus:text-teal-500"
        >
          <i class="fas fa-bell"></i>
        </a>
      </li> -->
    </ul>

    <div  class="mt-auto flex flex-col items-center w-full">
      <router-link
      v-if="true"
        to="/register"
        class="h-16 px-6 flex justify-center items-center w-full hover:bg-green-300
					focus:text-teal-500"
      >
        <i class="fas fa-sign-in-alt"></i>
      </router-link>
      <router-link
      v-if="true"
        to="/setting"
        class="h-16 w-10 mx-auto flex justify-center items-center
				w-full focus:text-red-500 hover:bg-yellow-300 focus:outline-none"
      >
        <i class="fas fa-cogs"></i>
      </router-link>
      <router-link
      v-if="true"
        to="/login"
        class="h-16 w-10 mx-auto flex justify-center items-center
				w-full focus:text-red-500 hover:bg-red-300 focus:outline-none"
      >
        <i class="fas fa-sign-out-alt"></i>
      </router-link>
    </div>
  </aside>
</template>
