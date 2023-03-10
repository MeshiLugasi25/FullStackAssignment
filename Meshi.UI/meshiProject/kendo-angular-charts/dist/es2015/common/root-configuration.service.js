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
let RootConfigurationService = class RootConfigurationService extends ConfigurationService {
};
RootConfigurationService = tslib_1.__decorate([
    Injectable()
], RootConfigurationService);
export { RootConfigurationService };
