/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { Border, MarkerType } from '../../common/property-types';
import { SeriesOutliers } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class SeriesOutliersComponentGenerated extends SettingsComponent implements SeriesOutliers {
    configurationService: ConfigurationService;
    background: string;
    border: Border;
    rotation: number;
    size: number;
    type: MarkerType;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesOutliersComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SeriesOutliersComponentGenerated, never, never, { "background": "background"; "border": "border"; "rotation": "rotation"; "size": "size"; "type": "type"; }, {}, never>;
}

//# sourceMappingURL=outliers.component.generated.d.ts.map