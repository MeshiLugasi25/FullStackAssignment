/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { LegendInactiveItemsComponentGenerated } from '../legend/inactive-items.component.generated';
/**
 * The configuration of the inactive Chart legend items.
 *
 * @example
 *
 * ```html-no-run
 * <kendo-chart>
 *   <kendo-chart-legend>
 *      <kendo-chart-legend-inactive-items [labels]="{color: 'pink'}"></kendo-chart-legend-inactive-items>
 *   </kendo-chart-legend>
 * </kendo-chart>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class LegendInactiveItemsComponent extends LegendInactiveItemsComponentGenerated {
    configurationService: ConfigurationService;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LegendInactiveItemsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LegendInactiveItemsComponent, "kendo-chart-legend-inactive-items", never, {}, {}, never, never>;
}

//# sourceMappingURL=inactive-items.component.d.ts.map