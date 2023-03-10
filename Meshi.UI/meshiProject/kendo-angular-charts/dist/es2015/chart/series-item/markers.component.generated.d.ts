/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { Border, MarkersVisualArgs, MarkerType } from '../../common/property-types';
import { SeriesMarkers } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class SeriesMarkersComponentGenerated extends SettingsComponent implements SeriesMarkers {
    configurationService: ConfigurationService;
    background: string;
    border: Border;
    rotation: number;
    size: number;
    type: MarkerType;
    visible: boolean;
    visual: (e: MarkersVisualArgs) => drawing.Element;
    from: SeriesMarkers;
    to: SeriesMarkers;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesMarkersComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SeriesMarkersComponentGenerated, never, never, { "background": "background"; "border": "border"; "rotation": "rotation"; "size": "size"; "type": "type"; "visible": "visible"; "visual": "visual"; "from": "from"; "to": "to"; }, {}, never>;
}

//# sourceMappingURL=markers.component.generated.d.ts.map