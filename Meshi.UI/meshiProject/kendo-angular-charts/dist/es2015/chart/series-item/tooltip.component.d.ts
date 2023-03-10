/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { TemplateRef } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesTooltipComponentGenerated } from '../series-item/tooltip.component.generated';
/**
 * The configuration options of the Chart series tooltip
 * ([see example]({% slug tooltips_chart_charts %})).
 */
import * as ɵngcc0 from '@angular/core';
export declare class SeriesTooltipComponent extends SeriesTooltipComponentGenerated {
    configurationService: ConfigurationService;
    seriesTooltipTemplate: TemplateRef<any>;
    constructor(configurationService: ConfigurationService);
    readonly seriesTooltipTemplateRef: TemplateRef<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesTooltipComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SeriesTooltipComponent, "kendo-chart-series-item-tooltip", never, {}, {}, ["seriesTooltipTemplate"], never>;
}

//# sourceMappingURL=tooltip.component.d.ts.map