/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { DashType } from './dash-type';
/**
 * The appearance settings for the BoxPlot median value indicator (line).
 */
export interface SeriesMedian {
    /**
     * The color of the line. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The dash type of the line. By default, the line is not dashed (`[dashType]="solid"`).
     */
    dashType?: DashType;
    /**
     * The line opacity. By default, the line is opaque (`[opacity]="1"`).
     */
    opacity?: number;
    /**
     * The width (in pixels) of the line. By default, the line is 2px wide (`[width]="2"`).
     */
    width?: number;
}
