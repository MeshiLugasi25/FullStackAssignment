/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var labels_from_component_generated_1 = require("../series-defaults/labels.from.component.generated");
/**
 * The `from` label configuration of the Chart series.
 */
var SeriesDefaultsLabelsFromComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesDefaultsLabelsFromComponent, _super);
    // Place custom properties here
    function SeriesDefaultsLabelsFromComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.markAsVisible();
        return _this;
    }
    SeriesDefaultsLabelsFromComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-series-defaults-labels-from',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], SeriesDefaultsLabelsFromComponent);
    return SeriesDefaultsLabelsFromComponent;
}(labels_from_component_generated_1.SeriesDefaultsLabelsFromComponentGenerated));
exports.SeriesDefaultsLabelsFromComponent = SeriesDefaultsLabelsFromComponent;
