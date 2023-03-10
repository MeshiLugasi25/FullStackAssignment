/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesTooltipComponent } from '../../../chart/series-item/tooltip.component';
/**
 * The tooltip configuration of the StockChart navigator series.
 * The StockChart navigator series tooltip is displayed when the `navigator.series.tooltip.visible` option is set to `true`.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NavigatorSeriesTooltipComponent extends SeriesTooltipComponent {
    configurationService: ConfigurationService;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NavigatorSeriesTooltipComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NavigatorSeriesTooltipComponent, "kendo-chart-navigator-series-item-tooltip", never, {}, {}, never, never>;
}

//# sourceMappingURL=tooltip.component.d.ts.map