/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisCrosshairComponentGenerated } from '../category-axis-item/crosshair.component.generated';
/**
 * The crosshair configuration options ([see example]({% slug crosshairs_chart_charts %})).
 */
var CategoryAxisCrosshairComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryAxisCrosshairComponent, _super);
    // Place custom properties here
    function CategoryAxisCrosshairComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.markAsVisible();
        return _this;
    }
    CategoryAxisCrosshairComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-category-axis-item-crosshair',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], CategoryAxisCrosshairComponent);
    return CategoryAxisCrosshairComponent;
}(CategoryAxisCrosshairComponentGenerated));
export { CategoryAxisCrosshairComponent };
