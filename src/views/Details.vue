<template>
  <div>
    <div class="flex justify-around">
      <h1 class="text-4xl mt-5 mr-auto">Details:</h1>
      <div class="options md:flex md:space-x-6 items-center text-gray-700 mt-5 mr-auto">
        <p class="w-1/2 mb-2 md:mb-0">Filtering</p>
        <select
          class="w-full border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
        >
          <option value="select" selected>
            All
          </option>
          <option value="bug">report a bug</option>
          <option value="feature">Request a feature</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>
    </div>
    <div class="overflow-y-auto">
      <Table />
    </div>
  </div>
</template>

<script>
import Table from "../components/Table";
export default {
  components: {
    Table,
  },
};
</script>
