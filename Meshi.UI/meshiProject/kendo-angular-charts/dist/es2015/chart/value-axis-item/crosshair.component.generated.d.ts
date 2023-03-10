/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { ValueAxisCrosshairTooltip, ValueAxisCrosshair } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class ValueAxisCrosshairComponentGenerated extends SettingsComponent implements ValueAxisCrosshair {
    configurationService: ConfigurationService;
    color: string;
    opacity: number;
    visible: boolean;
    width: number;
    tooltip: ValueAxisCrosshairTooltip;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ValueAxisCrosshairComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ValueAxisCrosshairComponentGenerated, never, never, { "color": "color"; "opacity": "opacity"; "visible": "visible"; "width": "width"; "tooltip": "tooltip"; }, {}, never>;
}

//# sourceMappingURL=crosshair.component.generated.d.ts.map