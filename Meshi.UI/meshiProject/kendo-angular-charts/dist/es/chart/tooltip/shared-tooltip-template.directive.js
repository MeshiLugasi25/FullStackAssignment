/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Directive, TemplateRef, Optional } from '@angular/core';
/**
 * A directive that selects a [template]({{ site.data.urls.angular['templatesyntax'] }})
 * within the `<kendo-chart-tooltip>` component for the
 * [shared series tooltip]({% slug tooltips_chart_charts %}#toc-shared-tooltip).
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-tooltip [shared]="true">
 *         <ng-template kendoChartSharedTooltipTemplate let-category="category" let-points="points">
 *             <div> {{ category }} </div>
 *             <div *ngFor="let point of points">
 *                 {{ point.series.name }} : {{ point.value }}
 *             </div>
 *         </ng-template>
 *       </kendo-chart-tooltip>
 *       <kendo-chart-category-axis>
 *         <kendo-chart-category-axis-item [categories]="['A', 'B', 'C']">
 *         </kendo-chart-category-axis-item>
 *       </kendo-chart-category-axis>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item name="A" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *         <kendo-chart-series-item name="B" [data]="[1, 2, 3]">
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
var SharedTooltipTemplateDirective = /** @class */ (function () {
    function SharedTooltipTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    SharedTooltipTemplateDirective = tslib_1.__decorate([
        Directive({
            selector: '[kendoChartSharedTooltipTemplate]'
        }),
        tslib_1.__param(0, Optional()),
        tslib_1.__metadata("design:paramtypes", [TemplateRef])
    ], SharedTooltipTemplateDirective);
    return SharedTooltipTemplateDirective;
}());
export { SharedTooltipTemplateDirective };
