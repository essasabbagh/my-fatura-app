<template>
  <div>
    <apexchart
      class="apexchart"
      type="line"
      width="825"
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
      options: {
        legend: {
          show: true,
          position: "right"
        },
        annotations: {
          yaxis: [
            {
              y: 222,
              borderColor: "red",
              label: {
                borderColor: "red",
                style: {
                  color: "#fff",
                  background: "red"
                },
                text: "max limit on 222"
              }
            }
          ]
        },
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        }
      },

      series: [
        {
          name: "series-1",
          data: [300, 420, 455, 166, 249, 360, 470, 277, 333, 155, 166]
        },
        {
          name: "series-2",
          data: [333, 424, 666, 555, 222, 360, 470, 277, 752, 155, 166]
        }
      ]
    };
  },
  methods: {
    test() {
      const merged = this.bills.reduce((r, { date, type, cost }) => {
        const key = `${type}`;
        r[key] = r[key] || {
          name: "",
          date,
          data: []
        };
        r[key]["name"] = type;
        r[key]["data"].push(cost);
        return r;
      }, {});
      const timeTable = Object.values(merged);
      console.log(timeTable);
      this.series = timeTable;

      console.log("series", this.series);
      console.log("bills", this.bills);
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
