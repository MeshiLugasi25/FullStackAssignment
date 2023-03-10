/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { MousewheelSelect } from '../../../common/property-types';
/**
 * The `navigator.select` options.
 */
export interface NavigatorSelect {
    /**
     * The lower boundary of the selected range.
     */
    from?: Date;
    /**
     * The configuration of the mousewheel selection.
     * If set to `false`, the mousewheel does not update the selection.
     */
    mousewheel?: boolean | MousewheelSelect;
    /**
     * The upper boundary of the selected range.
     */
    to?: Date;
}
