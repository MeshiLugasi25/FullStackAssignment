/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
/**
 * The default options of the navigator hint
 * ([see example]({% slug overview_stockchart_charts %}#toc-navigator)).
 */
let NavigatorHintComponent = class NavigatorHintComponent extends SettingsComponent {
    constructor(configurationService) {
        super('hint', configurationService);
        this.configurationService = configurationService;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], NavigatorHintComponent.prototype, "content", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], NavigatorHintComponent.prototype, "format", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NavigatorHintComponent.prototype, "visible", void 0);
NavigatorHintComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-hint',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], NavigatorHintComponent);
export { NavigatorHintComponent };
