<template>
  <div>
    <apexchart
      class="apexchart"
      type="donut"
      width="680"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      options: {labels: ['Apple', 'Mango', 'Orange', 'Watermelon']},
      series: [300, 420, 455, 166, 249, 360, 470, 277, 333, 155, 166]
      // options: {
      //   legend: {
      //     show: true,
      //     position: "right",
      //   },
      //   annotations: {
      //     yaxis: [
      //       {
      //         y: 222,
      //         borderColor: "red",
      //         label: {
      //           borderColor: "red",
      //           style: {
      //             color: "#fff",
      //             background: "red",
      //           },
      //           text: "max limit on 222",
      //         },
      //       },
      //     ],
      //   },
      //   chart: {
      //     id: "vuechart-example",
      //   },
      //   xaxis: {
      //     categories: [
      //       "Jan",
      //       "Feb",
      //       "Mar",
      //       "Apr",
      //       "May",
      //       "Jun",
      //       "Jul",
      //       "Aug",
      //       "Sep",
      //       "Oct",
      //       "Nov",
      //       "Dec",
      //     ],
      //   },
      // },
      // series: [
      //   {
      //     name: "series-1",
      //     data: [300, 420, 455, 166, 249, 360, 470, 277, 333, 155, 166],
      //   },
      // ],
    };
  },
  methods: {
    test() {
      console.log("hi", this.allDate.billDate);
      // this.options.xaxis.categories = this.allDate.billDate
    },
  },
  created() {
    this.$store.dispatch("fetchBills");
    this.test();
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
