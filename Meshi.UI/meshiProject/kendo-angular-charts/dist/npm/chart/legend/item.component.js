/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var item_component_generated_1 = require("../legend/item.component.generated");
/**
 * The configuration of the Chart legend item.
 *
 * @example
 *
 * ```html-no-run
 * <kendo-chart>
 *   <kendo-chart-legend>
 *      <kendo-chart-legend-item cursor="crosshair"></kendo-chart-legend-item>
 *   </kendo-chart-legend>
 * </kendo-chart>
 * ```
 */
var LegendItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LegendItemComponent, _super);
    // Place custom properties here
    function LegendItemComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    LegendItemComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-legend-item',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], LegendItemComponent);
    return LegendItemComponent;
}(item_component_generated_1.LegendItemComponentGenerated));
exports.LegendItemComponent = LegendItemComponent;
