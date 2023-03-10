/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var collection_component_1 = require("../common/collection.component");
var category_axis_item_component_1 = require("./category-axis-item.component");
/**
 * @hidden
 */
var CategoryAxisComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryAxisComponentGenerated, _super);
    function CategoryAxisComponentGenerated(configurationService, collectionService) {
        var _this = _super.call(this, 'categoryAxis', configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.ContentChildren(category_axis_item_component_1.CategoryAxisItemComponent),
        tslib_1.__metadata("design:type", core_1.QueryList)
    ], CategoryAxisComponentGenerated.prototype, "children", void 0);
    return CategoryAxisComponentGenerated;
}(collection_component_1.CollectionComponent));
exports.CategoryAxisComponentGenerated = CategoryAxisComponentGenerated;
