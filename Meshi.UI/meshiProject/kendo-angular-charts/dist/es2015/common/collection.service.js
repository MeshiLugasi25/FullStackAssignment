/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * @hidden
 */
export class ItemChange {
    constructor(sender, options) {
        this.sender = sender;
        this.options = options;
    }
}
/**
 * @hidden
 */
let CollectionService = class CollectionService {
    constructor() {
        this.source = new Subject();
        this.onItemChange$ = this.source.asObservable();
    }
    notify(change) {
        this.source.next(change);
    }
};
CollectionService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], CollectionService);
export { CollectionService };
