/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * The rotation configuration for the axis labels.
 */
export interface LabelRotation {
    /**
     * The alignment of the rotated labels relative to the slot center.
     * The supported values are `"end"` and `"center"`.
     * By default, the Charts align the closest end of the label to the center.
     * If set to `"center"`, the center of the rotated label will be aligned instead.
     */
    align?: 'end' | 'center';
    /**
     * The rotation angle of the labels.
     * By default, the labels are not rotated.
     * Can be set to `"auto"`. In this case, the labels will be rotated
     * only if the slot size is not sufficient for the entire labels.
     */
    angle?: number | 'auto';
}
