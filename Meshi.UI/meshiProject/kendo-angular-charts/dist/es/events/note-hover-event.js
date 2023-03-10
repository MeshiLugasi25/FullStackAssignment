/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { NoteEvent } from './note-event';
/**
 * Arguments for the `noteHover` event.
 */
var NoteHoverEvent = /** @class */ (function (_super) {
    tslib_1.__extends(NoteHoverEvent, _super);
    function NoteHoverEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoteHoverEvent;
}(NoteEvent));
export { NoteHoverEvent };
