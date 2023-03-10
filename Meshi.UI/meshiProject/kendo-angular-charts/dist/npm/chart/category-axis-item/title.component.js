/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var title_component_generated_1 = require("../category-axis-item/title.component.generated");
/**
 * The configuration of the category axis title.
 */
var CategoryAxisTitleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryAxisTitleComponent, _super);
    // Place custom properties here
    function CategoryAxisTitleComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    CategoryAxisTitleComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-category-axis-item-title',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], CategoryAxisTitleComponent);
    return CategoryAxisTitleComponent;
}(title_component_generated_1.CategoryAxisTitleComponentGenerated));
exports.CategoryAxisTitleComponent = CategoryAxisTitleComponent;
