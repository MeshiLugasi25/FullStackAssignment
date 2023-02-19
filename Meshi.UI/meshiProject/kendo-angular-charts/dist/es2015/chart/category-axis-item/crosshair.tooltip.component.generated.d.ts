/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { Border, Padding } from '../../common/property-types';
import { CategoryAxisCrosshairTooltip } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class CategoryAxisCrosshairTooltipComponentGenerated extends SettingsComponent implements CategoryAxisCrosshairTooltip {
    configurationService: ConfigurationService;
    background: string;
    border: Border;
    color: string;
    font: string;
    format: string;
    padding: Padding | number;
    visible: boolean;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CategoryAxisCrosshairTooltipComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CategoryAxisCrosshairTooltipComponentGenerated, never, never, { "background": "background"; "border": "border"; "color": "color"; "font": "font"; "format": "format"; "padding": "padding"; "visible": "visible"; }, {}, never>;
}

//# sourceMappingURL=crosshair.tooltip.component.generated.d.ts.map