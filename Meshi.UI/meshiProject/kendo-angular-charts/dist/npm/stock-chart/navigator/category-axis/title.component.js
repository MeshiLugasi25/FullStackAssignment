/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../../common/configuration.service");
var title_component_1 = require("../../../chart/category-axis-item/title.component");
/**
 * The title configuration of the navigator category axis.
 */
var NavigatorCategoryAxisTitleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorCategoryAxisTitleComponent, _super);
    function NavigatorCategoryAxisTitleComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    NavigatorCategoryAxisTitleComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-navigator-category-axis-title',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], NavigatorCategoryAxisTitleComponent);
    return NavigatorCategoryAxisTitleComponent;
}(title_component_1.CategoryAxisTitleComponent));
exports.NavigatorCategoryAxisTitleComponent = NavigatorCategoryAxisTitleComponent;
