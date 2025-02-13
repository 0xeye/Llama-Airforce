<template>
  <GraphApex
    class="chart"
    :options="options"
    :series="series"
  ></GraphApex>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { chain } from "lodash";
import { GraphApex } from "@/Framework";
import { createChartStyles } from "@/Styles/ChartStyles";
import { getColors, getColorsArray } from "@/Styles/Themes/CM";
import { round, unit } from "@/Util";
import { useSettingsStore } from "@CM/Stores";
import { type CrvUsdSupply } from "@CM/Pages/Platform/CrvUsd/Services/CurveService";

type Serie = { name: string; data: { x: string; y: number }[] };

// Props
interface Props {
  data: CrvUsdSupply[];
}

const { data = [] } = defineProps<Props>();

// Refs
const storeSettings = useSettingsStore();

// eslint-disable-next-line max-lines-per-function
const options = computed(() => {
  const colors = getColors(storeSettings.theme);
  const colorsArray = getColorsArray(storeSettings.theme);

  return createChartStyles(
    { colors, colorsArray },
    {
      chart: {
        type: "bar",
        stacked: true,
        animations: {
          enabled: false,
        },
      },
      xaxis: {
        categories: categories.value,
        labels: {
          formatter: formatterX,
          rotate: 0,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          formatter: formatterY,
        },
        min: 0,
        max: max.value,
      },
      plotOptions: {
        bar: {
          columnWidth: "75%",
          dataLabels: {
            position: "top",
            hideOverflowingLabels: false,
          },
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        followCursor: false,
        enabled: true,
      },
    }
  );
});

const categories = computed((): string[] =>
  chain(data)
    .orderBy((x) => x.timestamp, "asc")
    .groupBy((x) => x.timestamp)
    .map((_, timestamp) =>
      new Date(parseInt(timestamp, 10) * 1000).toLocaleDateString(undefined, {
        day: "2-digit",
        month: "2-digit",
      })
    )
    .map((x, i) => (i % 8 === 0 ? x : ""))
    .value()
);

const series = computed((): Serie[] =>
  chain(data)
    .groupBy((x) => x.name)
    .map((supply, market) => ({
      name: market,
      data: chain(supply)
        .orderBy((s) => s.timestamp, "asc")
        .map((s) => ({
          x: new Date(s.timestamp * 1000).toLocaleDateString(),
          y: s.totalSupply,
        }))
        .value(),
    }))
    .value()
);

const max = computed(
  (): number =>
    Math.max(
      ...chain(data)
        .groupBy((x) => x.timestamp)
        .map((supply) => supply.reduce((acc, x) => acc + x.totalSupply, 0))
        .value()
    ) * 1.1
);

const formatterX = (x: string): string => x;

const formatterY = (y: number): string =>
  `${round(y, 1, "dollar")}${unit(y, "dollar")}`;
</script>

<style lang="scss" scoped>
@import "@/Styles/Variables.scss";

.chart {
  height: 300px;
  z-index: 0;

  &::v-deep(.apexcharts-tooltip-title) {
    display: none;
  }
}
</style>
