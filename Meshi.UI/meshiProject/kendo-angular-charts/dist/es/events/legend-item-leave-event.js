/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { LegendEvent } from './legend-event';
/* tslint:disable:no-empty */
/**
 * Arguments for the `legendItemLeave` event.
 */
var LegendItemLeaveEvent = /** @class */ (function (_super) {
    tslib_1.__extends(LegendItemLeaveEvent, _super);
    function LegendItemLeaveEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    LegendItemLeaveEvent.prototype.preventDefault = function () {
    };
    /**
     * @hidden
     */
    LegendItemLeaveEvent.prototype.isDefaultPrevented = function () {
        return false;
    };
    return LegendItemLeaveEvent;
}(LegendEvent));
export { LegendItemLeaveEvent };
