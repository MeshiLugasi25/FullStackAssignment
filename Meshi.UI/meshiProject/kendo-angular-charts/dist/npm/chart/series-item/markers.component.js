/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var markers_component_generated_1 = require("../series-item/markers.component.generated");
/**
 * The configuration of the Chart series marker.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *       selector: 'my-app',
 *   template: `
 *       <kendo-chart [categoryAxis]="{ categories: categories }">
 *           <kendo-chart-title text="Gross domestic product growth /GDP annual %/"></kendo-chart-title>
 *           <kendo-chart-legend position="bottom" orientation="horizontal"></kendo-chart-legend>
 *           <kendo-chart-tooltip format="{0}%"></kendo-chart-tooltip>
 *           <kendo-chart-series>
 *               <kendo-chart-series-item *ngFor="let item of series"
 *                   type="line"
 *                   style="smooth"
 *                   [data]="item.data"
 *                   [name]="item.name"
 *                   [markers]="item.markers">
 *               </kendo-chart-series-item>
 *           </kendo-chart-series>
 *       </kendo-chart>
 *   `
 * })
 * export class AppComponent {
 * public series: any[] = [{
 *   name: "India",
 *   data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855],
 *   markers: {
 *     background: 'red',
 *     size: 20,
 *     type: 'circle'
 *   }
 * }, {
 *   name: "Russian Federation",
 *   data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3],
 *   markers: {
 *     background: 'yellow',
 *     size: 10,
 *     type: 'square',
 *     rotation: 45
 *   }
 * }, {
 *   name: "Germany",
 *   data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995],
 *   markers: {
 *     background: 'green',
 *     size: 20,
 *     type: 'triangle'
 *   }
 * },{
 *   name: "World",
 *   data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727],
 *   markers: {
 *     background: 'blue',
 *     size: 10,
 *     type: 'cross'
 *   }
 * }];
 * public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
 * }
 * ```
 */
var SeriesMarkersComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesMarkersComponent, _super);
    // Place custom properties here
    function SeriesMarkersComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    SeriesMarkersComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-series-item-markers',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], SeriesMarkersComponent);
    return SeriesMarkersComponent;
}(markers_component_generated_1.SeriesMarkersComponentGenerated));
exports.SeriesMarkersComponent = SeriesMarkersComponent;
