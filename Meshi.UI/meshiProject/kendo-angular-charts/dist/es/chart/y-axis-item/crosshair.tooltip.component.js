/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { YAxisCrosshairTooltipComponentGenerated } from '../y-axis-item/crosshair.tooltip.component.generated';
/**
 * The configuration options of the crosshair tooltip.
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
var YAxisCrosshairTooltipComponent = /** @class */ (function (_super) {
    tslib_1.__extends(YAxisCrosshairTooltipComponent, _super);
    // Place custom properties here.
    function YAxisCrosshairTooltipComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.markAsVisible();
        return _this;
    }
    YAxisCrosshairTooltipComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-y-axis-item-crosshair-tooltip',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], YAxisCrosshairTooltipComponent);
    return YAxisCrosshairTooltipComponent;
}(YAxisCrosshairTooltipComponentGenerated));
export { YAxisCrosshairTooltipComponent };
