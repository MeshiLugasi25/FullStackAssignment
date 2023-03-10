/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../common/configuration.service';
import { SettingsComponent } from '../common/settings.component';
import { Border, Margin, Padding } from '../common/property-types';
import { PlotArea } from '../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class PlotAreaComponentGenerated extends SettingsComponent implements PlotArea {
    configurationService: ConfigurationService;
    background: string;
    border: Border;
    margin: Margin | number;
    opacity: number;
    padding: Padding | number;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PlotAreaComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<PlotAreaComponentGenerated, never, never, { "background": "background"; "border": "border"; "margin": "margin"; "opacity": "opacity"; "padding": "padding"; }, {}, never>;
}

//# sourceMappingURL=plot-area.component.generated.d.ts.map