/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { CategoryAxisTitleComponent } from '../../../chart/category-axis-item/title.component';
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
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-navigator-category-axis-title',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], NavigatorCategoryAxisTitleComponent);
    return NavigatorCategoryAxisTitleComponent;
}(CategoryAxisTitleComponent));
export { NavigatorCategoryAxisTitleComponent };
