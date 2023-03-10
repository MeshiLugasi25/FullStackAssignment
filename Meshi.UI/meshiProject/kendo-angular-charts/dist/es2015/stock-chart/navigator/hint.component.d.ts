/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { NavigatorHint } from '../option-types';
/**
 * The default options of the navigator hint
 * ([see example]({% slug overview_stockchart_charts %}#toc-navigator)).
 */
import * as ɵngcc0 from '@angular/core';
export declare class NavigatorHintComponent extends SettingsComponent implements NavigatorHint {
    configurationService: ConfigurationService;
    content: (e: any) => string;
    format: string;
    visible: boolean;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NavigatorHintComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NavigatorHintComponent, "kendo-chart-navigator-hint", never, { "content": "content"; "format": "format"; "visible": "visible"; }, {}, never, never>;
}

//# sourceMappingURL=hint.component.d.ts.map