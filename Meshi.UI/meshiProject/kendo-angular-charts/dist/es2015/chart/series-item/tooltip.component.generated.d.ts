/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { Border, Padding } from '../../common/property-types';
import { SeriesTooltip } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class SeriesTooltipComponentGenerated extends SettingsComponent implements SeriesTooltip {
    configurationService: ConfigurationService;
    background: string;
    border: Border;
    color: string;
    font: string;
    format: string;
    padding: Padding | number;
    visible: boolean;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesTooltipComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SeriesTooltipComponentGenerated, never, never, { "background": "background"; "border": "border"; "color": "color"; "font": "font"; "format": "format"; "padding": "padding"; "visible": "visible"; }, {}, never>;
}

//# sourceMappingURL=tooltip.component.generated.d.ts.map