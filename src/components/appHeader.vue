<template>
  <nav
    class="flex items-center justify-between flex-wrap text-gray-900 bg-teal-500 p-6"
  >
    <div class="flex items-center flex-no-shrink mr-6">
      <span class="w-10 mr-5 text-gray-900 text-4xl"><i class="fas fa-wallet"></i></span>
      <span class="font-semibold text-2xl tracking-tight">My Fatura</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded border-teal-light hover:text-teal-50 hover:border-white"
      >
        <svg
          class="h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>

    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link
          to="/"
          class="block text-xl mt-4 lg:inline-block lg:mt-0 hover:text-teal-50 mr-4"
          >Home</router-link
        >

        <router-link
          to="/about"
          class="block text-xl mt-4 lg:inline-block lg:mt-0 hover:text-teal-50 mr-4"
          >About</router-link
        >
      </div>
      <div>
        <!-- <router-link
          to="/new"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-50 hover:bg-teal-700 mt-4 lg:mt-0"
          >Add New</router-link
        > -->
      </div>
      <router-link
        to="/newbill"
        class="fixed text-white bg-red-500 hover:text-teal-50 hover:bg-red-600 hover:shadow-sm transition-all"
        ><i class="fas fa-plus"></i
      ></router-link>
    </div>
  </nav>
</template>

<style>
svg {
  fill: #173834;
}
.fixed {
  text-align: center;
  font-weight: bolder;
  width: 4em;
  height: 4em;
  position: absolute;
  border: 5px solid white;
  border-radius: 50%;
  right: 25px;
  top: 65px;
  line-height: 3em;
}
</style>
