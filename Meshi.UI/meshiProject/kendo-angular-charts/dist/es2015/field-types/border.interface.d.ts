/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { DashType } from './dash-type';
/**
 * The appearance settings for the border lines
 * ([see example]({% slug api_charts_titlecomponent %})).
 */
export interface Border {
    /**
     * The color of the border line. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The dash type of the border line.
     */
    dashType?: DashType;
    /**
     * The width of the border line in pixels.
     */
    width?: number;
}
