/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { LegendItemComponentGenerated } from '../legend/item.component.generated';
/**
 * The configuration of the Chart legend item.
 *
 * @example
 *
 * ```html-no-run
 * <kendo-chart>
 *   <kendo-chart-legend>
 *      <kendo-chart-legend-item cursor="crosshair"></kendo-chart-legend-item>
 *   </kendo-chart-legend>
 * </kendo-chart>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class LegendItemComponent extends LegendItemComponentGenerated {
    configurationService: ConfigurationService;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LegendItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LegendItemComponent, "kendo-chart-legend-item", never, {}, {}, never, never>;
}

//# sourceMappingURL=item.component.d.ts.map