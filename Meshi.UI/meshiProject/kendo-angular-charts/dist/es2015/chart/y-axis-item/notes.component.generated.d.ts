/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { AxisNoteVisualArgs, NoteLine, NotePosition } from '../../common/property-types';
import { YAxisNotesIcon, YAxisNotesLabel, YAxisNotes } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class YAxisNotesComponentGenerated extends SettingsComponent implements YAxisNotes {
    configurationService: ConfigurationService;
    data: any[];
    line: NoteLine;
    position: NotePosition;
    visual: (e: AxisNoteVisualArgs) => drawing.Element;
    icon: YAxisNotesIcon;
    label: YAxisNotesLabel;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<YAxisNotesComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<YAxisNotesComponentGenerated, never, never, { "data": "data"; "line": "line"; "position": "position"; "visual": "visual"; "icon": "icon"; "label": "label"; }, {}, never>;
}

//# sourceMappingURL=notes.component.generated.d.ts.map