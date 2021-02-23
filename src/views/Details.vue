<template>
  <div>
    <div class="flex justify-around">
      <h1 class="text-4xl mt-5 mr-auto">Details:</h1>
      <div
        class="options md:flex md:space-x-6 items-center text-gray-700 mt-5 mr-auto"
      >
        <p class="w-1/2 mb-2 md:mb-0">Filtering</p>
        <select
          @change="filtering()"
          v-model="filterValue"
          class="w-full border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
        >
          <option value="all" selected>
            All
          </option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.categoryName"
            >{{ category.categoryName }}</option
          >
        </select>
      </div>
    </div>
    <!-- <button @click="test">test</button> -->
    <div class="overflow-y-auto">
      <Table
        @selectedPage="selectedPage"
        :lastOfList="lastOfList"
        :currentPage="currentPage"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Table from "../components/Table";
export default {
  components: {
    Table
  },
  data() {
    return {
      filterValue: "all",
      pagesCount: 1,
      lastOfList: 0,
      currentPage: 1
    };
  },
  mounted() {
    this.$store.dispatch("fetchCategory");
    this.test();
  },
  methods: {
    test() {
      // this.lastOfList = 0;
      let catList;
      if (this.filterValue == "all") {
        // catList = this.catList; // return categories names
        // console.log(catList, this.lastOfList);
        this.$store.dispatch("fetchPageBills", {
          catList: "all",
          lastOfList: this.lastOfList
        });
      } else {
        const selectedCat = this.categories.filter(
          cat => cat.categoryName == this.filterValue
        );
        catList = selectedCat.map(cat => cat.categoryName);
        console.log("lastOfList", this.lastOfList);
        this.$store.dispatch("fetchPageBills", {
          catList: catList,
          lastOfList: this.lastOfList
        });
      }
      this.$store.commit("setPages", this.lastOfList); // for page bar
    },
    selectedPage(op) {
      if (op === "+" && this.currentPage < this.pages) {
        this.currentPage += 1;
        this.lastOfList += 6;
        console.log(this.pages, this.lastOfList);
        this.test();
        this.$store.commit("setPage", this.lastOfList);
        // this.$store.dispatch("fetchPageBills", this.num, this.filteredBill);
      } else if (op === "-" && this.lastOfList > 1) {
        this.currentPage -= 1;
        this.lastOfList -= 6;
        this.test();
        console.log(this.pages, this.lastOfList);
        this.$store.commit("setPage", this.lastOfList);
        // this.$store.dispatch("fetchPageBills", this.num, this.filteredBill);
      } else {
        console.log("Wrong", this.lastOfList);
      }
    },
    filtering() {
      this.lastOfList = 0;
      this.$store.commit("setPage", this.lastOfList);
      this.test();
      // console.log(this.filterValue);
      // if (e == "all") {
      //   // console.log(e);
      //   const catList = this.categories.map((cat) => cat.categoryName);
      //   // console.log(catList);
      //   this.$store.dispatch("fetchPageBills", catList,0);
      // } else {
      //   console.log("one", e);
      //   const catList = this.categories.filter((cat) => cat.categoryName == e);
      //   const catListName = catList.map((cat) => cat.categoryName);
      //   // console.log(catList);
      //   // console.log(catListName);
      //   this.$store.dispatch("fetchPageBills", catListName ,0);
      // }
    }
  },

  computed: {
    catList() {
      return this.categories.map(cat => cat.categoryName);
    },
    billListlength() {
      return this.bills.length;
    },
    ...mapGetters({
      errorMessage: "errMessage",
      categories: "categoriesList",
      bills: "billList",
      pages: "getPages"
    })
  }
};
</script>
