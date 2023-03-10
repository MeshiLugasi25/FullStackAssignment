/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { AxisTitlePosition, Border, Margin, Padding, TitleVisualArgs } from '../../common/property-types';
/**
 * The configuration options for the axis title
 * ([see example]({% slug api_charts_axisdefaultscomponent %})).
 */
export interface AxisDefaultsTitle {
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
     * The padding of the title. A numeric value sets all paddings.
     */
    padding?: Padding | number;
    /**
     * The position of the title.
     *
     * The supported values are:
     *
     * - `"top"`&mdash;The axis title is positioned on the top (applicable for the vertical axis).
     * - `"bottom"`&mdash;The axis title is positioned on the bottom (applicable for the vertical axis).
     * - `"left"`&mdash;The axis title is positioned on the left (applicable for the horizontal axis).
     * - `"right"`&mdash;The axis title is positioned on the right (applicable for the horizontal axis).
     * - `"center"`&mdash;The axis title is positioned in the center.
     */
    position?: AxisTitlePosition;
    /**
     * The rotation angle of the title. By default, the title is not rotated.
     */
    rotation?: number;
    /**
     * The text of the title. The text can be split into multiple lines by using the line feed characters (`"\n"`).
     */
    text?: string;
    /**
     * If set to `true`, the Chart displays the axis title. By default, the axis title is visible.
     */
    visible?: boolean;
    /**
     * A function that can be used to create a custom visual for the title.
     *
     * The available argument fields are:
     *
     * - `text`&mdash;The label text.
     * - `rect`&mdash;The geometry [`Rect`]({% slug api_kendo-drawing_geometry_rect %}) that defines where the visual has to be rendered.
     * - `sender`&mdash;The Chart instance (can be `undefined`).
     * - `options`&mdash;The label options.
     * - `createVisual`&mdash;A function for getting the default visual.
     */
    visual?: (e: TitleVisualArgs) => drawing.Element;
}
