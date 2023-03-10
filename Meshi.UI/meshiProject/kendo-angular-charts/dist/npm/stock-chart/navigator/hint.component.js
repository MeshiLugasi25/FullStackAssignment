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
 * The default options of the navigator hint
 * ([see example]({% slug overview_stockchart_charts %}#toc-navigator)).
 */
var NavigatorHintComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorHintComponent, _super);
    function NavigatorHintComponent(configurationService) {
        var _this = _super.call(this, 'hint', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], NavigatorHintComponent.prototype, "content", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], NavigatorHintComponent.prototype, "format", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], NavigatorHintComponent.prototype, "visible", void 0);
    NavigatorHintComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-navigator-hint',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], NavigatorHintComponent);
    return NavigatorHintComponent;
}(settings_component_1.SettingsComponent));
exports.NavigatorHintComponent = NavigatorHintComponent;
