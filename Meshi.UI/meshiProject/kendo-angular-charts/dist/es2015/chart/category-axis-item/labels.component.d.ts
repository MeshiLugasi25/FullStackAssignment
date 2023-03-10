/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
import { AxisLabelVisualArgs, Border, DateFormats, LabelRotation } from '../../common/property-types';
import { AxisLabelsPosition } from '../../common/property-types';
import { Margin, Padding } from '../../common/property-types';
import { CategoryAxisLabels } from '../../common/property-types';
/**
 * The configuration of the axis labels ([see example]({% slug labels_chart_charts %})).
 */
import * as ɵngcc0 from '@angular/core';
export declare class CategoryAxisLabelsComponent extends SettingsComponent implements CategoryAxisLabels {
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CategoryAxisLabelsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CategoryAxisLabelsComponent, "kendo-chart-category-axis-item-labels", never, { "background": "background"; "border": "border"; "color": "color"; "content": "content"; "culture": "culture"; "dateFormats": "dateFormats"; "font": "font"; "format": "format"; "margin": "margin"; "mirror": "mirror"; "padding": "padding"; "position": "position"; "rotation": "rotation"; "skip": "skip"; "step": "step"; "visible": "visible"; "visual": "visual"; }, {}, never, never>;
}

//# sourceMappingURL=labels.component.d.ts.map