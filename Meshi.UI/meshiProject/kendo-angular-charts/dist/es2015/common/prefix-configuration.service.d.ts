/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { InjectionToken, NgZone } from '@angular/core';
import { ConfigurationService, Change } from './configuration.service';
import { RootConfigurationService } from './root-configuration.service';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare const PREFIX: InjectionToken<string>;
/**
 * @hidden
 */
export declare class PrefixConfigurationService extends ConfigurationService {
    protected rootService: RootConfigurationService;
    protected prefix: string;
    constructor(rootService: RootConfigurationService, prefix: string, ngZone: NgZone);
    push(store: any): void;
    notify(change: Change): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PrefixConfigurationService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PrefixConfigurationService>;
}

//# sourceMappingURL=prefix-configuration.service.d.ts.map