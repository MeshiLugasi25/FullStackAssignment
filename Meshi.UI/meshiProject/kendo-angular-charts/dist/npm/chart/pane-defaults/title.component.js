/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var settings_component_1 = require("../../common/settings.component");
/**
 * The configuration of the pane default title.
 */
var PaneDefaultsTitleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PaneDefaultsTitleComponent, _super);
    function PaneDefaultsTitleComponent(configurationService) {
        var _this = _super.call(this, 'paneDefaults.title', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], PaneDefaultsTitleComponent.prototype, "background", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PaneDefaultsTitleComponent.prototype, "border", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], PaneDefaultsTitleComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], PaneDefaultsTitleComponent.prototype, "font", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PaneDefaultsTitleComponent.prototype, "margin", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], PaneDefaultsTitleComponent.prototype, "position", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], PaneDefaultsTitleComponent.prototype, "visible", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], PaneDefaultsTitleComponent.prototype, "visual", void 0);
    PaneDefaultsTitleComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-pane-defaults-title',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], PaneDefaultsTitleComponent);
    return PaneDefaultsTitleComponent;
}(settings_component_1.SettingsComponent));
exports.PaneDefaultsTitleComponent = PaneDefaultsTitleComponent;
