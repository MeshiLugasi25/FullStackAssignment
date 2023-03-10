/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Border, MarkerType } from '../../common/property-types';
/**
 * The configuration options of the Y-axis notes icon.
 */
export interface YAxisNotesIcon {
    /**
     * The background color of the notes icon.
     */
    background?: string;
    /**
     * The border of the notes icon.
     */
    border?: Border;
    /**
     * The size of the notes icon.
     */
    size?: number;
    /**
     * The shape of the notes icon.
     *
     * The supported values are:
     * * `"circle"`&mdash;The marker shape is a circle.
     * * `"square"`&mdash;The marker shape is a square.
     * * `"triangle"`&mdash;The marker shape is a triangle.
     * * `"cross"`&mdash;The marker shape is a cross.
     */
    type?: MarkerType;
    /**
     * The visibility of the notes icon.
     */
    visible?: boolean;
}
