/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var select_component_generated_1 = require("../category-axis-item/select.component.generated");
/**
 * The selected axis range. If set, the axis selection is enabled. The range is index-based and starts from zero.
 * Categories with indexes in the
 * ([`select.from`]({% slug api_charts_categoryaxisselectcomponent %}#toc-from)
 * &mdash;[`select.to`]({% slug api_charts_categoryaxisselectcomponent %}#toc-to)) range will be selected.
 * This means that the last category in the range will not be included in the selection.
 * If the categories are dates, the range has to be also specified with date values.
 */
var CategoryAxisSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryAxisSelectComponent, _super);
    // Place custom properties here
    function CategoryAxisSelectComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    CategoryAxisSelectComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-category-axis-item-select',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], CategoryAxisSelectComponent);
    return CategoryAxisSelectComponent;
}(select_component_generated_1.CategoryAxisSelectComponentGenerated));
exports.CategoryAxisSelectComponent = CategoryAxisSelectComponent;
