/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../common/configuration.service';
import { SeriesDefaultsComponentGenerated } from './series-defaults.component.generated';
/**
 * The default options for all series
 * ([see example]({% slug series_chart_charts %}#toc-default-series-configuration)).
 */
var SeriesDefaultsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesDefaultsComponent, _super);
    // Place custom properties here
    function SeriesDefaultsComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    SeriesDefaultsComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-series-defaults',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], SeriesDefaultsComponent);
    return SeriesDefaultsComponent;
}(SeriesDefaultsComponentGenerated));
export { SeriesDefaultsComponent };
