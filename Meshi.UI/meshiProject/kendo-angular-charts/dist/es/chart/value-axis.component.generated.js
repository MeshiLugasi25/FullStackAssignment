/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ContentChildren, QueryList } from '@angular/core';
import { CollectionComponent } from '../common/collection.component';
import { ValueAxisItemComponent } from './value-axis-item.component';
/**
 * @hidden
 */
var ValueAxisComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(ValueAxisComponentGenerated, _super);
    function ValueAxisComponentGenerated(configurationService, collectionService) {
        var _this = _super.call(this, 'valueAxis', configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    tslib_1.__decorate([
        ContentChildren(ValueAxisItemComponent),
        tslib_1.__metadata("design:type", QueryList)
    ], ValueAxisComponentGenerated.prototype, "children", void 0);
    return ValueAxisComponentGenerated;
}(CollectionComponent));
export { ValueAxisComponentGenerated };
