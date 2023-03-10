/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var notes_label_component_generated_1 = require("../series-defaults/notes.label.component.generated");
/**
 * The label of the notes.
 */
var SeriesDefaultsNotesLabelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesDefaultsNotesLabelComponent, _super);
    // Place custom properties here
    function SeriesDefaultsNotesLabelComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    SeriesDefaultsNotesLabelComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-series-defaults-notes-label',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], SeriesDefaultsNotesLabelComponent);
    return SeriesDefaultsNotesLabelComponent;
}(notes_label_component_generated_1.SeriesDefaultsNotesLabelComponentGenerated));
exports.SeriesDefaultsNotesLabelComponent = SeriesDefaultsNotesLabelComponent;
