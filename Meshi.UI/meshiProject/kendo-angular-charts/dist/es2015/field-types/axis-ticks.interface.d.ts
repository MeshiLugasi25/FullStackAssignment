/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * The appearance configuration for the major and minor axis ticks
 * ([see example]({% slug api_charts_axisdefaultscomponent %})).
 */
export interface AxisTicks {
    /**
     * The color of the tick lines. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The length of the tick line in pixels.
     */
    size?: number;
    /**
     * The tick-rendering step. Renders every n<sup>th</sup> tick, where `n` is the step.
     */
    step?: number;
    /**
     * The number of ticks to skip at the beginning.
     */
    skip?: number;
    /**
     * If set to `true,` the Chart displays the axis ticks.
     * By default, only the major axis ticks are visible.
     */
    visible?: boolean;
    /**
     * The width of the ticks in pixels.
     */
    width?: number;
}
