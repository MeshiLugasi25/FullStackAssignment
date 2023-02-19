/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { QueryList } from '@angular/core';
import { ConfigurationService } from '../common/configuration.service';
import { CollectionService, Item } from '../common/collection.service';
import { CollectionComponent } from '../common/collection.component';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class YAxisComponentGenerated extends CollectionComponent {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    children: QueryList<Item>;
    constructor(configurationService: ConfigurationService, collectionService: CollectionService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<YAxisComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<YAxisComponentGenerated, never, never, {}, {}, ["children"]>;
}

//# sourceMappingURL=y-axis.component.generated.d.ts.map