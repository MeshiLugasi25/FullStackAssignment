/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
function hasParent(element, parent) {
    var current = element;
    while (current && current !== parent) {
        current = current.parentNode;
    }
    return current ? true : false;
}
exports.hasParent = hasParent;
