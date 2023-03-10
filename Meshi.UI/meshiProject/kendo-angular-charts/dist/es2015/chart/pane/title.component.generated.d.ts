/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { Border, Margin } from '../../common/property-types';
import { PanesTitle } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class PanesTitleComponentGenerated extends SettingsComponent implements PanesTitle {
    configurationService: ConfigurationService;
    background: string;
    border: Border;
    color: string;
    font: string;
    margin: Margin | number;
    position: 'left' | 'right' | 'center';
    text: string;
    visible: boolean;
    visual: (e: any) => drawing.Element;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PanesTitleComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<PanesTitleComponentGenerated, never, never, { "background": "background"; "border": "border"; "color": "color"; "font": "font"; "margin": "margin"; "position": "position"; "text": "text"; "visible": "visible"; "visual": "visual"; }, {}, never>;
}

//# sourceMappingURL=title.component.generated.d.ts.map