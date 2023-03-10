/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesLabelsComponentGenerated } from '../series-item/labels.component.generated';
/**
 * The configuration of the Chart series label
 * ([see example]({% slug labels_chart_charts %})).
 */
var SeriesLabelsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesLabelsComponent, _super);
    // Place custom properties here
    function SeriesLabelsComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.markAsVisible();
        return _this;
    }
    SeriesLabelsComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-series-item-labels',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], SeriesLabelsComponent);
    return SeriesLabelsComponent;
}(SeriesLabelsComponentGenerated));
export { SeriesLabelsComponent };
