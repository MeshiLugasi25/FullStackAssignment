/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../common/configuration.service';
import { ChartAreaComponentGenerated } from './chart-area.component.generated';
/**
 * The configuration options of the Chart area.
 * Represents the entire visible area of the Chart
 * ([see example]({% slug chartarea_chart_charts %})).
 */
var ChartAreaComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ChartAreaComponent, _super);
    // Place custom properties here
    function ChartAreaComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    ChartAreaComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-area',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], ChartAreaComponent);
    return ChartAreaComponent;
}(ChartAreaComponentGenerated));
export { ChartAreaComponent };
