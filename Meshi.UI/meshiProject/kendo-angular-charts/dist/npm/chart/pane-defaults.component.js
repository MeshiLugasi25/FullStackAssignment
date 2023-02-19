/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../common/configuration.service");
var settings_component_1 = require("../common/settings.component");
/**
 * The default options for all chart panes,
 * ([see example]({% slug panes_chart_charts %}#toc-default-panes-configuration)).
 */
var PaneDefaultsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PaneDefaultsComponent, _super);
    function PaneDefaultsComponent(configurationService) {
        var _this = _super.call(this, 'paneDefaults', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], PaneDefaultsComponent.prototype, "background", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PaneDefaultsComponent.prototype, "border", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], PaneDefaultsComponent.prototype, "clip", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], PaneDefaultsComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PaneDefaultsComponent.prototype, "margin", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PaneDefaultsComponent.prototype, "padding", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PaneDefaultsComponent.prototype, "title", void 0);
    PaneDefaultsComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-pane-defaults',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], PaneDefaultsComponent);
    return PaneDefaultsComponent;
}(settings_component_1.SettingsComponent));
exports.PaneDefaultsComponent = PaneDefaultsComponent;
