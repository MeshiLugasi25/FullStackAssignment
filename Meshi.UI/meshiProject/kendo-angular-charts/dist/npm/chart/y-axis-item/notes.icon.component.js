/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var notes_icon_component_generated_1 = require("../y-axis-item/notes.icon.component.generated");
/**
 * The icon of the notes.
 */
var YAxisNotesIconComponent = /** @class */ (function (_super) {
    tslib_1.__extends(YAxisNotesIconComponent, _super);
    // Place custom properties here
    function YAxisNotesIconComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    YAxisNotesIconComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-y-axis-item-notes-icon',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], YAxisNotesIconComponent);
    return YAxisNotesIconComponent;
}(notes_icon_component_generated_1.YAxisNotesIconComponentGenerated));
exports.YAxisNotesIconComponent = YAxisNotesIconComponent;
