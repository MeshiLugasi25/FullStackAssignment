/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Injectable, Inject, InjectionToken, NgZone } from '@angular/core';
import { ConfigurationService, Change } from './configuration.service';
import { RootConfigurationService } from './root-configuration.service';
/**
 * @hidden
 */
export var PREFIX = new InjectionToken('configuration prefix');
/**
 * @hidden
 */
var PrefixConfigurationService = /** @class */ (function (_super) {
    tslib_1.__extends(PrefixConfigurationService, _super);
    function PrefixConfigurationService(rootService, prefix, ngZone) {
        var _this = _super.call(this, ngZone) || this;
        _this.rootService = rootService;
        _this.prefix = prefix;
        return _this;
    }
    PrefixConfigurationService.prototype.push = function (store) {
        this.rootService.notify(new Change(this.prefix, store));
    };
    PrefixConfigurationService.prototype.notify = function (change) {
        change.key = this.prefix + (change.key ? "." + change.key : '');
        this.rootService.notify(change);
    };
    PrefixConfigurationService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Inject(RootConfigurationService)),
        tslib_1.__param(1, Inject(PREFIX)),
        tslib_1.__metadata("design:paramtypes", [RootConfigurationService, String, NgZone])
    ], PrefixConfigurationService);
    return PrefixConfigurationService;
}(ConfigurationService));
export { PrefixConfigurationService };
