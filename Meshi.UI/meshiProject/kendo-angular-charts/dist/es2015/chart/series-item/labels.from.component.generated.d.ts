/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { Border, Margin, Padding } from '../../common/property-types';
import { SeriesLabelsFrom } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class SeriesLabelsFromComponentGenerated extends SettingsComponent implements SeriesLabelsFrom {
    configurationService: ConfigurationService;
    background: string;
    border: Border;
    color: string;
    content: (e: any) => string;
    font: string;
    format: string;
    margin: Margin | number;
    padding: Padding | number;
    position: 'center' | 'insideBase' | 'insideEnd' | 'outsideEnd';
    visible: boolean;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesLabelsFromComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SeriesLabelsFromComponentGenerated, never, never, { "background": "background"; "border": "border"; "color": "color"; "content": "content"; "font": "font"; "format": "format"; "margin": "margin"; "padding": "padding"; "position": "position"; "visible": "visible"; }, {}, never>;
}

//# sourceMappingURL=labels.from.component.generated.d.ts.map