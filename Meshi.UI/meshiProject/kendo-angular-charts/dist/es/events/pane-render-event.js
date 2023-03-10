/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { BaseEvent } from './base-event';
/**
 * Arguments for the `paneRender` event.
 */
var PaneRenderEvent = /** @class */ (function (_super) {
    tslib_1.__extends(PaneRenderEvent, _super);
    /**
     * @hidden
     */
    function PaneRenderEvent(args, sender) {
        var _this = _super.call(this, sender) || this;
        Object.assign(_this, args);
        return _this;
    }
    return PaneRenderEvent;
}(BaseEvent));
export { PaneRenderEvent };
