/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
/**
 * Specifies the initially selected range.
 * If no range is specified, the full range of values is rendered.
 */
var NavigatorSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorSelectComponent, _super);
    function NavigatorSelectComponent(configurationService) {
        var _this = _super.call(this, 'select', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Date)
    ], NavigatorSelectComponent.prototype, "from", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Date)
    ], NavigatorSelectComponent.prototype, "to", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NavigatorSelectComponent.prototype, "mousewheel", void 0);
    NavigatorSelectComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-navigator-select',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], NavigatorSelectComponent);
    return NavigatorSelectComponent;
}(SettingsComponent));
export { NavigatorSelectComponent };
