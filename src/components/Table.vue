<template>
  <div class="container overflow-y-scroll">
    <table
      class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5"
    >
      <thead class="text-white">
        <tr
          v-for="bill in bills"
          :key="bill.id"
          class="bg-teal-500 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
        >
          <th class="p-3 text-left">Type</th>
          <th class="p-3 text-left">Cost</th>
          <th class="p-3 text-left">Date</th>
          <th class="p-3 text-left">Payment</th>
          <th class="p-3 text-left">Descrption</th>
          <th class="p-3 text-left" width="110px">Delete</th>
        </tr>
      </thead>
      <tbody class="flex-1 sm:flex-none">
        <tr
          v-for="bill in bills"
          :key="bill.id"
          class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
        >
          <td class="border-grey-light border hover:bg-gray-100 p-3">
            {{ bill.type }}
          </td>
          <td class="border-grey-light border hover:bg-gray-100 p-3">
            {{ bill.cost }} $
          </td>
          <td class="border-grey-light border hover:bg-gray-100 p-3">
            {{ bill.date }}
          </td>
          <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
            {{ bill.hasPaid }}
          </td>
          <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
            {{ bill.description }}
          </td>
          <td
            class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"
          >
            Delete
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex flex-col items-center">
      <div class="flex text-gray-700">
        <div
          class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-left w-6 h-6"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
        <div class="flex h-12 font-medium rounded-full bg-gray-200">
          <div
            class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  "
          >
            1
          </div>
          <div
            class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white "
          >
            2
          </div>
          <div
            class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  "
          >
            3
          </div>
          <div
            class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  "
          >
            ...
          </div>
          <div
            class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  "
          >
            13
          </div>
          <div
            class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  "
          >
            14
          </div>
          <div
            class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  "
          >
            15
          </div>
          <div
            class="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white"
          >
            2
          </div>
        </div>
        <div
          class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-right w-6 h-6"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // bills: [],
    };
  },
  methods: {},
  created() {
    this.$store.dispatch("fetchBills");
  },
  computed: {
    ...mapGetters({ bills: "billList" }),
  },
};
</script>

<style scope="this api replaced by slot-scope in 2.5.0+">
@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}

td:not(:last-child) {
  border-bottom: 0;
}

th:not(:last-child) {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
</style>
