/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { Border, MarkerType } from '../../common/property-types';
import { XAxisNotesIcon } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class XAxisNotesIconComponentGenerated extends SettingsComponent implements XAxisNotesIcon {
    configurationService: ConfigurationService;
    background: string;
    border: Border;
    size: number;
    type: MarkerType;
    visible: boolean;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<XAxisNotesIconComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<XAxisNotesIconComponentGenerated, never, never, { "background": "background"; "border": "border"; "size": "size"; "type": "type"; "visible": "visible"; }, {}, never>;
}

//# sourceMappingURL=notes.icon.component.generated.d.ts.map