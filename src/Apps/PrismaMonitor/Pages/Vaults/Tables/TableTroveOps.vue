<template>
  <DataTable
    class="datatable-trove-ops"
    columns-header="1fr 1fr auto"
    columns-data="trove-ops-columns-data"
    :loading="loading"
    :rows="rows"
    :columns="[
      'Operation',
      'Collateral',
      'Debt',
      'Ratio',
      'Stake',
      'Tx',
      'Time',
    ]"
  >
    <template #header-content>
      <div class="title">{{ t("title") }}</div>
    </template>

    <template #row="props: { item: Row }">
      <div>{{ titleCase(props.item.operation) }}</div>

      <div class="number">
        <AsyncValue
          v-if="props.item.collateral"
          :value="props.item.collateral"
          :precision="3"
          :show-symbol="false"
          type="dollar"
        />
      </div>

      <div class="number">
        <AsyncValue
          type="dollar"
          :value="Math.round(props.item.debt)"
          :precision="Infinity"
        ></AsyncValue>
      </div>

      <div class="number">
        <AsyncValue
          v-if="props.item.cr"
          :value="props.item.cr * 100"
          :precision="2"
          type="percentage"
        />
      </div>

      <div class="number">
        <AsyncValue
          v-if="props.item.stake"
          :value="props.item.stake"
          :precision="2"
          :show-symbol="false"
          type="dollar"
        />
      </div>

      <div class="number">
        <a
          class="font-mono"
          :href="`https://etherscan.io/tx/${props.item.hash}`"
          target="_blank"
          @click.stop
        >
          {{ addressShort(props.item.hash) }}
        </a>
      </div>

      <div class="number">
        {{ relativeTime(props.item.timestamp) }}
      </div>
    </template>
  </DataTable>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import { orderBy } from "lodash";
import {
  AsyncValue,
  DataTable,
  usePromise,
  useRelativeTime,
} from "@/Framework";
import { addressShort } from "@/Wallet";
import {
  getHost,
  TroveService,
  type Trove,
  type TroveSnapshotData,
  type TroveManagerDetails,
} from "@PM/Services";

type Row = TroveSnapshotData;

const { t } = useI18n();

const troveService = new TroveService(getHost());

// Props
interface Props {
  vault?: TroveManagerDetails | null;
  trove?: Trove | null;
}
const { vault = null, trove = null } = defineProps<Props>();

// Refs
const { relativeTime } = useRelativeTime();

const rows = computed((): Row[] => {
  return orderBy(data.value, (row) => row.timestamp, "desc");
});

// Data
const { loading, data, load } = usePromise(() => {
  if (vault && trove) {
    return troveService
      .getTroveSnapshots("ethereum", vault.address, trove.owner)
      .then((x) => x.snapshots);
  } else {
    return Promise.resolve([]);
  }
}, []);

const titleCase = (s: string): string =>
  s.replace(/^_*(.)|_+(.)/g, (_, c: string, d: string) =>
    c ? c.toUpperCase() : " " + d.toUpperCase()
  );

// Watches
watch(() => vault, load);
</script>

<style lang="scss" scoped>
@import "@/Styles/Variables.scss";

.datatable-trove-ops {
  container-type: inline-size;

  .title {
    margin-right: 1rem;
  }

  ::v-deep(.trove-ops-columns-data) {
    --col-width: 12ch;

    display: grid;
    grid-template-columns:
      minmax(14ch, 0.75fr) repeat(5, minmax(var(--col-width), 0.75fr))
      1fr;

    // Mobile
    @media only screen and (max-width: 1280px) {
      gap: 0.25rem;

      @container (max-width: 800px) {
        grid-template-columns:
          minmax(14ch, 0.75fr) repeat(4, minmax(var(--col-width), 0.75fr))
          1fr;

        div:nth-child(5) {
          display: none;
        }
      }

      @container (max-width: 650px) {
        grid-template-columns:
          minmax(14ch, 0.75fr) repeat(3, minmax(var(--col-width), 0.75fr))
          1fr;

        div:nth-child(6) {
          display: none;
        }
      }

      @container (max-width: 520px) {
        grid-template-columns: minmax(14ch, 0.75fr) repeat(
            3,
            minmax(var(--col-width), 0.75fr)
          );

        div:nth-child(7) {
          display: none;
        }
      }
    }

    // Right adjust number columns.
    div:nth-child(2),
    div:nth-child(3),
    div:nth-child(4),
    div:nth-child(5),
    div:nth-child(6),
    div:nth-child(7) {
      justify-content: end;
    }
  }
}
</style>

<i18n lang="yaml" locale="en">
title: Operations
</i18n>
