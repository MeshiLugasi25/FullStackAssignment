/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { DashType } from './dash-type';
/**
 * The appearance configuration for the major and minor axis grid lines
 * ([see example]({% slug api_charts_axisdefaultscomponent %})).
 */
export interface GridLines {
    /**
     * The color of the grid lines. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The dash type of the grid lines.
     */
    dashType?: DashType;
    /**
     * The number of lines to skip at the beginning.
     */
    skip?: number;
    /**
     * The tick-rendering step. Renders every n<sup>th</sup> line, where `n` is the step.
     */
    step?: number;
    /**
     * If set to `true`, the Chart displays the lines.
     * By default, only the major axis grid lines are visible.
     */
    visible?: boolean;
    /**
     * The width of the lines in pixels.
     */
    width?: number;
}
