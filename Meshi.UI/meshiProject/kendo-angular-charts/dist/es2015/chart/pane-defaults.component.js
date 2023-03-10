/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ConfigurationService } from '../common/configuration.service';
import { SettingsComponent } from '../common/settings.component';
/**
 * The default options for all chart panes,
 * ([see example]({% slug panes_chart_charts %}#toc-default-panes-configuration)).
 */
let PaneDefaultsComponent = class PaneDefaultsComponent extends SettingsComponent {
    constructor(configurationService) {
        super('paneDefaults', configurationService);
        this.configurationService = configurationService;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], PaneDefaultsComponent.prototype, "background", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], PaneDefaultsComponent.prototype, "border", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], PaneDefaultsComponent.prototype, "clip", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], PaneDefaultsComponent.prototype, "height", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], PaneDefaultsComponent.prototype, "margin", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], PaneDefaultsComponent.prototype, "padding", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], PaneDefaultsComponent.prototype, "title", void 0);
PaneDefaultsComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-pane-defaults',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], PaneDefaultsComponent);
export { PaneDefaultsComponent };
