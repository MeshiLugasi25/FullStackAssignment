/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * Appearance settings for the overlay of the series elements.
 */
export interface Overlay {
    /**
     * The gradient of the Chart series.
     *
     * The supported values are:
     * * `"glass"`&mdash;Applicable for the Bar, Column, and Candlestick series.
     * * `"none"`
     * * `"roundedBevel"`&mdash;Applicable for the Donut and Pie series.
     * * `"sharpBevel"`&mdash;Applicable for the Donut and Pie series.
     */
    gradient?: 'glass' | 'none' | 'roundedBevel' | 'sharpBevel';
}
