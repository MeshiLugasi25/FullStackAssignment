/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../../common/configuration.service");
var notes_label_component_1 = require("../../../chart/series-item/notes.label.component");
/**
 * The label of the notes.
 */
var NavigatorSeriesNotesLabelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorSeriesNotesLabelComponent, _super);
    function NavigatorSeriesNotesLabelComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    NavigatorSeriesNotesLabelComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-navigator-series-item-notes-label',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], NavigatorSeriesNotesLabelComponent);
    return NavigatorSeriesNotesLabelComponent;
}(notes_label_component_1.SeriesNotesLabelComponent));
exports.NavigatorSeriesNotesLabelComponent = NavigatorSeriesNotesLabelComponent;
