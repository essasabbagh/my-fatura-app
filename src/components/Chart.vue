<template>
  <div class="p-5">
    <apexchart
      class="apexchart"
      type="line"
      :options="options"
      :series="series"
    ></apexchart>
    <pre>{{ allDate.billDate }}</pre>
    <pre>{{ options.xaxis.categories }}</pre>
    <button @click="test">hi</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 66, 49, 60, 70, 77],
        },
      ],
    };
  },
  methods: {
    test() {
      console.log("hi",this.allDate.billDate)
      this.options.xaxis.categories = this.allDate.billDate
    },
  },
  created() {
    this.$store.dispatch("fetchBills");
    this.test()
  },
  computed: {
    ...mapGetters({ bills: "billList" }),
    allDate() {
      return {
        billDate: this.bills.map((obj) => new Date(obj.date).getTime()),
      };
    },
  },
};
</script>
