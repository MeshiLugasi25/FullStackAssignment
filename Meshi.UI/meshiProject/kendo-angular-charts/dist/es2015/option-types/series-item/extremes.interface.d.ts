/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Border, MarkerType } from '../../common/property-types';
/**
 * The configuration options of the series extremes.
 */
export interface SeriesExtremes {
    /**
     * The background color of the series extremes.
     */
    background?: string;
    /**
     * The border of the extremes.
     */
    border?: Border;
    /**
     * The rotation angle of the extremes.
     */
    rotation?: number;
    /**
     * The extremes size in pixels.
     */
    size?: number;
    /**
     * The shape of the series extremes.
     *
     * The supported values are:
     * * `"circle"`&mdash;The marker shape is a circle.
     * * `"square"`&mdash;The marker shape is a square.
     * * `"triangle"`&mdash;The marker shape is a triangle.
     * * `"cross"`&mdash;The marker shape is a cross.
     */
    type?: MarkerType;
}
