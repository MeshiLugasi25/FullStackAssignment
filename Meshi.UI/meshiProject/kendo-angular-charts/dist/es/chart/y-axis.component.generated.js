/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ContentChildren, QueryList } from '@angular/core';
import { CollectionComponent } from '../common/collection.component';
import { YAxisItemComponent } from './y-axis-item.component';
/**
 * @hidden
 */
var YAxisComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(YAxisComponentGenerated, _super);
    function YAxisComponentGenerated(configurationService, collectionService) {
        var _this = _super.call(this, 'yAxis', configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    tslib_1.__decorate([
        ContentChildren(YAxisItemComponent),
        tslib_1.__metadata("design:type", QueryList)
    ], YAxisComponentGenerated.prototype, "children", void 0);
    return YAxisComponentGenerated;
}(CollectionComponent));
export { YAxisComponentGenerated };
