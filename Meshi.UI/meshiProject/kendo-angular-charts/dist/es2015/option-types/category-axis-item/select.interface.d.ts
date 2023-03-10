/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { MousewheelSelect } from '../../common/property-types';
/**
 * The configuration of the category axis selection options.
 */
export interface CategoryAxisSelect {
    /**
     * The lower boundary of the selected range.
     */
    from?: any;
    /**
     * The maximum value which the user can select.
     */
    max?: any;
    /**
     * The minimum value which the user can select.
     */
    min?: any;
    /**
     * The mousewheel configuration of the selection.
     * If set to `false`, the mousewheel does not update the selection.
     */
    mousewheel?: boolean | MousewheelSelect;
    /**
     * The upper boundary of the selected range.
     * The category with the specified index (date) is not included in the selected range
     * unless the axis is justified. To select all categories, set
     * a value that is larger than the last category index (date).
     */
    to?: any;
}
