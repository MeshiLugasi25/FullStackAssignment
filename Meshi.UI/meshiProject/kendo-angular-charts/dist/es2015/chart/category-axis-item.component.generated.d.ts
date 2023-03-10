/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { IntlService } from '@progress/kendo-angular-intl';
import { CollectionService } from '../common/collection.service';
import { CollectionItemComponent } from '../common/collection-item.component';
import { ConfigurationService } from '../common/configuration.service';
import { AutoBaseUnitSteps, AxisLine, AxisTicks, CategoryBaseUnit, GridLines, PlotBand, WeekStartDay } from '../common/property-types';
import { CategoryAxisCrosshair, CategoryAxisLabels, CategoryAxisNotes, CategoryAxisSelect, CategoryAxisTitle, CategoryAxis } from '../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class CategoryAxisItemComponentGenerated extends CollectionItemComponent implements CategoryAxis {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    autoBaseUnitSteps: AutoBaseUnitSteps;
    axisCrossingValue: any | any[];
    background: string;
    baseUnit: CategoryBaseUnit;
    baseUnitStep: number | 'auto';
    categories: any[];
    color: string;
    justified: boolean;
    line: AxisLine;
    majorGridLines: GridLines;
    majorTicks: AxisTicks;
    max: any;
    maxDateGroups: number;
    maxDivisions: number;
    min: any;
    minorGridLines: GridLines;
    minorTicks: AxisTicks;
    name: string;
    pane: string;
    plotBands: PlotBand[];
    reverse: boolean;
    roundToBaseUnit: boolean;
    startAngle: number;
    type: 'category' | 'date';
    visible: boolean;
    weekStartDay: WeekStartDay;
    crosshair: CategoryAxisCrosshair;
    labels: CategoryAxisLabels;
    notes: CategoryAxisNotes;
    select: CategoryAxisSelect;
    title: CategoryAxisTitle;
    constructor(configurationService: ConfigurationService, collectionService: CollectionService, intl: IntlService, localeId: string);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CategoryAxisItemComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CategoryAxisItemComponentGenerated, never, never, { "autoBaseUnitSteps": "autoBaseUnitSteps"; "axisCrossingValue": "axisCrossingValue"; "background": "background"; "baseUnit": "baseUnit"; "baseUnitStep": "baseUnitStep"; "categories": "categories"; "color": "color"; "justified": "justified"; "line": "line"; "majorGridLines": "majorGridLines"; "majorTicks": "majorTicks"; "max": "max"; "maxDateGroups": "maxDateGroups"; "maxDivisions": "maxDivisions"; "min": "min"; "minorGridLines": "minorGridLines"; "minorTicks": "minorTicks"; "name": "name"; "pane": "pane"; "plotBands": "plotBands"; "reverse": "reverse"; "roundToBaseUnit": "roundToBaseUnit"; "startAngle": "startAngle"; "type": "type"; "visible": "visible"; "weekStartDay": "weekStartDay"; "crosshair": "crosshair"; "labels": "labels"; "notes": "notes"; "select": "select"; "title": "title"; }, {}, never>;
}

//# sourceMappingURL=category-axis-item.component.generated.d.ts.map