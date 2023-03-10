/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { BaseEvent } from './base-event';
/**
 * Arguments for the `paneRender` event.
 */
export class PaneRenderEvent extends BaseEvent {
    /**
     * @hidden
     */
    constructor(args, sender) {
        super(sender);
        Object.assign(this, args);
    }
}
