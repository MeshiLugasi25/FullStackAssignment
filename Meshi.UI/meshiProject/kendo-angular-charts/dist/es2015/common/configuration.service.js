/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { auditTime } from 'rxjs/operators';
/**
 * @hidden
 */
export const THROTTLE_MS = 1000 / 60;
/**
 * @hidden
 */
export class Change {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
/**
 * @hidden
 */
let ConfigurationService = class ConfigurationService {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.store = {};
        this.source = new BehaviorSubject({});
        this.initSource();
    }
    initSource() {
        this.onFastChange$ = this.source.asObservable();
        this.onChange$ = this.onFastChange$.pipe(auditTime(THROTTLE_MS));
    }
    push(store) {
        this.store = store;
        this.next();
    }
    notify(change) {
        this.set(change.key, change.value);
        this.next();
    }
    set(field, value) {
        let store = this.store;
        const parts = field.split('.');
        let key = parts.shift();
        while (parts.length > 0) {
            store = store[key] = store[key] || {};
            key = parts.shift();
        }
        store[key] = value;
    }
    next() {
        this.ngZone.runOutsideAngular(() => {
            this.source.next(this.store);
        });
    }
};
ConfigurationService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [NgZone])
], ConfigurationService);
export { ConfigurationService };
