/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { LockAxis } from './lock-axis';
import { ModifierKey } from './modifier-key';
/**
 * Configures the drag behavior during the pan and zoom operations.
 */
export interface DragAction {
    /**
     * Specifies a keyboard key that has to be pressed to activate the gesture.
     */
    key?: ModifierKey;
    /**
     * Specifies an axis that should not be panned or zoomed.
     */
    lock?: LockAxis;
}
