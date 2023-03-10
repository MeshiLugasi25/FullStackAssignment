/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { AutoBaseUnitSteps, AxisLine, AxisTicks, CategoryBaseUnit, GridLines, PlotBand, WeekStartDay } from '../common/property-types';
import { CategoryAxisCrosshair } from './category-axis-item/crosshair.interface';
import { CategoryAxisLabels } from './category-axis-item/labels.interface';
import { CategoryAxisRangeLabels } from './category-axis-item/range-labels.interface';
import { CategoryAxisNotes } from './category-axis-item/notes.interface';
import { CategoryAxisSelect } from './category-axis-item/select.interface';
import { CategoryAxisTitle } from './category-axis-item/title.interface';
/**
 * The configuration options of the category axis.
 */
export interface CategoryAxis {
    /**
     * The time-interval steps when `baseUnit` is set either to `"fit"` or `"auto"`.
     * The axis will try to divide the active period into the smallest possible units
     * that yield `maxDateGroups` or less discrete intervals.
     */
    autoBaseUnitSteps?: AutoBaseUnitSteps;
    /**
     * The category index or the date (for date category axis) at which the first value axis crosses this axis.
     * The category indices or the date (for date category axis) at which the value axes cross the category axis (when set as an array).
     * To denote the far end of the axis, set an index greater than or equal to the number of categories.
     */
    axisCrossingValue?: any | any[];
    /**
     * The background color of the axis.
     */
    background?: string;
    /**
     * The base time interval for the date axis. The default base unit is automatically determined by the
     * minimum difference between subsequent categories.
     *
     * The supported values are:
     *
     * - `"fit"`
     * - `"milliseconds"`
     * - `"seconds"`
     * - `"minutes"`
     * - `"hours"`
     * - `"days"`
     * - `"weeks"`
     * - `"months"`
     * - `"years"`
     *
     * Setting `baseUnit` to `"fit"` sets such a base unit and [`categoryAxis.baseUnitStep`]({% slug api_charts_categoryaxis %}#toc-baseunitstep)
     * that the total number of categories does not exceed [`categoryAxis.maxDateGroups`]({% slug api_charts_categoryaxis %}#toc-maxdategroups).
     *
     * Series data is aggregated for the specified base unit by using the [`series.aggregate`]({% slug api_charts_series %}#toc-aggregate) function.
     */
    baseUnit?: CategoryBaseUnit;
    /**
     * The step (interval) between the categories in base units. Setting it to `"auto"` sets the step to such
     * a value that the total number of categories does not exceed [`categoryAxis.maxDateGroups`]({% slug api_charts_categoryaxis %}#toc-maxdategroups).
     * The option is ignored if [`categoryAxis.baseUnit`]({% slug api_charts_categoryaxis %}#toc-baseunit) is set to `"fit"`.
     */
    baseUnitStep?: number | 'auto';
    /**
     * The category names. The Chart creates a category for every item of the array.
     */
    categories?: any[];
    /**
     * The color to apply to all axis elements. Accepts a valid CSS color string, including hex and rgb.
     * Can be overridden by [`categoryAxis.labels.color`]({% slug api_charts_categoryaxislabels %}#toc-color) and [`categoryAxis.line.color`]({% slug api_charts_axisline %}#toc-color).
     */
    color?: string;
    /**
     * If set to `true`, the Chart positions categories and series points on major ticks.
     * This removes the empty space before and after the series.
     * The default value is `false` except for `"area"`, `"verticalArea"`, `"rangeArea"`, and `"verticalRangeArea"`.
     * The option is ignored if the [`series.type`]({% slug api_charts_series %}#toc-type) option is set to `"bar"`, `"column"`, `"boxPlot"`, `"ohlc"`,
     * `"candlestick"`, or `"waterfall"`.
     */
    justified?: boolean;
    /**
     * The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.
     */
    line?: AxisLine;
    /**
     * The configuration of the major grid lines.
     * These are the lines that are an extension of the major ticks through the body of the Chart.
     */
    majorGridLines?: GridLines;
    /**
     * The configuration of the category axis major ticks.
     */
    majorTicks?: AxisTicks;
    /**
     * The last date displayed on a date category axis or the index of the last category displayed on a category axis.
     * By default, the max value is the same as the last category.
     * This is often used in combination with the [`categoryAxis.min`]({% slug api_charts_categoryaxis %}#toc-min) and
     * [`categoryAxis.roundToBaseUnit`]({% slug api_charts_categoryaxis %}#toc-roundtobaseunit) options to set up a fixed date range.
     */
    max?: any;
    /**
     * The maximum number of groups (categories) to display when
     * [`categoryAxis.baseUnit`]({% slug api_charts_categoryaxis %}#toc-baseunit) is set to `"fit"` or
     * [`categoryAxis.baseUnitStep`]({% slug api_charts_categoryaxis %}#toc-baseunitstep) is set to `"auto"`.
     */
    maxDateGroups?: number;
    /**
     * The maximum number of ticks and labels to display. Applicabable for date category axis.
     */
    maxDivisions?: number;
    /**
     * The first date which is displayed on a date category axis or the index of the first category whcih is displayed on a category axis.
     * By default, the min value is the same as the first category.
     * This is often used in combination with the [`categoryAxis.max`]({% slug api_charts_categoryaxis %}#toc-max) and
     * [`categoryAxis.roundToBaseUnit`]({% slug api_charts_categoryaxis %}#toc-roundtobaseunit) options to set up a fixed date range.
     */
    min?: any;
    /**
     * The configuration of the minor grid lines.
     * These are the lines that are an extension of the minor ticks through the body of the Chart.
     */
    minorGridLines?: GridLines;
    /**
     * The configuration of the category axis minor ticks.
     */
    minorTicks?: AxisTicks;
    /**
     * The unique axis name. Used to associate a series with a category axis,
     * which utilizes the [`series.categoryAxis`]({% slug api_charts_series %}#toc-categoryaxis) option.
     */
    name?: string;
    /**
     * The configuration of the date axis date range labels.
     */
    rangeLabels?: CategoryAxisRangeLabels;
    /**
     * The name of the pane in which the category axis has to be rendered.
     * If not set, the axis will be rendered in the first (default) pane.
     */
    pane?: string;
    /**
     * The plot bands of the category axis.
     */
    plotBands?: PlotBand[];
    /**
     * If set to `true`, the category axis direction is reversed.
     * By default, categories are listed from left to right and from bottom to top.
     */
    reverse?: boolean;
    /**
     * If set to `true`, the Chart rounds the first and last date to the nearest base unit.
     */
    roundToBaseUnit?: boolean;
    /**
     * The angle (degrees) of the first category on the axis.
     * Angles increase clockwise with zero to the left. Negative values are acceptable.
     */
    startAngle?: number;
    /**
     * The category axis type.
     *
     * The supported values are:
     *
     * - `"category"`&mdash;Discrete category axis.
     * - `"date"`&mdash;Specialized axis for displaying chronological data.
     */
    type?: 'category' | 'date';
    /**
     * If set to `true`, the Chart displays the category axis. By default, the category axis is visible.
     */
    visible?: boolean;
    /**
     * The week start day when the `baseUnit` is set to `"weeks"`.
     */
    weekStartDay?: WeekStartDay;
    /**
     * The configuration options of the crosshair.
     * The crosshair is displayed when the [`categoryAxis.crosshair.visible`]({% slug api_charts_categoryaxiscrosshair %}#toc-visible) option is set to `true`.
     */
    crosshair?: CategoryAxisCrosshair;
    /**
     * The configuration of the axis labels.
     */
    labels?: CategoryAxisLabels;
    /**
     * The configuration of the category axis notes.
     */
    notes?: CategoryAxisNotes;
    /**
     * The selected axis range. If set, the axis selection is enabled.
     * The range is index-based, starting from zero.
     * Categories with indexes in the range (`select.from`, `select.to`) will be selected.
     * That is, the last category in the range will not be included in the selection.
     * If the categories are dates, the range has to be also specified with date values.
     * Selection is only supported if the axis is horizontal.
     */
    select?: CategoryAxisSelect;
    /**
     * The title configuration of the category axis.
     * To display the title, set the [`categoryAxis.title.text`]({% slug api_charts_categoryaxistitle %}#toc-text) option.
     */
    title?: CategoryAxisTitle;
}
