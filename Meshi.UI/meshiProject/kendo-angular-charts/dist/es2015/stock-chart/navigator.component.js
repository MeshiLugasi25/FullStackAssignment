/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ConfigurationService } from '../common/configuration.service';
import { PrefixConfigurationService, PREFIX } from '../common/prefix-configuration.service';
import { SettingsComponent } from '../common/settings.component';
/**
 * The configuration options of the navigator
 * ([see runnable example]({% slug overview_stockchart_charts %}#toc-navigator)).
 *
 * @example
 * ```ts-no-run
 * _@Component({
 *     selector: 'my-app',
 *       template: `
 *         <kendo-stockchart (navigatorFilter)="onNavigatorFilter($event)">
 *             <kendo-chart-series>
 *                <kendo-chart-series-item
 *                type="candlestick"
 *                 [data]="seriesData"
 *                 openField="Open"
 *                 closeField="Close"
 *                 lowField="Low"
 *                 highField="High"
 *                 categoryField="Date">
 *             </kendo-chart-series-item>
 *          </kendo-chart-series>
 *          <kendo-chart-navigator
 *            [categoryAxis]="categoryAxisOptions"
 *            [hint]="hintOptions"
 *            [pane]="paneOptions"
 *            [visible]="isVisible">
 *            <kendo-chart-navigator-select [from]="from" [to]="to">
 *            </kendo-chart-navigator-select>
 *            <kendo-chart-navigator-series>
 *              <kendo-chart-navigator-series-item type="area" [data]="navigatorData" field="Close" categoryField="Date">
 *              </kendo-chart-navigator-series-item>
 *           </kendo-chart-navigator-series>
 *          </kendo-chart-navigator>
 *        </kendo-stockchart>
 *        <br /><br />
 *        <button class="k-button" (click)="isVisible = !isVisible">Toggle Navigator</button>
 *    `
 * })
 * ```
 */
let NavigatorComponent = class NavigatorComponent extends SettingsComponent {
    constructor(configurationService) {
        super('', configurationService);
        this.configurationService = configurationService;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], NavigatorComponent.prototype, "visible", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NavigatorComponent.prototype, "categoryAxis", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NavigatorComponent.prototype, "hint", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NavigatorComponent.prototype, "pane", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NavigatorComponent.prototype, "select", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NavigatorComponent.prototype, "series", void 0);
NavigatorComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [{ provide: PREFIX, useValue: 'navigator' }, { provide: ConfigurationService, useClass: PrefixConfigurationService }],
        selector: 'kendo-chart-navigator',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], NavigatorComponent);
export { NavigatorComponent };
