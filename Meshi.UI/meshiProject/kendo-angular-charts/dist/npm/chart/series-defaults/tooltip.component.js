/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var tooltip_component_generated_1 = require("../series-defaults/tooltip.component.generated");
/**
 * The configuration options of the Chart series tooltip.
 */
var SeriesDefaultsTooltipComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesDefaultsTooltipComponent, _super);
    // Place custom properties here.
    function SeriesDefaultsTooltipComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.markAsVisible();
        return _this;
    }
    SeriesDefaultsTooltipComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-series-defaults-tooltip',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], SeriesDefaultsTooltipComponent);
    return SeriesDefaultsTooltipComponent;
}(tooltip_component_generated_1.SeriesDefaultsTooltipComponentGenerated));
exports.SeriesDefaultsTooltipComponent = SeriesDefaultsTooltipComponent;
