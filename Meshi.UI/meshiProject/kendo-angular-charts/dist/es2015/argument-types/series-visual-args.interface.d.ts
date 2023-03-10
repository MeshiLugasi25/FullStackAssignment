/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChartComponent } from '../chart.component';
import { drawing, geometry } from '@progress/kendo-drawing';
/**
 * The context for the function of the series point visual.
 */
export interface SeriesVisualArgs {
    /**
     * The point category.
     */
    category: any;
    /**
     * A function that can be used to get the default visual.
     */
    createVisual: () => drawing.Element;
    /**
     * The center point of the segment.
     * Available for the Donut and Pie series.
     */
    center?: geometry.Point;
    /**
     * The point data item.
     */
    dataItem: any;
    /**
     * The end angle of the segment.
     * Available for the Donut and Pie series.
     */
    endAngle?: number;
    /**
     * The inner radius of the segment.
     * Available for the Donut and Pie series.
     */
    innerRadius?: number;
    /**
     * The point options.
     */
    options: any;
    /**
     * The point value represented as a percentage value.
     * Available only for the Donut, Pie, and 100% stacked charts.
     */
    percentage?: number;
    /**
     * The segment points.
     * Available for the Donut and Pie series.
     */
    points?: geometry.Point[];
    /**
     * The segment radius.
     * Available for the Donut and Pie series.
     */
    radius?: number;
    /**
     * The rectangle that defines the normal position of the visual.
     */
    rect: geometry.Rect;
    /**
     * The sum of point values from the last `runningTotal`
     * summary point onwards.
     * Available for the Waterfall series.
     */
    runningTotal?: number;
    /**
     * The instance of the Chart component.
     */
    sender: ChartComponent;
    /**
     * The point series.
     */
    series: any;
    /**
     * The start angle of the segment.
     * Available for the Donut and Pie series.
     */
    startAngle?: number;
    /**
     * The sum of all previous series values.
     * Available for the Waterfall series.
     */
    total?: number;
    /**
     * The point value.
     */
    value: any;
}
