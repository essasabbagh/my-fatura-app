<template>
  <div class="flex justify-center px-6 my-12">
    <!-- Row -->
    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
      <!-- Col -->
      <div
        class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
        style="background-image: url('https://source.unsplash.com/MI8He1NWPWg/600x800')"
      ></div>
      <!-- Col -->
      <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
        <div class="px-8 mb-4 text-center">
          <h3 class="pt-4 mb-2 text-2xl">Add New Category</h3>
          <!-- <p class="mb-4 text-sm text-gray-700">
            We get it, stuff happens. Just enter your email address below and
            we'll send you a link to reset your password!
          </p> -->
        </div>
        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div class="mb-4">
            <label class="block mb-2 text-gray-700" for="catName">
              Name Of Category
            </label>
            <input
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
              rows="2"
              class=" appearance-none w-full border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
              placeholder="Enter your description"
            ></textarea>
          </div>

          <div class="mb-6 mt-6 text-center">
            <button
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
