/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../common/configuration.service");
var collection_service_1 = require("../common/collection.service");
var tooltip_template_service_1 = require("../common/tooltip-template.service");
var series_component_generated_1 = require("./series.component.generated");
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
var SeriesComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesComponent, _super);
    // Place custom properties here
    function SeriesComponent(configurationService, collectionService, tooltipTemplateService) {
        var _this = _super.call(this, configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        _this.tooltipTemplateService = tooltipTemplateService;
        return _this;
    }
    SeriesComponent.prototype.ngAfterContentChecked = function () {
        this.readTooltipTemplates();
    };
    SeriesComponent.prototype.readTooltipTemplates = function () {
        var templates = this.children.map(function (item) { return item.seriesTooltipTemplateRef; });
        this.tooltipTemplateService.setSeriesTemplates(templates);
    };
    SeriesComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [collection_service_1.CollectionService],
            selector: 'kendo-chart-series',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService,
            collection_service_1.CollectionService,
            tooltip_template_service_1.TooltipTemplateService])
    ], SeriesComponent);
    return SeriesComponent;
}(series_component_generated_1.SeriesComponentGenerated));
exports.SeriesComponent = SeriesComponent;
