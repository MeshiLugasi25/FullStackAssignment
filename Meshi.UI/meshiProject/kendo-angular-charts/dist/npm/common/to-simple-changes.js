/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * @hidden
 */
function toSimpleChanges(changes) {
    var result = {};
    for (var propertyName in changes) {
        if (!changes.hasOwnProperty(propertyName)) {
            continue;
        }
        result[propertyName] = new core_1.SimpleChange(null, changes[propertyName], false);
    }
    return result;
}
exports.toSimpleChanges = toSimpleChanges;
