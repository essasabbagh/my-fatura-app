<template>
  <div>
    <h1 class="text-4xl mt-5">Percentage:</h1>
    <DonutChart class="test" />
    <!-- <div class="col-span-11 gap-5">
      <Chart class="shadow-md" />
      <Table class="shadow-md" />
    </div> -->
  </div>
</template>
<script>
import DonutChart from "../components/DonutChart";
export default {
  components: { DonutChart }
};
</script>