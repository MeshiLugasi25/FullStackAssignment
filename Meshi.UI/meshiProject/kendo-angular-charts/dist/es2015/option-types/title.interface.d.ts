/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Border, Margin, Padding } from '../common/property-types';
/**
 * The configuration options of the title
 * ([see example]({% slug api_charts_titlecomponent %})).
 */
export interface Title {
    /**
     * The alignment of the title.
     *
     * The available options are:
     * - `"center"`&mdash;The text is aligned to the middle.
     * - `"left"`&mdash;The text is aligned to the left.
     * - `"right"`&mdash;The text is aligned to the right.
     */
    align?: 'center' | 'left' | 'right';
    /**
     * The background color of the title. Accepts a valid CSS color string, including hex and rgb.
     */
    background?: string;
    /**
     * The border of the title.
     */
    border?: Border;
    /**
     * The text color of the title. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The font of the title.
     */
    font?: string;
    /**
     * The margin of the title. A numeric value sets all margins.
     */
    margin?: Margin | number;
    /**
     * The padding of the title. A numeric value sets all margins.
     */
    padding?: Padding | number;
    /**
     * The position of the title.
     *
     * The available options are:
     * - `"bottom"`&mdash;The title is positioned on the bottom.
     * - `"top"`&mdash;The title is positioned on the top.
     */
    position?: 'top' | 'bottom';
    /**
     * The text of the chart title. You can also set the text directly for a title with default options.
     * You can split the text into multiple lines by using the line feed characters ("\n").
     */
    text?: string;
    /**
     * If set to `true`, the Chart displays the title. By default, the title is displayed.
     */
    visible?: boolean;
}
