/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { AxisLabelVisualArgs, LabelRotation, Margin, Padding } from '../../common/property-types';
import { AxisDefaultsLabels } from '../../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class AxisDefaultsLabelsComponentGenerated extends SettingsComponent implements AxisDefaultsLabels {
    configurationService: ConfigurationService;
    content: (e: any) => string;
    font: string;
    format: string;
    margin: Margin | number;
    mirror: boolean;
    padding: Padding | number;
    rotation: LabelRotation | number | 'auto';
    skip: number;
    step: number;
    visible: boolean;
    visual: (e: AxisLabelVisualArgs) => drawing.Element;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AxisDefaultsLabelsComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AxisDefaultsLabelsComponentGenerated, never, never, { "content": "content"; "font": "font"; "format": "format"; "margin": "margin"; "mirror": "mirror"; "padding": "padding"; "rotation": "rotation"; "skip": "skip"; "step": "step"; "visible": "visible"; "visual": "visual"; }, {}, never>;
}

//# sourceMappingURL=labels.component.generated.d.ts.map