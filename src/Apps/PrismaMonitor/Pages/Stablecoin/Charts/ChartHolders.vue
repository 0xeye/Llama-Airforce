<template>
  <CardGraph
    class="graph"
    :title="t('title')"
    :loading="loading"
    :options="options"
    :series="series"
  >
  </CardGraph>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { CardGraph, usePromise } from "@/Framework";
import { type DataPoint, round, unit } from "@/Util";
import { createChartStyles } from "@/Styles/ChartStyles";
import { getColors, getColorsArray } from "@/Styles/Themes/PM";
import { useSettingsStore } from "@PM/Stores";
import { getHost, MkUsdService } from "@PM/Services";
import { addressShort } from "@/Wallet";

const { t } = useI18n();
const mkUsdService = new MkUsdService(getHost());
const storeSettings = useSettingsStore();

// Data
const { loading, data } = usePromise(
  () =>
    mkUsdService.getLargeStableCoinHolders("ethereum").then((x) => x.holders),
  []
);

const options = computed((): unknown => {
  const colors = getColors(storeSettings.theme);
  const colorsArray = getColorsArray(storeSettings.theme);

  return createChartStyles(
    { colors, colorsArray },
    {
      chart: {
        id: "mainHolders",
        type: "donut",
        animations: {
          enabled: false,
        },
      },
      legend: {
        inverseOrder: true,
      },
      stroke: {
        width: 0.5,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "60%",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },

      tooltip: {
        custom: (x: DataPoint<number>) => {
          let label = categories.value[x.seriesIndex];
          label =
            label.length > 10 && label.startsWith("0x")
              ? addressShort(label)
              : label;
          const value = x.series[x.seriesIndex];
          const data = [
            `<div><b>${label}</b>:</div><div>${formatter(
              value as unknown as number
            )}</div>`,
          ];

          return data.join("");
        },
      },
      labels: data.value.map((x) =>
        x.label.length > 10 && x.label.startsWith("0x")
          ? addressShort(x.label)
          : x.label
      ),
    }
  );
});

const series = computed(() => data.value.map((x) => x.value));

const categories = computed(() => data.value.map((x) => x.label));

// Methods
const formatter = (x: number): string =>
  `$${round(Math.abs(x), 1, "dollar")}${unit(x, "dollar")}`;
</script>

<style lang="scss" scoped>
@import "@/Styles/Variables.scss";

.graph {
  ::v-deep(.card-body) {
    @media only screen and (max-width: 1280px) {
      height: 300px;
    }

    .apexcharts-tooltip {
      grid-template-rows: auto auto;
    }
  }
}
</style>

<i18n lang="yaml" locale="en">
title: Largest holders
numPos: "mkUSD balance:"
</i18n>
