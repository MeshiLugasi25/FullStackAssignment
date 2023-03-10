/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("./configuration.service");
/**
 * @hidden
 */
var RootConfigurationService = /** @class */ (function (_super) {
    tslib_1.__extends(RootConfigurationService, _super);
    function RootConfigurationService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootConfigurationService = tslib_1.__decorate([
        core_1.Injectable()
    ], RootConfigurationService);
    return RootConfigurationService;
}(configuration_service_1.ConfigurationService));
exports.RootConfigurationService = RootConfigurationService;
