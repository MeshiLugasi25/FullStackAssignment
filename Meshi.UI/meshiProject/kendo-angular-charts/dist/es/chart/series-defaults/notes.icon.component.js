/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesDefaultsNotesIconComponentGenerated } from '../series-defaults/notes.icon.component.generated';
/**
 * The icon of the notes.
 */
var SeriesDefaultsNotesIconComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesDefaultsNotesIconComponent, _super);
    // Place custom properties here
    function SeriesDefaultsNotesIconComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    SeriesDefaultsNotesIconComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-series-defaults-notes-icon',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], SeriesDefaultsNotesIconComponent);
    return SeriesDefaultsNotesIconComponent;
}(SeriesDefaultsNotesIconComponentGenerated));
export { SeriesDefaultsNotesIconComponent };
