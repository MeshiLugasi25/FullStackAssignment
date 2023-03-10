/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { BaseEvent } from './base-event';
/**
 * Arguments for the `render` event.
 */
export class RenderEvent extends BaseEvent {
    /**
     * @hidden
     */
    constructor(_e, sender) {
        super(sender);
    }
}
