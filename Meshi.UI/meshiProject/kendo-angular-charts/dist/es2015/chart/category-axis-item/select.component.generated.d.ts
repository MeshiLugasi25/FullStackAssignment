/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { MousewheelSelect } from '../../common/property-types';
import { CategoryAxisSelect } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class CategoryAxisSelectComponentGenerated extends SettingsComponent implements CategoryAxisSelect {
    configurationService: ConfigurationService;
    from: any;
    max: any;
    min: any;
    mousewheel: boolean | MousewheelSelect;
    to: any;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CategoryAxisSelectComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CategoryAxisSelectComponentGenerated, never, never, { "from": "from"; "max": "max"; "min": "min"; "mousewheel": "mousewheel"; "to": "to"; }, {}, never>;
}

//# sourceMappingURL=select.component.generated.d.ts.map