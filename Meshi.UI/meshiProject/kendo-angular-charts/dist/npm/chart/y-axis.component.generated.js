/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var collection_component_1 = require("../common/collection.component");
var y_axis_item_component_1 = require("./y-axis-item.component");
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
        core_1.ContentChildren(y_axis_item_component_1.YAxisItemComponent),
        tslib_1.__metadata("design:type", core_1.QueryList)
    ], YAxisComponentGenerated.prototype, "children", void 0);
    return YAxisComponentGenerated;
}(collection_component_1.CollectionComponent));
exports.YAxisComponentGenerated = YAxisComponentGenerated;
