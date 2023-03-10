/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { PlotBandLabelVisualArgs } from '../common/property-types';
import { Border } from './border.interface';
import { Margin } from './margin.interface';
import { Padding } from './padding.interface';
/**
 * The appearance configuration for the plot band label.
 */
export interface PlotBandLabel {
    /**
     * The horizontal alignment of the label text.
     *
     * By default, the label is aligned to the left.
     *
     * The supported values are:
     * - `"center"`&mdash;The label is positioned in the center of the plot band.
     * - `"right"`&mdash;The label is positioned on the right side of the plot band.
     * - `"left"`&mdash;The label is positioned on the left side of the plot band.
     */
    align?: 'center' | 'right' | 'left';
    /**
     * The background color of the label. Accepts a valid CSS color string, including hex and rgb.
     */
    background?: string;
    /**
     * The border of the label.
     */
    border?: Border;
    /**
     * The color of the plot band label text.
     * Accepts a valid [CSS `color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
     * configuration string, including hex and rgb.
     */
    color?: string;
    /**
     * The font of the plot band label text.
     * Accepts a valid [CSS `font`](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
     * configuration string.
     */
    font?: string;
    /**
     * The margin of the label. A numeric value sets all margins.
     */
    margin?: Margin | number;
    /**
     * The padding of the label. A numeric value sets all paddings.
     */
    padding?: Padding | number;
    /**
     * The vertical position of the label inside the plot band.
     *
     * By default, the label is aligned to the top.
     *
     * The supported values are:
     * - `"bottom"`&mdash;The label is positioned on the bottom of the plot band.
     * - `"center"`&mdash;The label is positioned in the center of the plot band.
     * - `"top"`&mdash;The label is positioned on the top of the plot band.
     */
    position?: 'bottom' | 'center' | 'top';
    /**
     * The rotation angle of the label. By default, the label is not rotated.
     */
    rotation?: number;
    /**
     * The text of the label.
     *
     * > The text can be split into multiple lines by using line feed characters ("\n").
     */
    text?: string;
    /**
     * If set to `false`, the will not display the plot band label.
     * By default, the plot band labels are not displayed.
     */
    visible?: boolean;
    /**
     * A function that can be used to create a custom visual for the label.
     *
     * The available argument fields are:
     *
     * - `text`&mdash;The label text.
     * - `rect`&mdash;The geometry [`Rect`]({% slug api_kendo-drawing_geometry_rect %}) that defines where the visual has to be rendered.
     * - `options`&mdash;The label options.
     * - `createVisual`&mdash;A function that can be used to get the default visual.
     * - `sender`&mdash;A reference to the Chart instance.
     */
    visual?: (e: PlotBandLabelVisualArgs) => drawing.Element;
}
