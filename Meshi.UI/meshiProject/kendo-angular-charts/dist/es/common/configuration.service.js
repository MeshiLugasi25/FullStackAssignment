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
export var THROTTLE_MS = 1000 / 60;
/**
 * @hidden
 */
var Change = /** @class */ (function () {
    function Change(key, value) {
        this.key = key;
        this.value = value;
    }
    return Change;
}());
export { Change };
/**
 * @hidden
 */
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(ngZone) {
        this.ngZone = ngZone;
        this.store = {};
        this.source = new BehaviorSubject({});
        this.initSource();
    }
    ConfigurationService.prototype.initSource = function () {
        this.onFastChange$ = this.source.asObservable();
        this.onChange$ = this.onFastChange$.pipe(auditTime(THROTTLE_MS));
    };
    ConfigurationService.prototype.push = function (store) {
        this.store = store;
        this.next();
    };
    ConfigurationService.prototype.notify = function (change) {
        this.set(change.key, change.value);
        this.next();
    };
    ConfigurationService.prototype.set = function (field, value) {
        var store = this.store;
        var parts = field.split('.');
        var key = parts.shift();
        while (parts.length > 0) {
            store = store[key] = store[key] || {};
            key = parts.shift();
        }
        store[key] = value;
    };
    ConfigurationService.prototype.next = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.source.next(_this.store);
        });
    };
    ConfigurationService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [NgZone])
    ], ConfigurationService);
    return ConfigurationService;
}());
export { ConfigurationService };
