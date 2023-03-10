/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { NoteLine, SeriesNoteVisualArgs } from '../../common/property-types';
import { SeriesDefaultsNotesIcon, SeriesDefaultsNotesLabel, SeriesDefaultsNotes } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class SeriesDefaultsNotesComponentGenerated extends SettingsComponent implements SeriesDefaultsNotes {
    configurationService: ConfigurationService;
    line: NoteLine;
    visual: (e: SeriesNoteVisualArgs) => drawing.Element;
    icon: SeriesDefaultsNotesIcon;
    label: SeriesDefaultsNotesLabel;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesDefaultsNotesComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SeriesDefaultsNotesComponentGenerated, never, never, { "line": "line"; "visual": "visual"; "icon": "icon"; "label": "label"; }, {}, never>;
}

//# sourceMappingURL=notes.component.generated.d.ts.map