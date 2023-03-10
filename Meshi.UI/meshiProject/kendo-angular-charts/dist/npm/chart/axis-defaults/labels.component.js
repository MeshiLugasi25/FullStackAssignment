/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var labels_component_generated_1 = require("../axis-defaults/labels.component.generated");
/**
 * The configuration of the axis labels ([see example]({% slug api_charts_axisdefaultscomponent %})).
 */
var AxisDefaultsLabelsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AxisDefaultsLabelsComponent, _super);
    // Place custom properties here
    function AxisDefaultsLabelsComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    AxisDefaultsLabelsComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-axis-defaults-labels',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], AxisDefaultsLabelsComponent);
    return AxisDefaultsLabelsComponent;
}(labels_component_generated_1.AxisDefaultsLabelsComponentGenerated));
exports.AxisDefaultsLabelsComponent = AxisDefaultsLabelsComponent;
