/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { AxisLabelsPosition, AxisLabelVisualArgs, Border, DateFormats, LabelRotation } from '../../common/property-types';
import { Margin, Padding } from '../../common/property-types';
import { XAxisLabels } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class XAxisLabelsComponentGenerated extends SettingsComponent implements XAxisLabels {
    configurationService: ConfigurationService;
    background: string;
    border: Border;
    color: string;
    content: (e: any) => string;
    culture: string;
    dateFormats: DateFormats;
    font: string;
    format: string;
    margin: Margin | number;
    mirror: boolean;
    padding: Padding | number;
    position: AxisLabelsPosition;
    rotation: LabelRotation | number | 'auto';
    skip: number;
    step: number;
    visible: boolean;
    visual: (e: AxisLabelVisualArgs) => drawing.Element;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<XAxisLabelsComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<XAxisLabelsComponentGenerated, never, never, { "background": "background"; "border": "border"; "color": "color"; "content": "content"; "culture": "culture"; "dateFormats": "dateFormats"; "font": "font"; "format": "format"; "margin": "margin"; "mirror": "mirror"; "padding": "padding"; "position": "position"; "rotation": "rotation"; "skip": "skip"; "step": "step"; "visible": "visible"; "visual": "visual"; }, {}, never>;
}

//# sourceMappingURL=labels.component.generated.d.ts.map