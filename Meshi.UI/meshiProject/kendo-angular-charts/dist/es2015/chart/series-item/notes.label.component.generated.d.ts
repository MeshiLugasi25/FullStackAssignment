/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { Border, NoteLabelPosition } from '../../common/property-types';
import { SeriesNotesLabel } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class SeriesNotesLabelComponentGenerated extends SettingsComponent implements SeriesNotesLabel {
    configurationService: ConfigurationService;
    background: string;
    border: Border;
    color: string;
    content: (e: any) => string;
    font: string;
    format: string;
    position: NoteLabelPosition;
    rotation: number;
    visible: boolean;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesNotesLabelComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SeriesNotesLabelComponentGenerated, never, never, { "background": "background"; "border": "border"; "color": "color"; "content": "content"; "font": "font"; "format": "format"; "position": "position"; "rotation": "rotation"; "visible": "visible"; }, {}, never>;
}

//# sourceMappingURL=notes.label.component.generated.d.ts.map