/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { XAxisCrosshairTooltip } from './crosshair.tooltip.interface';
/**
 * The configuration options of the X-axis crosshair.
 */
export interface XAxisCrosshair {
    /**
     * The color of the crosshair. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The opacity of the crosshair. By default, the crosshair is opaque.
     */
    opacity?: number;
    /**
     * If set to `true`, the Chart displays the X-axis crosshair of the Scatter Chart.
     * By default, the X-axis crosshair of the Scatter Chart is not visible.
     */
    visible?: boolean;
    /**
     * The width of the crosshair in pixels.
     */
    width?: number;
    /**
     * The options of the crosshair tooltip.
     * The crosshair tooltip is displayed when the [`xAxis.crosshair.tooltip.visible`]({% slug api_charts_xaxiscrosshairtooltip %}#toc-visible) option is set to `true`.
     */
    tooltip?: XAxisCrosshairTooltip;
}
