/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { DashType } from '../../common/property-types';
import { CategoryAxisCrosshairTooltip, CategoryAxisCrosshair } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class CategoryAxisCrosshairComponentGenerated extends SettingsComponent implements CategoryAxisCrosshair {
    configurationService: ConfigurationService;
    color: string;
    dashType: DashType;
    opacity: number;
    visible: boolean;
    width: number;
    tooltip: CategoryAxisCrosshairTooltip;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CategoryAxisCrosshairComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CategoryAxisCrosshairComponentGenerated, never, never, { "color": "color"; "dashType": "dashType"; "opacity": "opacity"; "visible": "visible"; "width": "width"; "tooltip": "tooltip"; }, {}, never>;
}

//# sourceMappingURL=crosshair.component.generated.d.ts.map