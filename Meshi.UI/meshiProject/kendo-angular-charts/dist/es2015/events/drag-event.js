/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { PreventableEvent } from './preventable-event';
/**
 * Arguments for the `drag` event.
 */
export class DragEvent extends PreventableEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.axisRanges = e.axisRanges;
        this.originalEvent = e.originalEvent;
    }
}
