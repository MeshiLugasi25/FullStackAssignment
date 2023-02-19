/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { CollectionService } from '../common/collection.service';
import { CollectionItemComponent } from '../common/collection-item.component';
import { ConfigurationService } from '../common/configuration.service';
import { Border, Margin, Padding } from '../common/property-types';
import { PanesTitle, Pane } from '../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class PaneComponentGenerated extends CollectionItemComponent implements Pane {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    background: string;
    border: Border;
    clip: boolean;
    height: number;
    margin: Margin | number;
    name: string;
    padding: Padding | number;
    title: string | PanesTitle;
    constructor(configurationService: ConfigurationService, collectionService: CollectionService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaneComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<PaneComponentGenerated, never, never, { "background": "background"; "border": "border"; "clip": "clip"; "height": "height"; "margin": "margin"; "name": "name"; "padding": "padding"; "title": "title"; }, {}, never>;
}

//# sourceMappingURL=pane.component.generated.d.ts.map