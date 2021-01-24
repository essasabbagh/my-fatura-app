<template>
  <div class="grid grid-rows-1 grid-flow-col gap-5 h-screen">
    <side-bar class="col-span-1 " />
    <div class="col-span-11 gap-5 overflow-y-scroll">
      <Chart class="shadow-md" />
      <Table class="shadow-md" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import sideBar from "../components/sideBar";
import Table from "../components/Table";
import Chart from "../components/Chart";

export default {
  name: "Home",
  components: { Table, sideBar, Chart }
};
</script>
