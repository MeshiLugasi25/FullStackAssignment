/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../common/configuration.service';
import { SettingsComponent } from '../common/settings.component';
import { Border, Margin } from '../common/property-types';
import { ChartArea } from '../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class ChartAreaComponentGenerated extends SettingsComponent implements ChartArea {
    configurationService: ConfigurationService;
    background: string;
    border: Border;
    height: number;
    margin: Margin | number;
    opacity: number;
    width: number;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ChartAreaComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ChartAreaComponentGenerated, never, never, { "background": "background"; "border": "border"; "height": "height"; "margin": "margin"; "opacity": "opacity"; "width": "width"; }, {}, never>;
}

//# sourceMappingURL=chart-area.component.generated.d.ts.map