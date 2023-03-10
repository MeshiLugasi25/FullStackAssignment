/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { DashType } from './dash-type';
/**
 * The appearance settings for the BoxPlot whiskers.
 */
export interface SeriesWhiskers {
    /**
     * The color of the whiskers. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The dash type of the whiskers.
     */
    dashType?: DashType;
    /**
     * The whiskers opacity. By default, the whiskers area is opaque (`opacity = 1`).
     */
    opacity?: number;
    /**
     * The width (in pixels) of the whiskers.
     */
    width?: number;
}
