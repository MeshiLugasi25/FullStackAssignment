/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ContentChildren, QueryList } from '@angular/core';
import { CollectionComponent } from '../common/collection.component';
import { XAxisItemComponent } from './x-axis-item.component';
/**
 * @hidden
 */
export class XAxisComponentGenerated extends CollectionComponent {
    constructor(configurationService, collectionService) {
        super('xAxis', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
}
tslib_1.__decorate([
    ContentChildren(XAxisItemComponent),
    tslib_1.__metadata("design:type", QueryList)
], XAxisComponentGenerated.prototype, "children", void 0);
