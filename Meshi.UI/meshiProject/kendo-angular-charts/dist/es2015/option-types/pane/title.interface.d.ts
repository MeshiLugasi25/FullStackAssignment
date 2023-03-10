/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { Border, Margin } from '../../common/property-types';
/**
 * The panes.title options.
 */
export interface PanesTitle {
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
     * The font style of the title.
     */
    font?: string;
    /**
     * The margin of the title. A numeric value sets all margins.
     */
    margin?: Margin | number;
    /**
     * The position of the title.
     *
     * The supported values are:
     *
     * - `"left"`&mdash;The axis title is positioned on the left (applicable to the horizontal axis).
     * - `"right"`&mdash;The axis title is positioned on the right (applicable to the horizontal axis).
     * - `"center"`&mdash;The axis title is positioned in the center.
     */
    position?: 'left' | 'right' | 'center';
    /**
     * The text of the title.
     * You can split the text into multiple lines by using line feed characters (`"\n"`).
     */
    text?: string;
    /**
     * If set to `true`, the Chart displays the pane title. By default, the pane title is visible.
     */
    visible?: boolean;
    /**
     * A function that can be used to create a custom visual for the title.
     *
     * The available argument fields are:
     *
     * - `text`&mdash;The label text.
     * - `rect`&mdash;The [geometry Rect]({% slug api_kendo-drawing_geometry_rect %}) that defines where the visual has to be rendered.
     * - `sender`&mdash;The Chart instance (might be `undefined`).
     * - `options`&mdash;The label options.
     * - `createVisual`&mdash;A function that can be used to get the default visual.
     */
    visual?: (e: any) => drawing.Element;
}
