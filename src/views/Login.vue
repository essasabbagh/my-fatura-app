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
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="email"
            >
              Email
            </label>
            <input
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Email Address..."
            />
          </div>
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="email"
            >
              Password
            </label>
            <input
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter password..."
            />
          </div>
          <div class="mb-6 text-center">
            <button
              class="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log in
            </button>
          </div>
          <hr class="mb-6 border-t" />
          <div class="text-center">
            <router-link
              to="/register"
              class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
            >
              Create an Account!
            </router-link>
          </div>
          <div class="text-center">
            <router-link
              to="/reset"
              class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
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
