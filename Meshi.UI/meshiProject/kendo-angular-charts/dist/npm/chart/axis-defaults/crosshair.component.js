/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var crosshair_component_generated_1 = require("../axis-defaults/crosshair.component.generated");
/**
 * The crosshair configuration options ([see example]({% slug api_charts_axisdefaultscomponent %})).
 */
var AxisDefaultsCrosshairComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AxisDefaultsCrosshairComponent, _super);
    // Place custom properties here
    function AxisDefaultsCrosshairComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.markAsVisible();
        return _this;
    }
    AxisDefaultsCrosshairComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-axis-defaults-crosshair',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], AxisDefaultsCrosshairComponent);
    return AxisDefaultsCrosshairComponent;
}(crosshair_component_generated_1.AxisDefaultsCrosshairComponentGenerated));
exports.AxisDefaultsCrosshairComponent = AxisDefaultsCrosshairComponent;
