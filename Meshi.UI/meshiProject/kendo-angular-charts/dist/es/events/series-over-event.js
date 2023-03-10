/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { SeriesEvent } from './series-event';
/**
 * Arguments for the `seriesOver` event.
 */
var SeriesOverEvent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesOverEvent, _super);
    function SeriesOverEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SeriesOverEvent;
}(SeriesEvent));
export { SeriesOverEvent };
