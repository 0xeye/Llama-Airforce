<template>
  <CardGraph
    :title="t('title')"
    :loading="loading"
    :options="options"
    :series="series"
  ></CardGraph>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { round, unit } from "@/Util";
import { CardGraph, usePromise } from "@/Framework";
import { createChartStyles } from "@/Styles/ChartStyles";
import { getColors, getColorsArray } from "@/Styles/Themes/PM";
import { getHost, WrapperService, type Contract } from "@PM/Services";
import { useSettingsStore } from "@PM/Stores";

const { t } = useI18n();

type TooltipParams = {
  series: number[][];
  dataPointIndex: number;
  w: { globals: { seriesNames: string[] } };
};

const prismaService = new WrapperService(getHost());
const storeSettings = useSettingsStore();

// Props
interface Props {
  contract: Contract;
}

const { contract } = defineProps<Props>();

// Data
const { loading, data } = usePromise(() => prismaService.getFlow(contract), {
  deposits: [],
  withdrawals: [],
});

// eslint-disable-next-line max-lines-per-function
const options = computed(() => {
  const colors = getColors(storeSettings.theme);
  const colorsArray = getColorsArray(storeSettings.theme);

  return createChartStyles(
    { colors, colorsArray },
    {
      chart: {
        type: "bar",
        stacked: "true",
        animations: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: [colors.green, colors.red],

      xaxis: {
        categories: categories.value,
        labels: {
          formatter: formatterX,
          rotate: -60,
        },
        tickPlacement: "on",
      },
      yaxis: {
        labels: {
          formatter: formatterY,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },
      legend: {
        show: true,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        followCursor: false,
        enabled: true,
        intersect: true,
        custom: ({ series, dataPointIndex, w }: TooltipParams) => {
          let total = 0;
          const data = series.map((managerSeries, index) => {
            const value = managerSeries[dataPointIndex];
            total += value;
            return `<div><b>${w.globals.seriesNames[index]}</b>:\t${formatterY(
              value
            )}</div>`;
          });

          // Add total
          data.push(`<div><b>Total</b>:\t${formatterY(total)}</div>`);

          return data.join("");
        },
      },
    }
  );
});

const categories = computed((): string[] => {
  if (data.value.deposits.length === 0) {
    return [];
  }

  return data.value.deposits.map((point) => {
    return new Date(point.timestamp * 1000).toLocaleDateString(undefined, {
      day: "2-digit",
      month: "2-digit",
    });
  });
});

const series = computed((): { name: string; data: number[] }[] => [
  {
    name: t("deposits"),
    data: Object.values(data.value.deposits).map((x) => x.amount_usd),
  },
  {
    name: t("withdrawals"),
    data: Object.values(data.value.withdrawals).map((x) => -x.amount_usd),
  },
]);

// Methods
const formatterX = (x: string): string => x;
const formatterY = (y: number): string =>
  `$${round(y, 0, "dollar")}${unit(y, "dollar")}`;
</script>

<style lang="scss" scoped>
@import "@/Styles/Variables.scss";

.card-graph {
  ::v-deep(.card-body) {
    @media only screen and (max-width: 1280px) {
      height: 300px;
    }
  }
}
</style>

<i18n lang="yaml" locale="en">
title: Staking and unstaking
deposits: Deposits
withdrawals: Withdrawals
</i18n>
