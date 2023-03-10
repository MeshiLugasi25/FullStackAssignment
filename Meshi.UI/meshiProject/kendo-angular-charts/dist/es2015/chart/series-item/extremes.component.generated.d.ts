/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { Border, MarkerType } from '../../common/property-types';
import { SeriesExtremes } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class SeriesExtremesComponentGenerated extends SettingsComponent implements SeriesExtremes {
    configurationService: ConfigurationService;
    background: string;
    border: Border;
    rotation: number;
    size: number;
    type: MarkerType;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesExtremesComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SeriesExtremesComponentGenerated, never, never, { "background": "background"; "border": "border"; "rotation": "rotation"; "size": "size"; "type": "type"; }, {}, never>;
}

//# sourceMappingURL=extremes.component.generated.d.ts.map