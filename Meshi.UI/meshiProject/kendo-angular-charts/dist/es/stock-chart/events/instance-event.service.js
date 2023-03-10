/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { InstanceEventService } from '../../events/instance-event.service';
import { NavigatorFilterEvent } from './navigator-filter-event';
var EVENT_MAP = {
    navigatorFilter: NavigatorFilterEvent
};
/**
 * @hidden
 */
var StockInstanceEventService = /** @class */ (function (_super) {
    tslib_1.__extends(StockInstanceEventService, _super);
    function StockInstanceEventService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockInstanceEventService.prototype.create = function (name, args, sender) {
        if (EVENT_MAP[name]) {
            return new EVENT_MAP[name](args, sender);
        }
        return _super.prototype.create.call(this, name, args, sender);
    };
    return StockInstanceEventService;
}(InstanceEventService));
export { StockInstanceEventService };
