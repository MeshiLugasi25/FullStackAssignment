/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Border, Padding } from '../../common/property-types';
/**
 * The configuration options of the Y-axis crosshair tooltip.
 */
export interface YAxisCrosshairTooltip {
    /**
     * The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
     */
    background?: string;
    /**
     * The border options of the tooltip.
     */
    border?: Border;
    /**
     * The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The font of the tooltip.
     */
    font?: string;
    /**
     * The format for displaying the tooltip. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of IntlService.
     * Contains one placeholder (`"{0}"`) which represents the value.
     */
    format?: string;
    /**
     * The padding of the crosshair tooltip. A numeric value sets all paddings.
     */
    padding?: Padding | number;
    /**
     * If set to `true`, the Chart displays the crosshair tooltip of the Scatter chart Y axis.
     * By default, the crosshair tooltip of the Scatter chart Y axis is not visible.
     */
    visible?: boolean;
}
