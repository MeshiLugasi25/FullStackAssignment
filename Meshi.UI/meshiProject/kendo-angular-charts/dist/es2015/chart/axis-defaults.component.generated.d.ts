/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../common/configuration.service';
import { SettingsComponent } from '../common/settings.component';
import { AxisLine, AxisTicks, GridLines, PlotBand } from '../common/property-types';
import { AxisDefaultsCrosshair, AxisDefaultsLabels, AxisDefaultsTitle, AxisDefaults } from '../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class AxisDefaultsComponentGenerated extends SettingsComponent implements AxisDefaults {
    configurationService: ConfigurationService;
    background: string;
    color: string;
    line: AxisLine;
    majorGridLines: GridLines;
    majorTicks: AxisTicks;
    minorGridLines: GridLines;
    minorTicks: AxisTicks;
    narrowRange: boolean;
    pane: string;
    plotBands: PlotBand[];
    reverse: boolean;
    startAngle: number;
    visible: boolean;
    crosshair: AxisDefaultsCrosshair;
    labels: AxisDefaultsLabels;
    title: AxisDefaultsTitle;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AxisDefaultsComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AxisDefaultsComponentGenerated, never, never, { "background": "background"; "color": "color"; "line": "line"; "majorGridLines": "majorGridLines"; "majorTicks": "majorTicks"; "minorGridLines": "minorGridLines"; "minorTicks": "minorTicks"; "narrowRange": "narrowRange"; "pane": "pane"; "plotBands": "plotBands"; "reverse": "reverse"; "startAngle": "startAngle"; "visible": "visible"; "crosshair": "crosshair"; "labels": "labels"; "title": "title"; }, {}, never>;
}

//# sourceMappingURL=axis-defaults.component.generated.d.ts.map