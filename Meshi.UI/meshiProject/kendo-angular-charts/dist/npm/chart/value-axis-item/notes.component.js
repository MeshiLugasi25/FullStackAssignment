/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var notes_component_generated_1 = require("../value-axis-item/notes.component.generated");
/**
 * The configuration of the value axis notes ([see example]({% slug notes_chart_charts %}#toc-axis-notes)).
 */
var ValueAxisNotesComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ValueAxisNotesComponent, _super);
    // Place custom properties here
    function ValueAxisNotesComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    ValueAxisNotesComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-value-axis-item-notes',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], ValueAxisNotesComponent);
    return ValueAxisNotesComponent;
}(notes_component_generated_1.ValueAxisNotesComponentGenerated));
exports.ValueAxisNotesComponent = ValueAxisNotesComponent;
