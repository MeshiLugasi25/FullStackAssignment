/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ContentChildren, QueryList } from '@angular/core';
import { CollectionComponent } from '../common/collection.component';
import { PaneComponent } from './pane.component';
/**
 * @hidden
 */
export class PanesComponentGenerated extends CollectionComponent {
    constructor(configurationService, collectionService) {
        super('panes', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
}
tslib_1.__decorate([
    ContentChildren(PaneComponent),
    tslib_1.__metadata("design:type", QueryList)
], PanesComponentGenerated.prototype, "children", void 0);
