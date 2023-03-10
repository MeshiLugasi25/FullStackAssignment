/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Border, LegendLabels, Margin, Padding, LegendTitle } from '../common/property-types';
import { LegendInactiveItems } from './legend/inactive-items.interface';
import { LegendItem } from './legend/item.interface';
import { LegendMarkers } from './legend/markers.interface';
/**
 * The configuration options of the Chart legend.
 */
export interface Legend {
    /**
     * The legend is horizontally aligned when [`legend.position`]({% slug api_charts_legend %}#toc-position) is set to `"top"` or `"bottom"`.
     * The legend is vertically aligned when [`legend.position`]({% slug api_charts_legend %}#toc-position) is set to `"left"` or `"right"`.
     *
     * The supported values are:
     *
     * - `"start"`&mdash;The legend is aligned to the start.
     * - `"center"`&mdash;The legend is aligned to the center.
     * - `"end"`&mdash;The legend is aligned to the end.
     */
    align?: 'start' | 'center' | 'end';
    /**
     * The background color of the legend. Accepts a valid CSS color string, including hex and rgb.
     */
    background?: string;
    /**
     * The border of the legend.
     */
    border?: Border;
    /**
     * The height of the legend when [`legend.orientation`]({% slug api_charts_legend %}#toc-orientation) is set to `"vertical"`.
     */
    height?: number;
    /**
     * The label configuration of the Chart legend.
     */
    labels?: LegendLabels;
    /**
     * The margin of the Chart legend. A numeric value sets all paddings.
     */
    margin?: Margin | number;
    /**
     * The X offset of the Chart legend. The offset is relative to the default position of the legend.
     * For example, a value of `20` moves the legend 20 pixels to the right of its initial position.
     * Negative values move the legend to the left of its current position.
     */
    offsetX?: number;
    /**
     * The Y offset of the chart legend. The offset is relative to the current position of the legend.
     * For example, a value of `20` moves the legend 20 pixels down from its initial position.
     * Negative values move the legend upwards from its current position.
     */
    offsetY?: number;
    /**
     * The orientation of the legend items.
     *
     * The supported values are:
     *
     * - `"vertical"`&mdash;The legend items are added vertically.
     * - `"horizontal"`&mdash;The legend items are added horizontally.
     */
    orientation?: 'vertical' | 'horizontal';
    /**
     * The padding of the Chart legend. A numeric value sets all paddings.
     */
    padding?: Padding | number;
    /**
     * The positions of the Chart legend.
     *
     * The supported values are:
     *
     * - `"top"`&mdash;The legend is positioned on the top.
     * - `"bottom"`&mdash;The legend is positioned on the bottom.
     * - `"left"`&mdash;The legend is positioned on the left.
     * - `"right"`&mdash;The legend is positioned on the right.
     * - `"custom"`&mdash;The legend is positioned by using [`legend.offsetX`]({% slug api_charts_legend %}#toc-offsetx) and [`legend.offsetY`]({% slug api_charts_legend %}#toc-offsety).
     */
    position?: 'top' | 'bottom' | 'left' | 'right' | 'custom';
    /**
     * If set to `true`, the legend items are reversed.
     */
    reverse?: boolean;
    /**
     * If set to `true`, the Chart displays the legend. By default, the Chart legend is visible.
     */
    visible?: boolean;
    /**
     * The legend width when the [`legend.orientation`]({% slug api_charts_legend %}#toc-orientation) is set to `"horizontal"`.
     */
    width?: number;
    /**
     * The configuration of the Chart inactive legend items.
     */
    inactiveItems?: LegendInactiveItems;
    /**
     * The configuration of the Chart legend item.
     */
    item?: LegendItem;
    /**
     * The configuration of the Chart legend markers.
     */
    markers?: LegendMarkers;
    /**
     * The distance (in pixels) between the legend items. Defaults to `6`.
     */
    spacing?: number;
    /**
     * The title of the Chart legend.
     * By default, the Chart will not render a legend title.
     */
    title?: LegendTitle;
}
