/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("./configuration.service");
var root_configuration_service_1 = require("./root-configuration.service");
/**
 * @hidden
 */
exports.PREFIX = new core_1.InjectionToken('configuration prefix');
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
        this.rootService.notify(new configuration_service_1.Change(this.prefix, store));
    };
    PrefixConfigurationService.prototype.notify = function (change) {
        change.key = this.prefix + (change.key ? "." + change.key : '');
        this.rootService.notify(change);
    };
    PrefixConfigurationService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__param(0, core_1.Inject(root_configuration_service_1.RootConfigurationService)),
        tslib_1.__param(1, core_1.Inject(exports.PREFIX)),
        tslib_1.__metadata("design:paramtypes", [root_configuration_service_1.RootConfigurationService, String, core_1.NgZone])
    ], PrefixConfigurationService);
    return PrefixConfigurationService;
}(configuration_service_1.ConfigurationService));
exports.PrefixConfigurationService = PrefixConfigurationService;
