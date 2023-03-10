/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { LineStyle } from './line-style';
/**
 * The appearance settings for the line of the Area, Candlestick, OHLC, and Waterfall series.
 */
export interface SeriesLine {
    /**
     * The color of the line. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The line opacity. By default, the line is opaque (`opacity = 1`).
     */
    opacity?: number;
    /**
     * The drawing style of the line.
     * Applicable for the Area, Range Area, Polar Area, and Radar Area series.
     *
     * The supported values are:
     *
     * * `"normal" (default)`&mdash;The values are connected with a straight line.
     * * `"step"`&mdash;The values are connected with a right-angled line. Supported only for the Area and Range Area series.
     * * `"smooth"`&mdash;The values are connected with a smooth line.
     */
    style?: LineStyle;
    /**
     * The line width in pixels.
     * By default, the width is set to `0` and the line is not visible.
     */
    width?: number;
}
