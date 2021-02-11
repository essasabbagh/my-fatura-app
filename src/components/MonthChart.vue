<template>
  <div>
    <button @click="test">test</button>
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

      // let arrs = this.bills.reduce((r, bill) => {
      //   const { date, cost, type } = bill;
      //   r[type] = [
      //     ...(r[type] || []),
      //     {
      //       date,
      //       cost,
      //     },
      //   ];
      //   return r;
      // }, {});
      // console.log(arrs);

      // let result = this.bills.reduce(function(r, a) {
      //   r[a.type] = r[a.type] || [];
      //   r[a.type].push(a.cost);
      //   return r;
      // }, Object.create(null));
      // console.log(result);
      console.log("series", this.series);
      console.log("bills", this.bills);

      // let bigArr = [];
      // for (const bill in this.bills) {
      //   if (Object.hasOwnProperty.call(this.bills, bill)) {
      //     const element = this.bills[bill];
      //     bigArr.push({ name: element.type, data: element.cost });
      //   }
      // }
      // console.log(bigArr);
      // const tt = this.bills.map((e) => (e = e.cost));
      // const ee = this.bills.filter((e) => (e = e.cost));
      // console.log(tt);
      // console.log(ee);

      // this.bills.forEach((e) => {
      //   console.log({ name: e.type, data: e.cost });
      // });

      // console.log("bills", this.bills.length);
      // console.log("allDate", this.allDate);
      // this.options.xaxis.categories = this.allDate.billDate
    }
  },
  created() {
    this.$store.dispatch("fetchBills");
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
