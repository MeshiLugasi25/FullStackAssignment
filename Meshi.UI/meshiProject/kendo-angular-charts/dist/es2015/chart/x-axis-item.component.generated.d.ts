/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { IntlService } from '@progress/kendo-angular-intl';
import { CollectionService } from '../common/collection.service';
import { CollectionItemComponent } from '../common/collection-item.component';
import { ConfigurationService } from '../common/configuration.service';
import { AxisLine, AxisTicks, BaseUnit, GridLines, PlotBand, WeekStartDay } from '../common/property-types';
import { XAxisCrosshair, XAxisLabels, XAxisNotes, XAxisTitle, XAxis } from '../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class XAxisItemComponentGenerated extends CollectionItemComponent implements XAxis {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    axisCrossingValue: any | any[];
    background: string;
    baseUnit: BaseUnit;
    color: string;
    line: AxisLine;
    majorGridLines: GridLines;
    majorTicks: AxisTicks;
    majorUnit: number;
    max: any;
    min: any;
    minorGridLines: GridLines;
    minorTicks: AxisTicks;
    minorUnit: number;
    name: string;
    narrowRange: boolean;
    pane: string;
    plotBands: PlotBand[];
    reverse: boolean;
    startAngle: number;
    type: 'numeric' | 'log' | 'date';
    visible: boolean;
    weekStartDay: WeekStartDay;
    crosshair: XAxisCrosshair;
    labels: XAxisLabels;
    notes: XAxisNotes;
    title: XAxisTitle;
    constructor(configurationService: ConfigurationService, collectionService: CollectionService, intl: IntlService, localeId: string);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<XAxisItemComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<XAxisItemComponentGenerated, never, never, { "axisCrossingValue": "axisCrossingValue"; "background": "background"; "baseUnit": "baseUnit"; "color": "color"; "line": "line"; "majorGridLines": "majorGridLines"; "majorTicks": "majorTicks"; "majorUnit": "majorUnit"; "max": "max"; "min": "min"; "minorGridLines": "minorGridLines"; "minorTicks": "minorTicks"; "minorUnit": "minorUnit"; "name": "name"; "narrowRange": "narrowRange"; "pane": "pane"; "plotBands": "plotBands"; "reverse": "reverse"; "startAngle": "startAngle"; "type": "type"; "visible": "visible"; "weekStartDay": "weekStartDay"; "crosshair": "crosshair"; "labels": "labels"; "notes": "notes"; "title": "title"; }, {}, never>;
}

//# sourceMappingURL=x-axis-item.component.generated.d.ts.map