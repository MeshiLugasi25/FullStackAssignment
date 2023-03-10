/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { CollectionService } from '../../common/collection.service';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesItemComponent } from '../../chart/series-item.component';
/**
 * The configuration component of a navigator series item
 * ([see example]({% slug navigator_stockchart_charts %})).
 */
import * as ɵngcc0 from '@angular/core';
export declare class NavigatorSeriesItemComponent extends SeriesItemComponent {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    constructor(configurationService: ConfigurationService, collectionService: CollectionService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NavigatorSeriesItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NavigatorSeriesItemComponent, "kendo-chart-navigator-series-item", never, {}, {}, never, never>;
}

//# sourceMappingURL=series-item.component.d.ts.map