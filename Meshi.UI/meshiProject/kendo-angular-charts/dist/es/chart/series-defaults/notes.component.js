/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesDefaultsNotesComponentGenerated } from '../series-defaults/notes.component.generated';
/**
 * The configuration of the [`seriesDefaults`]({% slug api_charts_seriesdefaultscomponent %}) notes.
 */
var SeriesDefaultsNotesComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesDefaultsNotesComponent, _super);
    // Place custom properties here
    function SeriesDefaultsNotesComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    SeriesDefaultsNotesComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-series-defaults-notes',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], SeriesDefaultsNotesComponent);
    return SeriesDefaultsNotesComponent;
}(SeriesDefaultsNotesComponentGenerated));
export { SeriesDefaultsNotesComponent };
