/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { CategoryAxisLabelsComponent } from '../../../chart/category-axis-item/labels.component';
/**
 * The configuration of the axis labels.
 */
var NavigatorCategoryAxisLabelsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorCategoryAxisLabelsComponent, _super);
    function NavigatorCategoryAxisLabelsComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    NavigatorCategoryAxisLabelsComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-navigator-category-axis-labels',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], NavigatorCategoryAxisLabelsComponent);
    return NavigatorCategoryAxisLabelsComponent;
}(CategoryAxisLabelsComponent));
export { NavigatorCategoryAxisLabelsComponent };
