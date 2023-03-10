/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../common/configuration.service");
var legend_component_generated_1 = require("./legend.component.generated");
/**
 * The configuration options of the Chart legend
 * ([see example]({% slug legend_chart_charts %})).
 */
var LegendComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LegendComponent, _super);
    // Place custom properties here
    function LegendComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.markAsVisible();
        return _this;
    }
    LegendComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-legend',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], LegendComponent);
    return LegendComponent;
}(legend_component_generated_1.LegendComponentGenerated));
exports.LegendComponent = LegendComponent;
