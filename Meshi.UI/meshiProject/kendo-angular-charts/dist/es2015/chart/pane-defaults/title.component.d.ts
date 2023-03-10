/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { Border, Margin, PaneDefaultsTitle } from '../../common/property-types';
/**
 * The configuration of the pane default title.
 */
import * as ɵngcc0 from '@angular/core';
export declare class PaneDefaultsTitleComponent extends SettingsComponent implements PaneDefaultsTitle {
    configurationService: ConfigurationService;
    background: string;
    border: Border;
    color: string;
    font: string;
    margin: Margin | number;
    position: 'left' | 'right' | 'center';
    visible: boolean;
    visual: (e: any) => drawing.Element;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaneDefaultsTitleComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PaneDefaultsTitleComponent, "kendo-chart-pane-defaults-title", never, { "background": "background"; "border": "border"; "color": "color"; "font": "font"; "margin": "margin"; "position": "position"; "visible": "visible"; "visual": "visual"; }, {}, never, never>;
}

//# sourceMappingURL=title.component.d.ts.map