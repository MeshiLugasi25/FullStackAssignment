/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var kendo_angular_intl_1 = require("@progress/kendo-angular-intl");
var configuration_service_1 = require("../../common/configuration.service");
var prefix_configuration_service_1 = require("../../common/prefix-configuration.service");
var category_axis_item_component_1 = require("../../chart/category-axis-item.component");
/**
 * The configuration component of the navigator category axis.
 *
 * @example
 *
 * ```html-no-run
 * <kendo-stockchart>
 *   <kendo-chart-navigator>
 *     <kendo-chart-navigator-category-axis
 *       color="maroon"
 *       [labels]="{color: 'green'}">
 *     </kendo-chart-navigator-category-axis>
 *   </kendo-chart-navigator>
 * </kendo-stockchart>
 * ```
 */
var NavigatorCategoryAxisComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorCategoryAxisComponent, _super);
    function NavigatorCategoryAxisComponent(configurationService, intl, localeId) {
        var _this = _super.call(this, configurationService, null, intl, localeId) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    NavigatorCategoryAxisComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [{
                    provide: prefix_configuration_service_1.PREFIX,
                    useValue: 'navigator.categoryAxis'
                }, {
                    provide: configuration_service_1.ConfigurationService,
                    useClass: prefix_configuration_service_1.PrefixConfigurationService
                }],
            selector: 'kendo-chart-navigator-category-axis',
            template: ''
        }),
        tslib_1.__param(2, core_1.Inject(core_1.LOCALE_ID)),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService,
            kendo_angular_intl_1.IntlService, String])
    ], NavigatorCategoryAxisComponent);
    return NavigatorCategoryAxisComponent;
}(category_axis_item_component_1.CategoryAxisItemComponent));
exports.NavigatorCategoryAxisComponent = NavigatorCategoryAxisComponent;
