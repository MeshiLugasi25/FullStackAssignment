/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../../common/configuration.service';
import { CategoryAxisSelectComponent } from '../../../chart/category-axis-item/select.component';
/**
 * The selected axis range. If set, the axis selection is enabled. The range is index-based and starts from zero.
 * Categories with indexes in the range (`select.from`, `select.to`) will be selected.
 * This means that the last category in the range will not be included in the selection.
 * If the categories are dates, the range has also to be specified with date values.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NavigatorCategoryAxisSelectComponent extends CategoryAxisSelectComponent {
    configurationService: ConfigurationService;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NavigatorCategoryAxisSelectComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NavigatorCategoryAxisSelectComponent, "kendo-chart-navigator-category-axis-select", never, {}, {}, never, never>;
}

//# sourceMappingURL=select.component.d.ts.map