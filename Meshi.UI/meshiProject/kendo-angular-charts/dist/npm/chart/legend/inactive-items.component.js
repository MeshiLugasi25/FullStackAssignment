/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var inactive_items_component_generated_1 = require("../legend/inactive-items.component.generated");
/**
 * The configuration of the inactive Chart legend items.
 *
 * @example
 *
 * ```html-no-run
 * <kendo-chart>
 *   <kendo-chart-legend>
 *      <kendo-chart-legend-inactive-items [labels]="{color: 'pink'}"></kendo-chart-legend-inactive-items>
 *   </kendo-chart-legend>
 * </kendo-chart>
 * ```
 */
var LegendInactiveItemsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LegendInactiveItemsComponent, _super);
    // Place custom properties here
    function LegendInactiveItemsComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    LegendInactiveItemsComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-legend-inactive-items',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], LegendInactiveItemsComponent);
    return LegendInactiveItemsComponent;
}(inactive_items_component_generated_1.LegendInactiveItemsComponentGenerated));
exports.LegendInactiveItemsComponent = LegendInactiveItemsComponent;
