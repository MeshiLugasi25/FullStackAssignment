/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { DashType } from './dash-type';
/**
 * The appearance settings for the error bar lines.
 */
export interface ErrorBarLine {
    /**
     * The dash type of the line.
     */
    dashType?: DashType;
    /**
     * The width of the line in pixels.
     */
    width?: number;
}
