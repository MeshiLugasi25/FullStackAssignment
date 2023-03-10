/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var labels_component_1 = require("./labels.component");
/**
 * The configuration of the axis date range labels ([see example]({% slug labels_chart_charts %})).
 */
var CategoryAxisRangeLabelsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryAxisRangeLabelsComponent, _super);
    function CategoryAxisRangeLabelsComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.configKey = 'rangeLabels';
        _this.markAsVisible();
        return _this;
    }
    CategoryAxisRangeLabelsComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-category-axis-item-range-labels',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], CategoryAxisRangeLabelsComponent);
    return CategoryAxisRangeLabelsComponent;
}(labels_component_1.CategoryAxisLabelsComponent));
exports.CategoryAxisRangeLabelsComponent = CategoryAxisRangeLabelsComponent;
