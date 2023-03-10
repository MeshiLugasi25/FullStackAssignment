/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { AfterContentInit, OnDestroy, QueryList } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { CollectionService, Item } from './collection.service';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class CollectionComponent implements AfterContentInit, OnDestroy {
    protected configKey: string;
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    children: QueryList<Item>;
    private subscription;
    private items;
    constructor(configKey: string, configurationService: ConfigurationService, collectionService: CollectionService);
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    private processChanges;
    private readItems;
    private change;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CollectionComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CollectionComponent, never, never, {}, {}, never>;
}

//# sourceMappingURL=collection.component.d.ts.map