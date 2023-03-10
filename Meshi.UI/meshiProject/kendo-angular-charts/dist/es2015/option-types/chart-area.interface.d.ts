/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Border, Margin } from '../common/property-types';
/**
 * The configuration options of the Chart area.
 */
export interface ChartArea {
    /**
     * The background color of the Chart area. Accepts a valid CSS color string, including hex and rgb.
     */
    background?: string;
    /**
     * The border of the Chart area.
     */
    border?: Border;
    /**
     * The height of the Chart area.
     */
    height?: number;
    /**
     * The margin of the Chart area. A numeric value sets all margins.
     */
    margin?: Margin | number;
    /**
     * The background opacity of the Chart area. By default, the background is opaque.
     */
    opacity?: number;
    /**
     * The width of the Chart area.
     */
    width?: number;
}
