/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { IntlService } from '@progress/kendo-angular-intl';
import { CollectionService } from '../common/collection.service';
import { ConfigurationService } from '../common/configuration.service';
import { CategoryAxisRangeLabels } from '../common/property-types';
import { CategoryAxisItemComponentGenerated } from './category-axis-item.component.generated';
/**
 * The configuration component for a category axis ([see example]({% slug axes_chart_charts %})).
 */
import * as ɵngcc0 from '@angular/core';
export declare class CategoryAxisItemComponent extends CategoryAxisItemComponentGenerated {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    rangeLabels: CategoryAxisRangeLabels;
    constructor(configurationService: ConfigurationService, collectionService: CollectionService, intl: IntlService, localeId: string);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CategoryAxisItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CategoryAxisItemComponent, "kendo-chart-category-axis-item", never, { "rangeLabels": "rangeLabels"; }, {}, never, never>;
}

//# sourceMappingURL=category-axis-item.component.d.ts.map