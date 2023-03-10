/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { XAxisCrosshairTooltip, XAxisCrosshair } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class XAxisCrosshairComponentGenerated extends SettingsComponent implements XAxisCrosshair {
    configurationService: ConfigurationService;
    color: string;
    opacity: number;
    visible: boolean;
    width: number;
    tooltip: XAxisCrosshairTooltip;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<XAxisCrosshairComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<XAxisCrosshairComponentGenerated, never, never, { "color": "color"; "opacity": "opacity"; "visible": "visible"; "width": "width"; "tooltip": "tooltip"; }, {}, never>;
}

//# sourceMappingURL=crosshair.component.generated.d.ts.map