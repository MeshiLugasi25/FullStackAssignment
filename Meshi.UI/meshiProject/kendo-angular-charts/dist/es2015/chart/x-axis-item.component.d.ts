/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { IntlService } from '@progress/kendo-angular-intl';
import { CollectionService } from '../common/collection.service';
import { ConfigurationService } from '../common/configuration.service';
import { XAxisItemComponentGenerated } from './x-axis-item.component.generated';
/**
 * The configuration component for an X axis
 * ([see example]({% slug api_charts_xaxiscomponent %})).
 */
import * as ɵngcc0 from '@angular/core';
export declare class XAxisItemComponent extends XAxisItemComponentGenerated {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    protected intl: IntlService;
    categories?: any[];
    constructor(configurationService: ConfigurationService, collectionService: CollectionService, intl: IntlService, localeId: string);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<XAxisItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<XAxisItemComponent, "kendo-chart-x-axis-item", never, { "categories": "categories"; }, {}, never, never>;
}

//# sourceMappingURL=x-axis-item.component.d.ts.map