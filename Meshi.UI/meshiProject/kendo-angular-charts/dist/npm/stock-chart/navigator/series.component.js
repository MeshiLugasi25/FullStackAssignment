/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var collection_service_1 = require("../../common/collection.service");
var tooltip_template_service_1 = require("../../common/tooltip-template.service");
var series_component_1 = require("../../chart/series.component");
var series_item_component_1 = require("./series-item.component");
/**
 * A collection of one or more navigator series items.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-stockchart>
 *         <kendo-chart-navigator>
 *             <kendo-chart-navigator-series>
 *                 <kendo-chart-navigator-series-item type="area" [data]="data" field="value" categoryField="date">
 *                 </kendo-chart-navigator-series-item>
 *             </kendo-chart-navigator-series>
 *         </kendo-chart-navigator>
 *     </kendo-stockchart>
 *   `
 * })
 * class AppComponent {
 *   public data: any[] = [];
 *
 *   constructor() {
 *      for (let idx = 0; idx < 100; idx++) {
 *          this.data.push({
 *              date: new Date(2017, 0, idx),
 *              value: Math.random() * 100
 *          });
 *      }
 *   }
 * }
 *
 * ```
 */
var NavigatorSeriesComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorSeriesComponent, _super);
    function NavigatorSeriesComponent(configurationService, collectionService, tooltipTemplateService) {
        var _this = _super.call(this, configurationService, collectionService, tooltipTemplateService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        _this.tooltipTemplateService = tooltipTemplateService;
        return _this;
    }
    NavigatorSeriesComponent.prototype.readTooltipTemplates = function () {
    };
    tslib_1.__decorate([
        core_1.ContentChildren(series_item_component_1.NavigatorSeriesItemComponent),
        tslib_1.__metadata("design:type", core_1.QueryList)
    ], NavigatorSeriesComponent.prototype, "children", void 0);
    NavigatorSeriesComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [collection_service_1.CollectionService],
            selector: 'kendo-chart-navigator-series',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService,
            collection_service_1.CollectionService,
            tooltip_template_service_1.TooltipTemplateService])
    ], NavigatorSeriesComponent);
    return NavigatorSeriesComponent;
}(series_component_1.SeriesComponent));
exports.NavigatorSeriesComponent = NavigatorSeriesComponent;
