/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesDefaultsLabelsFromComponentGenerated } from '../series-defaults/labels.from.component.generated';
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
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-series-defaults-labels-from',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], SeriesDefaultsLabelsFromComponent);
    return SeriesDefaultsLabelsFromComponent;
}(SeriesDefaultsLabelsFromComponentGenerated));
export { SeriesDefaultsLabelsFromComponent };
