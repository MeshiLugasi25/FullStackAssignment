/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ConfigurationService } from '../common/configuration.service';
import { CollectionService } from '../common/collection.service';
import { TooltipTemplateService } from '../common/tooltip-template.service';
import { SeriesComponentGenerated } from './series.component.generated';
/**
 * A collection of one or more series items.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item type="line" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 * }
 *
 * ```
 */
let SeriesComponent = class SeriesComponent extends SeriesComponentGenerated {
    // Place custom properties here
    constructor(configurationService, collectionService, tooltipTemplateService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
        this.tooltipTemplateService = tooltipTemplateService;
    }
    ngAfterContentChecked() {
        this.readTooltipTemplates();
    }
    readTooltipTemplates() {
        const templates = this.children.map((item) => item.seriesTooltipTemplateRef);
        this.tooltipTemplateService.setSeriesTemplates(templates);
    }
};
SeriesComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CollectionService],
        selector: 'kendo-chart-series',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService,
        CollectionService,
        TooltipTemplateService])
], SeriesComponent);
export { SeriesComponent };
