/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { Border, Margin, Padding, SeriesLabelsVisualArgs } from '../../common/property-types';
import { SeriesLabelsFrom, SeriesLabelsTo, SeriesLabels } from '../../common/property-types';
import { SeriesLabelsPosition } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class SeriesLabelsComponentGenerated extends SettingsComponent implements SeriesLabels {
    configurationService: ConfigurationService;
    align: 'circle' | 'column' | 'center' | 'right' | 'left';
    background: string;
    border: Border;
    color: string;
    content: (e: any) => string;
    distance: number;
    font: string;
    format: string;
    margin: Margin | number;
    padding: Padding | number;
    /**
     * The position of the labels.
     */
    position: SeriesLabelsPosition;
    rotation: number;
    visible: boolean;
    visual: (e: SeriesLabelsVisualArgs) => drawing.Element;
    from: SeriesLabelsFrom;
    to: SeriesLabelsTo;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesLabelsComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SeriesLabelsComponentGenerated, never, never, { "align": "align"; "background": "background"; "border": "border"; "color": "color"; "content": "content"; "distance": "distance"; "font": "font"; "format": "format"; "margin": "margin"; "padding": "padding"; "position": "position"; "rotation": "rotation"; "visible": "visible"; "visual": "visual"; "from": "from"; "to": "to"; }, {}, never>;
}

//# sourceMappingURL=labels.component.generated.d.ts.map