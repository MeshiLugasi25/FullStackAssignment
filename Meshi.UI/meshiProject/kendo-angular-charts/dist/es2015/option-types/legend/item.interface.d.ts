/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { LegendItemVisualArgs } from '../../common/property-types';
/**
 * The configuration options of the legend item.
 */
export interface LegendItem {
    /**
     * The cursor style of the legend item.
     */
    cursor?: string;
    /**
     * A function for creating a custom visual for the legend items.
     *
     * The available argument fields are:
     *
     * - `options`&mdash;The item options.
     * - `createVisual`&mdash;A function for getting the default visual.
     * - `series`&mdash;The item series.
     * - `pointIndex`&mdash;The index of the point in the series. Available for the Pie, Donut, and Funnel series.
     */
    visual?: (e: LegendItemVisualArgs) => drawing.Element;
}
