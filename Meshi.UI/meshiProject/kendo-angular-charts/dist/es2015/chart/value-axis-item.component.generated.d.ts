/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { CollectionService } from '../common/collection.service';
import { CollectionItemComponent } from '../common/collection-item.component';
import { ConfigurationService } from '../common/configuration.service';
import { AxisLine, AxisTicks, GridLines, PlotBand } from '../common/property-types';
import { ValueAxisCrosshair, ValueAxisLabels, ValueAxisNotes, ValueAxisTitle, ValueAxis } from '../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class ValueAxisItemComponentGenerated extends CollectionItemComponent implements ValueAxis {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    axisCrossingValue: any | any[];
    background: string;
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
    type: 'numeric' | 'log';
    visible: boolean;
    crosshair: ValueAxisCrosshair;
    labels: ValueAxisLabels;
    notes: ValueAxisNotes;
    title: ValueAxisTitle;
    constructor(configurationService: ConfigurationService, collectionService: CollectionService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ValueAxisItemComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ValueAxisItemComponentGenerated, never, never, { "axisCrossingValue": "axisCrossingValue"; "background": "background"; "color": "color"; "line": "line"; "majorGridLines": "majorGridLines"; "majorTicks": "majorTicks"; "majorUnit": "majorUnit"; "max": "max"; "min": "min"; "minorGridLines": "minorGridLines"; "minorTicks": "minorTicks"; "minorUnit": "minorUnit"; "name": "name"; "narrowRange": "narrowRange"; "pane": "pane"; "plotBands": "plotBands"; "reverse": "reverse"; "type": "type"; "visible": "visible"; "crosshair": "crosshair"; "labels": "labels"; "notes": "notes"; "title": "title"; }, {}, never>;
}

//# sourceMappingURL=value-axis-item.component.generated.d.ts.map