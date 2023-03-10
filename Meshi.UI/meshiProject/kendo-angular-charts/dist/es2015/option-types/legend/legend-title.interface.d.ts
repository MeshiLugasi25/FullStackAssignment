/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Element } from '@progress/kendo-drawing';
import { Border, Margin, Padding, TitleVisualArgs } from '../../common/property-types';
/**
 * The configuration options for the Legend title
 * ([see example]({% slug legend_chart_charts %}#toc-setting-a-title)).
 */
export interface LegendTitle {
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
     * - `"bottom"`&mdash;The title is positioned beneath the legend.
     * - `"top"`&mdash;The title is positioned above the legend.
     */
    position?: 'top' | 'bottom';
    /**
     * The text of the title.
     * You can split the text into multiple lines by using the line feed characters ("\n").
     */
    text?: string;
    /**
     * If set to `true`, the Chart displays the Legend title. By default, the title is displayed.
     */
    visible?: boolean;
    /**
     * A function for creating a custom visual for the title.
     */
    visual?: (args: TitleVisualArgs) => Element;
}
