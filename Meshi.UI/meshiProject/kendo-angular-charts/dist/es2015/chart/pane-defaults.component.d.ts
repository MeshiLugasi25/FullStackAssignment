/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../common/configuration.service';
import { SettingsComponent } from '../common/settings.component';
import { Border, Margin, Padding, PaneDefaults, PaneDefaultsTitle } from '../common/property-types';
/**
 * The default options for all chart panes,
 * ([see example]({% slug panes_chart_charts %}#toc-default-panes-configuration)).
 */
import * as ɵngcc0 from '@angular/core';
export declare class PaneDefaultsComponent extends SettingsComponent implements PaneDefaults {
    configurationService: ConfigurationService;
    background: string;
    border: Border;
    clip: boolean;
    height: number;
    margin: Margin | number;
    padding: Padding | number;
    title: PaneDefaultsTitle;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaneDefaultsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PaneDefaultsComponent, "kendo-chart-pane-defaults", never, { "background": "background"; "border": "border"; "clip": "clip"; "height": "height"; "margin": "margin"; "padding": "padding"; "title": "title"; }, {}, never, never>;
}

//# sourceMappingURL=pane-defaults.component.d.ts.map