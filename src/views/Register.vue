<template>
  <div class="flex justify-center px-6 my-12 ">
    <!-- Row -->
    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
      <!-- Col -->
      <div
        class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
        style="background-image: url('https://source.unsplash.com/7XGtYefMXiQ/600x800')"
      ></div>
      <!-- Col -->
      <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
        <div class="px-8 mb-4 text-center">
          <h3 class="pt-4 mb-2 text-2xl">Register</h3>
          <!-- <p class="mb-4 text-sm text-gray-700">
            We get it, stuff happens. Just enter your email address below and
            we'll send you a link to reset your password!
          </p> -->
        </div>
        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="email"
            >
              Name
            </label>
            <input
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your name..."
            />
          </div>
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
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="email"
            >
              Re-enter Password
            </label>
            <input
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter password..."
            />
          </div>
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="email"
            >
              <input type="checkbox" name="" id="" />
              Accept every thing
            </label>
            <!-- <input
              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="checkbox"
              placeholder="Enter password..."
            /> -->
          </div>

          <div class="mb-6 text-center">
            <button
              class="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign in
            </button>
          </div>
          <hr class="mb-6 border-t" />
          <!-- <div class="text-center">
            <a
              class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              href="./register.html"
            >
              Create an Account!
            </a>
          </div> -->
          <div class="text-center">
            <router-link
              to="/login"
              class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
            >
              Already have an account? Login!
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<!-- <div class="h-screen grid grid-rows-1 grid-cols-2">
    <div
      class="card bg-gray-50 p-10 md:rounded-lg my-8 mx-auto shadow-2xl w-3/4"
    >
      <div class="title">
        <h1 class="font-bold text-center text-2xl">Register</h1>
      </div>

      <div class="form mt-4">
        <div class="flex flex-col text-sm">
          <label for="title" class="font-bold mb-2">Name</label>
          <input
            class=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
            type="text"
            placeholder="Enter your name"
          />
        </div>
      </div>

      <div class="form mt-4">
        <div class="flex flex-col text-sm">
          <label for="title" class="font-bold mb-2">Email</label>
          <input
            class=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
            type="text"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div class="form mt-4">
        <div class="flex flex-col text-sm">
          <label for="title" class="font-bold mb-2">Password</label>
          <input
            class=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
            type="text"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <div class="form mt-4">
        <div class="flex flex-col text-sm">
          <label for="title" class="font-bold mb-2">Password again</label>
          <input
            class=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
            type="text"
            placeholder="Re-Enter your password"
          />
        </div>
      </div>
      <div class="form mt-4">
        <div class="flex flex-col text-sm">
          <label for="title" class="font-bold mb-2"
            ><input type="checkbox" name="accept" id="accept" /> Accept every
            thing</label
          >
        </div>
      </div>
      <div class="submit">
        <button
          type="submit"
          class="w-full bg-blue-600 shadow-lg text-white px-4 py-2 hover:bg-blue-700 mt-8 text-center font-semibold focus:outline-none"
        >
          sign in
        </button>
      </div>
    </div>
    <img src="https://picsum.photos/2000" alt="" class="h-screen" />
  </div> -->
