<template>
  <div>
    <apexchart
      class="apexchart"
      type="donut"
      width="640"
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
      options: { labels: ["Apple", "Mango", "Orange", "Watermelon"] },
      series: [300, 420, 455, 166, 249, 360, 470, 277, 333, 155, 166]
    };
  },
  methods: {
    test() {
      var result = [];

      this.bills.reduce((res, value) => {
        if (!res[value.type]) {
          res[value.type] = { labels: value.type, series: 0 };
          result.push(res[value.type]);
        }
        res[value.type].series += parseInt(value.cost);
        return res;
      }, {});

      this.options = { labels: result.map(e => e.labels) };
      this.series = result.map(e => e.series);
    }
  },
  created() {
    this.$store.dispatch("fetchBills");
    this.test();
  },
  computed: {
    ...mapGetters({ bills: "billList" }),
    allDate() {
      return {
        billDate: this.bills.map(obj => new Date(obj.date).getTime())
      };
    }
  }
};
</script>
