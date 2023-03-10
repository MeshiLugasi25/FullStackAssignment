/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kendo_angular_common_1 = require("@progress/kendo-angular-common");
/**
 * @hidden
 */
function bodyFactory() {
    if (kendo_angular_common_1.isDocumentAvailable()) {
        return new core_1.ElementRef(document.body);
    }
}
exports.bodyFactory = bodyFactory;
