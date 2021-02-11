<template>
  <div class="flex justify-start  ">
    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
      <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
        <div class="px-8  text-left">
          <h3 class="pt-4 text-4xl">Setting:</h3>
        </div>
        <form class="px-8 pt-5 pb-8 mb-4 bg-white rounded">
          <div class="mb-4">
            <label class="block mb-2 text-gray-700" for="email">
              Color
            </label>
          </div>
          <div>
            <ul class="flex flex-row justify-center items-center">
              <li class="mr-4 last:mr-0">
                <span
                  class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300"
                >
                  <a
                    href="#blue"
                    class="block w-6 h-6 bg-teal-900 rounded-full"
                  ></a>
                </span>
              </li>
              <li class="mr-4 last:mr-0">
                <span
                  class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300"
                >
                  <a
                    href="#yellow"
                    class="block w-6 h-6 bg-yellow-500 rounded-full"
                  ></a>
                </span>
              </li>
              <li class="mr-4 last:mr-0">
                <span
                  class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300"
                >
                  <a
                    href="#red"
                    class="block w-6 h-6 bg-red-500 rounded-full"
                  ></a>
                </span>
              </li>
              <li class="mr-4 last:mr-0">
                <span
                  class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300"
                >
                  <a
                    href="#green"
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
              class="w-full border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
            >
              <option value="select" selected>
                Select an option
              </option>
              <option value="bug">TL</option>
              <option value="feature">USD</option>
              <option value="feedback">EUR</option>
            </select>
          </div>

          <div
            class="options md:flex md:space-x-6 items-center text-gray-700 mt-4"
          >
            <p class="w-1/2 mb-2 md:mb-0">
              <input type="checkbox" name="" id="" /> Has been finish?
            </p>
          </div>
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
