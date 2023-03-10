/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../common/configuration.service';
import { SettingsComponent } from '../common/settings.component';
import { DragAction, MousewheelZoom } from '../common/property-types';
import { Zoomable } from '../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class ZoomableComponentGenerated extends SettingsComponent implements Zoomable {
    configurationService: ConfigurationService;
    mousewheel: boolean | MousewheelZoom;
    selection: boolean | DragAction;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ZoomableComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ZoomableComponentGenerated, never, never, { "mousewheel": "mousewheel"; "selection": "selection"; }, {}, never>;
}

//# sourceMappingURL=zoomable.component.generated.d.ts.map