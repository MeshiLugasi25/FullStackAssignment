/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesNotesIconComponent } from '../../../chart/series-item/notes.icon.component';
/**
 * The icon of the notes.
 */
var NavigatorSeriesNotesIconComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorSeriesNotesIconComponent, _super);
    function NavigatorSeriesNotesIconComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    NavigatorSeriesNotesIconComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-navigator-series-item-notes-icon',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], NavigatorSeriesNotesIconComponent);
    return NavigatorSeriesNotesIconComponent;
}(SeriesNotesIconComponent));
export { NavigatorSeriesNotesIconComponent };
