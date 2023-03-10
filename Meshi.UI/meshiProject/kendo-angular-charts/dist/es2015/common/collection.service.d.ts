/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Observable } from 'rxjs';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export interface Item {
    options: any;
}
/**
 * @hidden
 */
export declare class ItemChange {
    sender: Item;
    options: any;
    constructor(sender: Item, options: any);
}
/**
 * @hidden
 */
export declare class CollectionService {
    onItemChange$: Observable<ItemChange>;
    private source;
    constructor();
    notify(change: ItemChange): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CollectionService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CollectionService>;
}

//# sourceMappingURL=collection.service.d.ts.map