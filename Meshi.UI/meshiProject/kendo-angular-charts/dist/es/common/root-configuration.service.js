/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
/**
 * @hidden
 */
var RootConfigurationService = /** @class */ (function (_super) {
    tslib_1.__extends(RootConfigurationService, _super);
    function RootConfigurationService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootConfigurationService = tslib_1.__decorate([
        Injectable()
    ], RootConfigurationService);
    return RootConfigurationService;
}(ConfigurationService));
export { RootConfigurationService };
