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
let NavigatorSelectComponent = class NavigatorSelectComponent extends SettingsComponent {
    constructor(configurationService) {
        super('select', configurationService);
        this.configurationService = configurationService;
    }
};
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
export { NavigatorSelectComponent };
