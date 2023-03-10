/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Border, Margin, Padding } from '../common/property-types';
import { PanesTitle } from './pane/title.interface';
/**
 * The configuration options of the Chart pane.
 */
export interface Pane {
    /**
     * The background color of the pane. Accepts a valid CSS color string, including hex and rgb.
     */
    background?: string;
    /**
     * The border of the pane.
     */
    border?: Border;
    /**
     * Specifies whether the Charts in the pane have to be clipped.
     * By default, all Charts except the Radar and Polar Charts are clipped.
     */
    clip?: boolean;
    /**
     * The height of the pane in pixels.
     */
    height?: number;
    /**
     * The margin of the pane. A numeric value sets all margins.
     */
    margin?: Margin | number;
    /**
     * The unique name of the pane.
     */
    name?: string;
    /**
     * The padding of the pane. A numeric value sets all paddings.
     */
    padding?: Padding | number;
    /**
     * The title configuration of the pane.
     * To display the title, set the [`panes.title.text`]({% slug api_charts_panestitle %}#toc-text) option.
     */
    title?: string | PanesTitle;
}
