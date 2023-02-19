/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, QueryList, ContentChildren } from '@angular/core';
import { ConfigurationService } from "../../common/configuration.service";
import { CollectionService } from "../../common/collection.service";
import { TooltipTemplateService } from "../../common/tooltip-template.service";
import { SeriesComponent } from '../../chart/series.component';
import { NavigatorSeriesItemComponent } from './series-item.component';
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
let NavigatorSeriesComponent = class NavigatorSeriesComponent extends SeriesComponent {
    constructor(configurationService, collectionService, tooltipTemplateService) {
        super(configurationService, collectionService, tooltipTemplateService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
        this.tooltipTemplateService = tooltipTemplateService;
    }
    readTooltipTemplates() {
    }
};
tslib_1.__decorate([
    ContentChildren(NavigatorSeriesItemComponent),
    tslib_1.__metadata("design:type", QueryList)
], NavigatorSeriesComponent.prototype, "children", void 0);
NavigatorSeriesComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CollectionService],
        selector: 'kendo-chart-navigator-series',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService,
        CollectionService,
        TooltipTemplateService])
], NavigatorSeriesComponent);
export { NavigatorSeriesComponent };
