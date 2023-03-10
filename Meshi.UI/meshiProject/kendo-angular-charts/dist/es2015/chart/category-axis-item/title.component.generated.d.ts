/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { AxisTitlePosition, Border, Margin, Padding, TitleVisualArgs } from '../../common/property-types';
import { CategoryAxisTitle } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class CategoryAxisTitleComponentGenerated extends SettingsComponent implements CategoryAxisTitle {
    configurationService: ConfigurationService;
    background: string;
    border: Border;
    color: string;
    font: string;
    margin: Margin | number;
    padding: Padding | number;
    position: AxisTitlePosition;
    rotation: number;
    text: string;
    visible: boolean;
    visual: (e: TitleVisualArgs) => drawing.Element;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CategoryAxisTitleComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CategoryAxisTitleComponentGenerated, never, never, { "background": "background"; "border": "border"; "color": "color"; "font": "font"; "margin": "margin"; "padding": "padding"; "position": "position"; "rotation": "rotation"; "text": "text"; "visible": "visible"; "visual": "visual"; }, {}, never>;
}

//# sourceMappingURL=title.component.generated.d.ts.map