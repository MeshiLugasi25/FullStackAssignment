/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { AfterContentChecked } from '@angular/core';
import { ConfigurationService } from '../common/configuration.service';
import { TooltipComponentGenerated } from './tooltip.component.generated';
import { SeriesTooltipTemplateDirective } from './tooltip/series-tooltip-template.directive';
import { SharedTooltipTemplateDirective } from './tooltip/shared-tooltip-template.directive';
import { TooltipTemplateService } from '../common/tooltip-template.service';
/**
 * The configuration options of the Chart series tooltip
 * ([see example]({% slug tooltips_chart_charts %})).
 */
import * as ɵngcc0 from '@angular/core';
export declare class TooltipComponent extends TooltipComponentGenerated implements AfterContentChecked {
    configurationService: ConfigurationService;
    private templateService;
    seriesTooltipTemplate: SeriesTooltipTemplateDirective;
    sharedTooltipTemplate: SharedTooltipTemplateDirective;
    constructor(configurationService: ConfigurationService, templateService: TooltipTemplateService);
    ngAfterContentChecked(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TooltipComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TooltipComponent, "kendo-chart-tooltip", never, {}, {}, ["seriesTooltipTemplate", "sharedTooltipTemplate"], never>;
}

//# sourceMappingURL=tooltip.component.d.ts.map