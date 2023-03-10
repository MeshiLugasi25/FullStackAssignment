/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { AfterContentChecked } from '@angular/core';
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
import * as ɵngcc0 from '@angular/core';
export declare class SeriesComponent extends SeriesComponentGenerated implements AfterContentChecked {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    protected tooltipTemplateService: TooltipTemplateService;
    constructor(configurationService: ConfigurationService, collectionService: CollectionService, tooltipTemplateService: TooltipTemplateService);
    ngAfterContentChecked(): void;
    protected readTooltipTemplates(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SeriesComponent, "kendo-chart-series", never, {}, {}, never, never>;
}

//# sourceMappingURL=series.component.d.ts.map