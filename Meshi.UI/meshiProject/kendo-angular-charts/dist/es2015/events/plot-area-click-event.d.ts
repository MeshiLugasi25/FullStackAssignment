/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChartComponent } from '../chart.component';
import { BaseEvent } from './base-event';
/**
 * Arguments for the `plotAreaClick` event.
 */
export declare class PlotAreaClickEvent extends BaseEvent {
    /**
     * The data point category. Available only for the Categorical charts (Bar, Line, Area, and similar).
     */
    category: any;
    /**
     * The original browser event that triggered the click action.
     */
    originalEvent: any;
    /**
     * The data point value. Available only for the Categorical charts (Bar, Line, Area, and similar).
     */
    value: any;
    /**
     * The X axis value or array of values for multi-axis charts.
     */
    x: any;
    /**
     * The Y axis value or array of values for multi-axis charts.
     */
    y: any;
    /**
     * @hidden
     */
    constructor(e: any, sender: ChartComponent);
}
