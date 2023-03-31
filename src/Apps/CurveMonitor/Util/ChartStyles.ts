import {
  ChartOptions,
  DeepPartial,
  ColorType,
  LineStyle,
} from "lightweight-charts";
import { mergeWith } from "lodash";
import type { Theme } from "@/Apps/CurveMonitor/Models/Theme";
import { getColors } from "@/Util";

const createDefault = (
  chartRef: HTMLElement,
  theme: Theme
): DeepPartial<ChartOptions> => {
  const colors = getColors(theme);

  return {
    width: chartRef.clientWidth,
    height: chartRef.clientHeight,
    layout: {
      background: {
        type: ColorType.Solid,
        color: colors.backgroundColor,
      },
      textColor: colors.level5,
      fontFamily: "SF Mono, Consolas, monospace",
    },
    grid: {
      vertLines: {
        visible: false,
      },
      horzLines: {
        color: colors.level4,
        style: theme === "light" ? LineStyle.SparseDotted : LineStyle.Solid,
      },
    },
    rightPriceScale: {
      borderVisible: false,
    },
    timeScale: {
      borderVisible: false,
      fixLeftEdge: true,
      fixRightEdge: true,
    },
    handleScale: false,
    handleScroll: false,
  };
};

export default function createChartStyles(
  chartRef: HTMLElement,
  theme: Theme,
  options: DeepPartial<ChartOptions>
): DeepPartial<ChartOptions> {
  const _default = createDefault(chartRef, theme);

  const mergeFunction = (objValue: unknown, srcValue: unknown) => {
    if (typeof srcValue === "object") {
      mergeWith(objValue, srcValue, mergeFunction);
      return undefined;
    } else if (objValue) {
      return objValue;
    } else {
      return srcValue;
    }
  };

  return mergeWith(options, _default, mergeFunction);
}
