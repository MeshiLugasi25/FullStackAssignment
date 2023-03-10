/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';
import { CollectionService, Item } from './collection.service';
import { ConfigurationService } from './configuration.service';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class CollectionItemComponent implements Item, OnChanges, OnDestroy {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    protected subscription: Subscription;
    options: any;
    constructor(configurationService: ConfigurationService, collectionService: CollectionService);
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
    ngOnDestroy(): void;
    protected notify(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CollectionItemComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CollectionItemComponent, never, never, {}, {}, never>;
}

//# sourceMappingURL=collection-item.component.d.ts.map