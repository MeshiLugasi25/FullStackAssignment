/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../../common/configuration.service");
var select_component_1 = require("../../../chart/category-axis-item/select.component");
/**
 * The selected axis range. If set, the axis selection is enabled. The range is index-based and starts from zero.
 * Categories with indexes in the range (`select.from`, `select.to`) will be selected.
 * This means that the last category in the range will not be included in the selection.
 * If the categories are dates, the range has also to be specified with date values.
 */
var NavigatorCategoryAxisSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorCategoryAxisSelectComponent, _super);
    function NavigatorCategoryAxisSelectComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    NavigatorCategoryAxisSelectComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-navigator-category-axis-select',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], NavigatorCategoryAxisSelectComponent);
    return NavigatorCategoryAxisSelectComponent;
}(select_component_1.CategoryAxisSelectComponent));
exports.NavigatorCategoryAxisSelectComponent = NavigatorCategoryAxisSelectComponent;
