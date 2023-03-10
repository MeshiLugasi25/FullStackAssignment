/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisRangeLabels } from '../../common/property-types';
import { CategoryAxisLabelsComponent } from './labels.component';
/**
 * The configuration of the axis date range labels ([see example]({% slug labels_chart_charts %})).
 */
import * as ɵngcc0 from '@angular/core';
export declare class CategoryAxisRangeLabelsComponent extends CategoryAxisLabelsComponent implements CategoryAxisRangeLabels {
    configurationService: ConfigurationService;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CategoryAxisRangeLabelsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CategoryAxisRangeLabelsComponent, "kendo-chart-category-axis-item-range-labels", never, {}, {}, never, never>;
}

//# sourceMappingURL=range-labels.component.d.ts.map