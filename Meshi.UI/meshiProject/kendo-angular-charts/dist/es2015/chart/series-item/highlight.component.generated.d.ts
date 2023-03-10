/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { Border, HighlightLine, HighlightVisualArgs, HighlightToggleArgs, MarkersHighlight } from '../../common/property-types';
import { SeriesHighlight } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class SeriesHighlightComponentGenerated extends SettingsComponent implements SeriesHighlight {
    configurationService: ConfigurationService;
    border: Border;
    color: string;
    line: HighlightLine;
    markers: MarkersHighlight;
    opacity: number;
    toggle: (e: HighlightToggleArgs) => void;
    visible: boolean;
    visual: (e: HighlightVisualArgs) => drawing.Element;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesHighlightComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SeriesHighlightComponentGenerated, never, never, { "border": "border"; "color": "color"; "line": "line"; "markers": "markers"; "opacity": "opacity"; "toggle": "toggle"; "visible": "visible"; "visual": "visual"; }, {}, never>;
}

//# sourceMappingURL=highlight.component.generated.d.ts.map