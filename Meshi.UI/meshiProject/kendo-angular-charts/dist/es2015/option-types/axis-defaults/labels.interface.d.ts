/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { AxisLabelVisualArgs, LabelRotation, Margin, Padding } from '../../common/property-types';
/**
 * The configuration options for the axis label
 * ([see example]({% slug api_charts_axisdefaultscomponent %})).
 */
export interface AxisDefaultsLabels {
    /**
     * The function which returns the label content.
     * The text can be split into multiple lines by using the line feed characters (`"\n"`).
     *
     * The available fields in the function argument are:
     *
     * - `value`&mdash;The category value.
     * - `dataItem`&mdash;The data item if a field is specified. If the category does not have a
     * corresponding item in the data, an empty object is passed.
     * - `format`&mdash;The default format of the label.
     * - `culture`&mdash;The default culture (if set) of the label.
     */
    content?: (e: any) => string;
    /**
     * The font style of the labels.
     */
    font?: string;
    /**
     * The format for displaying the labels. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of IntlService.
     * Contains one placeholder (`"{0}"`) which represents the category value.
     */
    format?: string;
    /**
     * The margin of the labels. A numeric value sets all margins.
     */
    margin?: Margin | number;
    /**
     * If set to `true`, the Chart mirrors the axis labels and ticks.
     * If the labels are normally on the left side of the axis,
     * the mirroring of the axis renders them to the right.
     */
    mirror?: boolean;
    /**
     * The padding of the labels. A numeric value sets all paddings.
     */
    padding?: Padding | number;
    /**
     * The rotation angle of the labels. By default, the labels are not rotated.
     * If the axis is horizontal, can be set to `"auto"`.
     * In this case, the labels are rotated only if the slot size is not sufficient for the entire labels.
     */
    rotation?: LabelRotation | number | 'auto';
    /**
     * The number of labels to skip. By default, no labels are skipped.
     */
    skip?: number;
    /**
     * The label-rendering step&mdash;renders every n<sup>th</sup> label. By default, every label is rendered.
     */
    step?: number;
    /**
     * If set to `true`, the Chart displays the axis labels. By default, the axis labels are visible.
     */
    visible?: boolean;
    /**
     * A function that for creating a custom visual for the labels.
     *
     * The available argument fields are:
     *
     * - `createVisual`&mdash;A function for getting the default visual.
     * - `culture`&mdash;The default culture (if set) of the label.
     * - `dataItem`&mdash;The data item if a field has been specified.
     * - `format`&mdash;The default format of the label.
     * - `options`&mdash;The label options.
     * - `rect`&mdash;The geometry [`Rect`]({% slug api_kendo-drawing_geometry_rect %}) that defines where the visual has to be rendered.
     * - `sender`&mdash;The Chart instance (can be `undefined`).
     * - `text`&mdash;The label text.
     * - `value`&mdash;The category value.
     */
    visual?: (e: AxisLabelVisualArgs) => drawing.Element;
}
