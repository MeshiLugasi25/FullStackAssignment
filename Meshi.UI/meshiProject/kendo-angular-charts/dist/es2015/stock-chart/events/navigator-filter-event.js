/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { BaseEvent } from '../../events/base-event';
/**
 * The arguments for the `navigatorFilter` event.
 */
export class NavigatorFilterEvent extends BaseEvent {
    /**
     * Constructs the event arguments from a raw object.
     */
    constructor(e, sender) {
        super(sender);
        this.from = e.from;
        this.to = e.to;
    }
}
