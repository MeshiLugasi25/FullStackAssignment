/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var crosshair_tooltip_component_generated_1 = require("../x-axis-item/crosshair.tooltip.component.generated");
/**
 * The configuration options of the crosshair tooltip.
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
var XAxisCrosshairTooltipComponent = /** @class */ (function (_super) {
    tslib_1.__extends(XAxisCrosshairTooltipComponent, _super);
    // Place custom properties here.
    function XAxisCrosshairTooltipComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.markAsVisible();
        return _this;
    }
    XAxisCrosshairTooltipComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-x-axis-item-crosshair-tooltip',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], XAxisCrosshairTooltipComponent);
    return XAxisCrosshairTooltipComponent;
}(crosshair_tooltip_component_generated_1.XAxisCrosshairTooltipComponentGenerated));
exports.XAxisCrosshairTooltipComponent = XAxisCrosshairTooltipComponent;
