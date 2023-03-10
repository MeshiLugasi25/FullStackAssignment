/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare const THROTTLE_MS: number;
/**
 * @hidden
 */
export declare class Change {
    key: string;
    value: any;
    constructor(key: string, value: any);
}
/**
 * @hidden
 */
export declare class ConfigurationService {
    protected ngZone: NgZone;
    onChange$: Observable<any>;
    onFastChange$: Observable<any>;
    store: any;
    protected source: BehaviorSubject<any>;
    constructor(ngZone: NgZone);
    protected initSource(): void;
    push(store: any): void;
    notify(change: Change): void;
    protected set(field: string, value: any): void;
    protected next(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConfigurationService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ConfigurationService>;
}

//# sourceMappingURL=configuration.service.d.ts.map