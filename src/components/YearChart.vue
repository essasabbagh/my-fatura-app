<template>
  <div>
    <apexchart
      class="apexchart"
      type="bar"
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
        // annotations: {
        //   yaxis: [
        //     {
        //       y: 222,
        //       borderColor: "red",
        //       label: {
        //         borderColor: "red",
        //         style: {
        //           color: "#fff",
        //           background: "red"
        //         },
        //         text: "max limit on 222"
        //       }
        //     }
        //   ]
        // },
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: ["monthes"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [50, 55]
        }
      ]
    };
  },
  methods: {
    // test() {
    //   const merged = this.bills.reduce((r, { date, type, cost }) => {
    //     const key = `${type}`;
    //     r[key] = r[key] || {
    //       name: "",
    //       date,
    //       data: [],
    //     };
    //     r[key]["name"] = type;
    //     r[key]["data"].push(cost);
    //     return r;
    //   }, {});
    //   const timeTable = Object.values(merged);
    //   console.log(timeTable);
    //   this.series = timeTable;

    //   console.log("series", this.series);
    //   console.log("bills", this.bills);
    // },
    newTest() {
      var resulte = [];
      this.bills.reduce((res, value) => {
        const month = value.date.slice(5, 7);
        if (!res[month]) {
          res[month] = { name: month, data: [] };
          resulte.push(res[month]);
        }
        res[month].data.push(parseInt(value.cost));
        return res;
      }, {});
      var newRes = resulte.map(e => {
        const dataSum = [e.data.reduce((a, b) => a + b, 0)];
        return { name: e.name, data: dataSum };
      });
      const monthesNames = [
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
      ];
      this.series = newRes;
      let newArr = this.series;
      for (let i = 0; i < newArr.length; i++) {
        newArr[i].name = monthesNames[i];
      }
      // console.log(newArr);
      // this.options.xaxis.categories = newArr;
    }
  },
  created() {
    this.$store.dispatch("fetchBills");
    this.newTest();
  },
  computed: {
    ...mapGetters({ bills: "billList" })
    // allDate() {
    //   return {
    //     billDate: this.bills.map((obj) => new Date(obj.date).getTime()),
    //   };
    // },
  }
};
</script>
