/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Border, Padding } from '../../common/property-types';
/**
 * The configuration options of the category axis crosshair tooltip.
 */
export interface CategoryAxisCrosshairTooltip {
    /**
     * The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
     */
    background?: string;
    /**
     * The border options.
     */
    border?: Border;
    /**
     * The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The tooltip font.
     */
    font?: string;
    /**
     * The format used to display the tooltip. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of IntlService.
     * Contains one placeholder (`"{0}"`) which represents the category value.
     */
    format?: string;
    /**
     * The padding of the crosshair tooltip. A numeric value sets all paddings.
     */
    padding?: Padding | number;
    /**
     * If set to `true`, the Chart displays the category axis crosshair tooltip.
     * By default, the category axis crosshair tooltip is not visible.
     */
    visible?: boolean;
}
