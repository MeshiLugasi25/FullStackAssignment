/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { NoteEvent } from './note-event';
/**
 * Arguments for the `noteLeave` event.
 */
var NoteLeaveEvent = /** @class */ (function (_super) {
    tslib_1.__extends(NoteLeaveEvent, _super);
    function NoteLeaveEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoteLeaveEvent;
}(NoteEvent));
export { NoteLeaveEvent };
