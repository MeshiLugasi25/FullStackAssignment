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
var XAxisComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(XAxisComponentGenerated, _super);
    function XAxisComponentGenerated(configurationService, collectionService) {
        var _this = _super.call(this, 'xAxis', configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    tslib_1.__decorate([
        ContentChildren(XAxisItemComponent),
        tslib_1.__metadata("design:type", QueryList)
    ], XAxisComponentGenerated.prototype, "children", void 0);
    return XAxisComponentGenerated;
}(CollectionComponent));
export { XAxisComponentGenerated };
