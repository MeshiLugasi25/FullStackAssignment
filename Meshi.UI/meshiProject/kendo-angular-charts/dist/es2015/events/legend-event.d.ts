/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { PreventableEvent } from './preventable-event';
import { ChartComponent } from '../chart.component';
import { EventSeriesOptions } from '../api-types/event-series-options.interface';
/**
 * @hidden
 */
export declare class LegendEvent extends PreventableEvent {
    /**
     * An object which contains the series options.
     */
    series: EventSeriesOptions;
    /**
     * The index of the series in the parent Chart.
     */
    seriesIndex: number;
    /**
     * The point index in the series.
     * Applicable only for the Pie, Donut, and Funnel series.
     */
    pointIndex: number;
    /**
     * The text of the legend item.
     */
    text: string;
    /**
     * @hidden
     */
    constructor(e: any, sender: ChartComponent);
}
