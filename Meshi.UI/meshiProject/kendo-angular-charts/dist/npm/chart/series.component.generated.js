/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var collection_component_1 = require("../common/collection.component");
var series_item_component_1 = require("./series-item.component");
/**
 * @hidden
 */
var SeriesComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesComponentGenerated, _super);
    function SeriesComponentGenerated(configurationService, collectionService) {
        var _this = _super.call(this, 'series', configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.ContentChildren(series_item_component_1.SeriesItemComponent),
        tslib_1.__metadata("design:type", core_1.QueryList)
    ], SeriesComponentGenerated.prototype, "children", void 0);
    return SeriesComponentGenerated;
}(collection_component_1.CollectionComponent));
exports.SeriesComponentGenerated = SeriesComponentGenerated;
