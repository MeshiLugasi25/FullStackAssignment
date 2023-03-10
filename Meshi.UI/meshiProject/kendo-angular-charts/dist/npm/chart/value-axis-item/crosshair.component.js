/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var crosshair_component_generated_1 = require("../value-axis-item/crosshair.component.generated");
/**
 * The crosshair configuration options ([see example]({% slug crosshairs_chart_charts %})).
 */
var ValueAxisCrosshairComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ValueAxisCrosshairComponent, _super);
    // Place custom properties here
    function ValueAxisCrosshairComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.markAsVisible();
        return _this;
    }
    ValueAxisCrosshairComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-value-axis-item-crosshair',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], ValueAxisCrosshairComponent);
    return ValueAxisCrosshairComponent;
}(crosshair_component_generated_1.ValueAxisCrosshairComponentGenerated));
exports.ValueAxisCrosshairComponent = ValueAxisCrosshairComponent;
