/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { InstanceEventService } from '../../events/instance-event.service';
import { NavigatorFilterEvent } from './navigator-filter-event';
const EVENT_MAP = {
    navigatorFilter: NavigatorFilterEvent
};
/**
 * @hidden
 */
export class StockInstanceEventService extends InstanceEventService {
    create(name, args, sender) {
        if (EVENT_MAP[name]) {
            return new EVENT_MAP[name](args, sender);
        }
        return super.create(name, args, sender);
    }
}
