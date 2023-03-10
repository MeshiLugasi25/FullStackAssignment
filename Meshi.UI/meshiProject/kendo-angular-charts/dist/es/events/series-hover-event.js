/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { SeriesEvent } from './series-event';
/**
 * Arguments for the `seriesHover` event.
 */
var SeriesHoverEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesHoverEvent, _super);
    function SeriesHoverEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SeriesHoverEvent;
}(SeriesEvent));
export { SeriesHoverEvent };
