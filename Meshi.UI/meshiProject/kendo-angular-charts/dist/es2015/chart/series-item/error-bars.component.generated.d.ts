/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { ErrorBarLine, ErrorBarsVisualArgs } from '../../common/property-types';
import { SeriesErrorBars } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class SeriesErrorBarsComponentGenerated extends SettingsComponent implements SeriesErrorBars {
    configurationService: ConfigurationService;
    color: string;
    endCaps: boolean;
    line: ErrorBarLine;
    value: string;
    visual: (e: ErrorBarsVisualArgs) => drawing.Element;
    xValue: string;
    yValue: string;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesErrorBarsComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SeriesErrorBarsComponentGenerated, never, never, { "color": "color"; "endCaps": "endCaps"; "line": "line"; "value": "value"; "visual": "visual"; "xValue": "xValue"; "yValue": "yValue"; }, {}, never>;
}

//# sourceMappingURL=error-bars.component.generated.d.ts.map