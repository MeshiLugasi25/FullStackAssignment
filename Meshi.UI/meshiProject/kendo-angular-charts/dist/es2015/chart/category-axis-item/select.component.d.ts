/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisSelectComponentGenerated } from '../category-axis-item/select.component.generated';
/**
 * The selected axis range. If set, the axis selection is enabled. The range is index-based and starts from zero.
 * Categories with indexes in the
 * ([`select.from`]({% slug api_charts_categoryaxisselectcomponent %}#toc-from)
 * &mdash;[`select.to`]({% slug api_charts_categoryaxisselectcomponent %}#toc-to)) range will be selected.
 * This means that the last category in the range will not be included in the selection.
 * If the categories are dates, the range has to be also specified with date values.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CategoryAxisSelectComponent extends CategoryAxisSelectComponentGenerated {
    configurationService: ConfigurationService;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CategoryAxisSelectComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CategoryAxisSelectComponent, "kendo-chart-category-axis-item-select", never, {}, {}, never, never>;
}

//# sourceMappingURL=select.component.d.ts.map