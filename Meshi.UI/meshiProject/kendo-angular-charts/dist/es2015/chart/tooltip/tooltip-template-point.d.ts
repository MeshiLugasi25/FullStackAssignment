/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { TemplateRef } from '@angular/core';
/**
 * The point that is passed to the tooltip template.
 */
export declare class TooltipTemplatePoint {
    /**
     * The point value.
     */
    value: any;
    /**
     * The point category. Available only for the Categorical series.
     */
    category: string | Date | number;
    /**
     * The point category index. Available only for the Categorical series.
     */
    categoryIndex: number;
    /**
     * The point series options.
     */
    series: any;
    /**
     * The point `dataItem`.
     */
    dataItem: any;
    /**
     * The point value represented as a percentage value. Available only for the Donut, Pie, and 100% Stacked charts.
     */
    percentage: number;
    /**
     * The sum of point values since the last `"runningTotal"` summary point. Available for the Waterfall series.
     */
    runningTotal: number;
    /**
     * The sum of all previous series values. Available for the Waterfall series.
     */
    total: number;
    /**
     * The low value of the point error bar. Available for the Categorical series with error bars.
     */
    low: number;
    /**
     * The high value of the point error bar. Available for the Categorical series with error bars.
     */
    high: number;
    /**
     * The x low value of the point error bar. Available for the Scatter series with error bars.
     */
    xLow: number;
    /**
     * The x high value of the point error bar. Available for the Scatter series with error bars.
     */
    xHigh: number;
    /**
     * The y low value of the point error bar. Available for the Scatter series with error bars.
     */
    yLow: number;
    /**
     * The y low value of the point error bar. Available for the Scatter series with error bars.
     */
    yHigh: number;
    /**
     * @hidden
     */
    template: TemplateRef<any>;
    /**
     * @hidden
     */
    point: any;
    /**
     * @hidden
     */
    format: string;
    /**
     * @hidden
     */
    constructor(point: any, format?: string, template?: TemplateRef<any>);
    /**
     * @hidden
     */
    readonly formattedValue: string;
}
