/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Border, NoteLabelPosition } from '../../common/property-types';
/**
 * The configuration options of the X-axis notes label.
 */
export interface XAxisNotesLabel {
    /**
     * The background color of the label. Accepts a valid CSS color string, including hex and rgb.
     */
    background?: string;
    /**
     * The border of the label.
     */
    border?: Border;
    /**
     * The text color of the label. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The function which returns the label content.
     * The function argument contains a `value` field. It defines the axis value.
     * You can split the text into multiple lines by using the line feed characters (`"\n"`).
     */
    content?: (e: any) => string;
    /**
     * The font style of the label.
     */
    font?: string;
    /**
     * The format for displaying the notes label. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of IntlService.
     * Contains one placeholder (`"{0}"`) which represents the axis value.
     */
    format?: string;
    /**
     * The position of the labels.
     *
     * The available options are:
     * - `"inside"`&mdash;The label is positioned inside the icon.
     * - `"outside"`&mdash;The label is positioned outside the icon.
     */
    position?: NoteLabelPosition;
    /**
     * The rotation angle of the label. By default, the label is not rotated.
     */
    rotation?: number;
    /**
     * If set to `true`, the Chart displays the X-axis notes label.
     * By default, the X-axis notes label is visible.
     */
    visible?: boolean;
}
