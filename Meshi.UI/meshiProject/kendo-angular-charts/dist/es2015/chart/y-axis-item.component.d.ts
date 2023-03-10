/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { CollectionService } from '../common/collection.service';
import { ConfigurationService } from '../common/configuration.service';
import { YAxisItemComponentGenerated } from './y-axis-item.component.generated';
/**
 * The configuration component for the Y axis
 * ([see example]({% slug api_charts_yaxiscomponent %})).
 */
import * as ɵngcc0 from '@angular/core';
export declare class YAxisItemComponent extends YAxisItemComponentGenerated {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    categories?: any[];
    constructor(configurationService: ConfigurationService, collectionService: CollectionService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<YAxisItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<YAxisItemComponent, "kendo-chart-y-axis-item", never, { "categories": "categories"; }, {}, never, never>;
}

//# sourceMappingURL=y-axis-item.component.d.ts.map