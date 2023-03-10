/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { SeriesEvent } from './series-event';
/**
 * Arguments for the `seriesLeave` event.
 */
var SeriesLeaveEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesLeaveEvent, _super);
    function SeriesLeaveEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SeriesLeaveEvent;
}(SeriesEvent));
export { SeriesLeaveEvent };
