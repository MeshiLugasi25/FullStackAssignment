/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var kendo_angular_intl_1 = require("@progress/kendo-angular-intl");
var collection_service_1 = require("../common/collection.service");
var configuration_service_1 = require("../common/configuration.service");
var category_axis_item_component_generated_1 = require("./category-axis-item.component.generated");
/**
 * The configuration component for a category axis ([see example]({% slug axes_chart_charts %})).
 */
var CategoryAxisItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryAxisItemComponent, _super);
    function CategoryAxisItemComponent(configurationService, collectionService, intl, localeId) {
        var _this = _super.call(this, configurationService, collectionService, intl, localeId) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponent.prototype, "rangeLabels", void 0);
    CategoryAxisItemComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [configuration_service_1.ConfigurationService],
            selector: 'kendo-chart-category-axis-item',
            template: ''
        }),
        tslib_1.__param(3, core_1.Inject(core_1.LOCALE_ID)),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService,
            collection_service_1.CollectionService,
            kendo_angular_intl_1.IntlService, String])
    ], CategoryAxisItemComponent);
    return CategoryAxisItemComponent;
}(category_axis_item_component_generated_1.CategoryAxisItemComponentGenerated));
exports.CategoryAxisItemComponent = CategoryAxisItemComponent;
