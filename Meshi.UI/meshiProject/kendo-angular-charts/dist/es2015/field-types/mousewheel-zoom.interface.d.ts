/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { LockAxis } from './lock-axis';
/**
 * The configuration of the mousewheel action for zooming.
 */
export interface MousewheelZoom {
    /**
     * Specifies an axis that should not be zoomed.
     */
    lock?: LockAxis;
    /**
     * Specifies the zoom rate as percentage of the axis range. The default value is 0.3 or 30% of the axis range.
     *
     * The accepted range is from 0.01 to 0.9 (1% to 90%).
     *
     * @default 0.3
     */
    rate?: number;
}
