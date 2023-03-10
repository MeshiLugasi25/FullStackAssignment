/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Inject, LOCALE_ID } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
import { ConfigurationService } from '../../common/configuration.service';
import { PrefixConfigurationService, PREFIX } from '../../common/prefix-configuration.service';
import { CategoryAxisItemComponent } from '../../chart/category-axis-item.component';
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
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [{
                    provide: PREFIX,
                    useValue: 'navigator.categoryAxis'
                }, {
                    provide: ConfigurationService,
                    useClass: PrefixConfigurationService
                }],
            selector: 'kendo-chart-navigator-category-axis',
            template: ''
        }),
        tslib_1.__param(2, Inject(LOCALE_ID)),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService,
            IntlService, String])
    ], NavigatorCategoryAxisComponent);
    return NavigatorCategoryAxisComponent;
}(CategoryAxisItemComponent));
export { NavigatorCategoryAxisComponent };
