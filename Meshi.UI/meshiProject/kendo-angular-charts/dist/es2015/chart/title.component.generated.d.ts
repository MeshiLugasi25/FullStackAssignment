/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../common/configuration.service';
import { SettingsComponent } from '../common/settings.component';
import { Border, Margin, Padding } from '../common/property-types';
import { Title } from '../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class TitleComponentGenerated extends SettingsComponent implements Title {
    configurationService: ConfigurationService;
    align: 'center' | 'left' | 'right';
    background: string;
    border: Border;
    color: string;
    font: string;
    margin: Margin | number;
    padding: Padding | number;
    position: 'top' | 'bottom';
    text: string;
    visible: boolean;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TitleComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<TitleComponentGenerated, never, never, { "align": "align"; "background": "background"; "border": "border"; "color": "color"; "font": "font"; "margin": "margin"; "padding": "padding"; "position": "position"; "text": "text"; "visible": "visible"; }, {}, never>;
}

//# sourceMappingURL=title.component.generated.d.ts.map