/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { IntlService } from '@progress/kendo-angular-intl';
import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisItemComponent } from '../../chart/category-axis-item.component';
/**
 * The configuration component of the navigator category axis.
 *
 * @example
 *
 * ```html-no-run
 * <kendo-stockchart>
 *   <kendo-chart-navigator>
 *     <kendo-chart-navigator-category-axis
 *       color="maroon"
 *       [labels]="{color: 'green'}">
 *     </kendo-chart-navigator-category-axis>
 *   </kendo-chart-navigator>
 * </kendo-stockchart>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class NavigatorCategoryAxisComponent extends CategoryAxisItemComponent {
    protected configurationService: ConfigurationService;
    constructor(configurationService: ConfigurationService, intl: IntlService, localeId: string);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NavigatorCategoryAxisComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NavigatorCategoryAxisComponent, "kendo-chart-navigator-category-axis", never, {}, {}, never, never>;
}

//# sourceMappingURL=category-axis.component.d.ts.map