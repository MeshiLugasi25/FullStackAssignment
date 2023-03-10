/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { MousewheelSelect } from '../../common/property-types';
import { NavigatorSelect } from '../option-types';
/**
 * Specifies the initially selected range.
 * If no range is specified, the full range of values is rendered.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NavigatorSelectComponent extends SettingsComponent implements NavigatorSelect {
    configurationService: ConfigurationService;
    from: Date;
    to: Date;
    mousewheel: boolean | MousewheelSelect;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NavigatorSelectComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NavigatorSelectComponent, "kendo-chart-navigator-select", never, { "from": "from"; "to": "to"; "mousewheel": "mousewheel"; }, {}, never, never>;
}

//# sourceMappingURL=select.component.d.ts.map