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
export const PREFIX = new InjectionToken('configuration prefix');
/**
 * @hidden
 */
let PrefixConfigurationService = class PrefixConfigurationService extends ConfigurationService {
    constructor(rootService, prefix, ngZone) {
        super(ngZone);
        this.rootService = rootService;
        this.prefix = prefix;
    }
    push(store) {
        this.rootService.notify(new Change(this.prefix, store));
    }
    notify(change) {
        change.key = this.prefix + (change.key ? `.${change.key}` : '');
        this.rootService.notify(change);
    }
};
PrefixConfigurationService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(0, Inject(RootConfigurationService)),
    tslib_1.__param(1, Inject(PREFIX)),
    tslib_1.__metadata("design:paramtypes", [RootConfigurationService, String, NgZone])
], PrefixConfigurationService);
export { PrefixConfigurationService };
