/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { ConfigurationService } from '../common/configuration.service';
import { SettingsComponent } from '../common/settings.component';
import { Border, Overlay, SeriesHighlight, SeriesStack, SeriesType, SeriesVisualArgs } from '../common/property-types';
import { SeriesDefaultsLabels, SeriesDefaultsNotes, SeriesDefaultsTooltip, SeriesDefaults } from '../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class SeriesDefaultsComponentGenerated extends SettingsComponent implements SeriesDefaults {
    configurationService: ConfigurationService;
    border: Border;
    gap: number;
    highlight: SeriesHighlight;
    overlay: Overlay;
    spacing: number;
    stack: boolean | string | SeriesStack;
    type: SeriesType;
    visual: (e: SeriesVisualArgs) => drawing.Element;
    labels: SeriesDefaultsLabels;
    notes: SeriesDefaultsNotes;
    tooltip: SeriesDefaultsTooltip;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesDefaultsComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SeriesDefaultsComponentGenerated, never, never, { "border": "border"; "gap": "gap"; "highlight": "highlight"; "overlay": "overlay"; "spacing": "spacing"; "stack": "stack"; "type": "type"; "visual": "visual"; "labels": "labels"; "notes": "notes"; "tooltip": "tooltip"; }, {}, never>;
}

//# sourceMappingURL=series-defaults.component.generated.d.ts.map