/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../common/configuration.service';
import { SettingsComponent } from '../common/settings.component';
import { Border, LegendLabels, Margin, Padding, LegendMarkers, LegendInactiveItems, LegendItem, Legend, LegendTitle } from '../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class LegendComponentGenerated extends SettingsComponent implements Legend {
    configurationService: ConfigurationService;
    align: 'start' | 'center' | 'end';
    background: string;
    border: Border;
    height: number;
    labels: LegendLabels;
    margin: Margin | number;
    offsetX: number;
    offsetY: number;
    orientation: 'vertical' | 'horizontal';
    padding: Padding | number;
    position: 'top' | 'bottom' | 'left' | 'right' | 'custom';
    reverse: boolean;
    visible: boolean;
    width: number;
    markers: LegendMarkers;
    spacing: number;
    inactiveItems: LegendInactiveItems;
    item: LegendItem;
    title: LegendTitle;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LegendComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<LegendComponentGenerated, never, never, { "align": "align"; "background": "background"; "border": "border"; "height": "height"; "labels": "labels"; "margin": "margin"; "offsetX": "offsetX"; "offsetY": "offsetY"; "orientation": "orientation"; "padding": "padding"; "position": "position"; "reverse": "reverse"; "visible": "visible"; "width": "width"; "markers": "markers"; "spacing": "spacing"; "inactiveItems": "inactiveItems"; "item": "item"; "title": "title"; }, {}, never>;
}

//# sourceMappingURL=legend.component.generated.d.ts.map