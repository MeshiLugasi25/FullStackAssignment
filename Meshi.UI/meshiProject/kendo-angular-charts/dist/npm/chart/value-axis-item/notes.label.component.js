/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var notes_label_component_generated_1 = require("../value-axis-item/notes.label.component.generated");
/**
 * The label of the notes.
 */
var ValueAxisNotesLabelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ValueAxisNotesLabelComponent, _super);
    // Place custom properties here
    function ValueAxisNotesLabelComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    ValueAxisNotesLabelComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-value-axis-item-notes-label',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], ValueAxisNotesLabelComponent);
    return ValueAxisNotesLabelComponent;
}(notes_label_component_generated_1.ValueAxisNotesLabelComponentGenerated));
exports.ValueAxisNotesLabelComponent = ValueAxisNotesLabelComponent;
