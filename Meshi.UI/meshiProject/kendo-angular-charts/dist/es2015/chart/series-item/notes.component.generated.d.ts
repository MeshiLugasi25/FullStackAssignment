/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { NoteLine, NotePosition, SeriesNoteVisualArgs } from '../../common/property-types';
import { SeriesNotesIcon, SeriesNotesLabel, SeriesNotes } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class SeriesNotesComponentGenerated extends SettingsComponent implements SeriesNotes {
    configurationService: ConfigurationService;
    line: NoteLine;
    position: NotePosition;
    visual: (e: SeriesNoteVisualArgs) => drawing.Element;
    icon: SeriesNotesIcon;
    label: SeriesNotesLabel;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesNotesComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SeriesNotesComponentGenerated, never, never, { "line": "line"; "position": "position"; "visual": "visual"; "icon": "icon"; "label": "label"; }, {}, never>;
}

//# sourceMappingURL=notes.component.generated.d.ts.map