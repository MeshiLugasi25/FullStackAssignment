/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesNotesLabelComponentGenerated } from '../series-item/notes.label.component.generated';
/**
 * The label of the notes.
 */
var SeriesNotesLabelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesNotesLabelComponent, _super);
    // Place custom properties here
    function SeriesNotesLabelComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    SeriesNotesLabelComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-series-item-notes-label',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], SeriesNotesLabelComponent);
    return SeriesNotesLabelComponent;
}(SeriesNotesLabelComponentGenerated));
export { SeriesNotesLabelComponent };
