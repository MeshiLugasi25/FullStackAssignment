/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { LegendItemVisualArgs } from '../../common/property-types';
import { LegendItem } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class LegendItemComponentGenerated extends SettingsComponent implements LegendItem {
    configurationService: ConfigurationService;
    cursor: string;
    visual: (e: LegendItemVisualArgs) => drawing.Element;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LegendItemComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<LegendItemComponentGenerated, never, never, { "cursor": "cursor"; "visual": "visual"; }, {}, never>;
}

//# sourceMappingURL=item.component.generated.d.ts.map