/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var preventable_event_1 = require("./preventable-event");
/**
 * Arguments for the `drag` event.
 */
var DragEvent = /** @class */ (function (_super) {
    tslib_1.__extends(DragEvent, _super);
    /**
     * @hidden
     */
    function DragEvent(e, sender) {
        var _this = _super.call(this, sender) || this;
        _this.axisRanges = e.axisRanges;
        _this.originalEvent = e.originalEvent;
        return _this;
    }
    return DragEvent;
}(preventable_event_1.PreventableEvent));
exports.DragEvent = DragEvent;
