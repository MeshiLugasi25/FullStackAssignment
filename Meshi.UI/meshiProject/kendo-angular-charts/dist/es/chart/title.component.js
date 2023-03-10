/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../common/configuration.service';
import { TitleComponentGenerated } from './title.component.generated';
/**
 * The configuration options of the Chart title or text
 * ([see example]({% slug title_chart_charts %})).
 *
 * @example
 * ```ts-preview
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *    selector: 'my-app',
 *    template: `
 *        <kendo-chart [categoryAxis]="{ categories: categories }">
 *            <kendo-chart-title text="Gross domestic product growth /GDP annual %/"></kendo-chart-title>
 *            <kendo-chart-legend
 *              position="bottom"
 *              orientation="horizontal"
 *              align="end"
 *              background="rgba(255, 0, 0, 0.1)"
 *              [border]="borderOptions"
 *              [margin]="10"
 *              [padding]="10"
 *              [width]="150"
 *              [offsetX]="11"
 *              [offsetY]="-103"
 *              [reverse]="true"
 *              [visible]="isVisible"
 *              ></kendo-chart-legend>
 *            <kendo-chart-tooltip format="{0}%"></kendo-chart-tooltip>
 *            <kendo-chart-series>
 *                <kendo-chart-series-item *ngFor="let item of series"
 *                    type="line" style="smooth" [data]="item.data" [name]="item.name">
 *                </kendo-chart-series-item>
 *            </kendo-chart-series>
 *        </kendo-chart>
 *        <br /><br />
 *        <button class="k-button" (click)="isVisible=!isVisible">Toggle Legend</button>
 *    `
 * })
 * export class AppComponent {
 *  public isVisible = true;
 *  public borderOptions = {
 *    color: "rgba(255, 0, 0, 0.8)",
 *    dashType: 'dash',
 *    width: 2
 *  };
 *
 * public series: any[] = [{
 *   name: "India",
 *   data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
 * }, {
 *   name: "Russian Federation",
 *   data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
 * }, {
 *   name: "Germany",
 *   data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]
 * },{
 *   name: "World",
 *   data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
 * }];
 *  public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
 * }
 * ```
 */
var TitleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TitleComponent, _super);
    // Place custom properties here
    function TitleComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    TitleComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-title',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], TitleComponent);
    return TitleComponent;
}(TitleComponentGenerated));
export { TitleComponent };
