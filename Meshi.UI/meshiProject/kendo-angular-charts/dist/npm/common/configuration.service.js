/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/**
 * @hidden
 */
exports.THROTTLE_MS = 1000 / 60;
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
exports.Change = Change;
/**
 * @hidden
 */
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(ngZone) {
        this.ngZone = ngZone;
        this.store = {};
        this.source = new rxjs_1.BehaviorSubject({});
        this.initSource();
    }
    ConfigurationService.prototype.initSource = function () {
        this.onFastChange$ = this.source.asObservable();
        this.onChange$ = this.onFastChange$.pipe(operators_1.auditTime(exports.THROTTLE_MS));
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
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [core_1.NgZone])
    ], ConfigurationService);
    return ConfigurationService;
}());
exports.ConfigurationService = ConfigurationService;
