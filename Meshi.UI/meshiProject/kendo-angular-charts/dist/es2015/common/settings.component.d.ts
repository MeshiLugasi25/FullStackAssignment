/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { ConfigurationService } from './configuration.service';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class SettingsComponent implements OnChanges, OnDestroy {
    protected configKey: string;
    configurationService: ConfigurationService;
    protected store: any;
    constructor(configKey: string, configurationService: ConfigurationService);
    ngOnDestroy(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    /**
     * Updates the component fields with the specified values and refreshes the Chart.
     *
     * Use this method when the configuration values cannot be set through the template.
     *
     * @example
     * ```ts-no-run
     * item.notifyChanges({ visible: true });
     * ```
     *
     * @param changes An object containing the updated input fields.
     */
    notifyChanges(changes: any): void;
    protected markAsVisible(): void;
    private notify;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SettingsComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SettingsComponent, never, never, {}, {}, never>;
}

//# sourceMappingURL=settings.component.d.ts.map