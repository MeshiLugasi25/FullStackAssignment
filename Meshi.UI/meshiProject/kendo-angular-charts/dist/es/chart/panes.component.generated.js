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
var PanesComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(PanesComponentGenerated, _super);
    function PanesComponentGenerated(configurationService, collectionService) {
        var _this = _super.call(this, 'panes', configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    tslib_1.__decorate([
        ContentChildren(PaneComponent),
        tslib_1.__metadata("design:type", QueryList)
    ], PanesComponentGenerated.prototype, "children", void 0);
    return PanesComponentGenerated;
}(CollectionComponent));
export { PanesComponentGenerated };
