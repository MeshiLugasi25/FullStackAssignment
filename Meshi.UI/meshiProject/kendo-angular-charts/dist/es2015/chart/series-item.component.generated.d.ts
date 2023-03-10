/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { drawing } from '@progress/kendo-drawing';
import { CollectionItemComponent } from '../common/collection-item.component';
import { CollectionService } from '../common/collection.service';
import { ConfigurationService } from '../common/configuration.service';
import { Border, BulletTarget, DashType, LabelConnectors, LineStyle, Margin, NegativeBubbleValues, Overlay, Series, SeriesErrorBars, SeriesExtremes, SeriesHighlight, SeriesLabels, SeriesLine, SeriesMarkers, SeriesMean, SeriesMedian, SeriesNotes, SeriesOutliers, SeriesStack, SeriesTooltip, SeriesType, SeriesVisualArgs, SeriesWhiskers } from '../common/property-types';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class SeriesItemComponentGenerated extends CollectionItemComponent implements Series {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    aggregate: any;
    autoFit: boolean;
    axis: string;
    border: Border;
    categoryAxis: string;
    categoryField: string;
    closeField: string;
    color: any;
    colorField: string;
    connectors: LabelConnectors;
    currentField: string;
    dashType: DashType;
    data: any[];
    downColor: string;
    downColorField: string;
    dynamicHeight: boolean;
    dynamicSlope: boolean;
    errorHighField: string;
    errorLowField: string;
    explodeField: string;
    field: string;
    fromField: string;
    gap: number;
    highField: string;
    holeSize: number;
    line: SeriesLine;
    lowField: string;
    lowerField: string;
    margin: Margin | number;
    maxSize: number;
    mean: SeriesMean;
    meanField: string;
    median: SeriesMedian;
    medianField: string;
    minSize: number;
    missingValues: 'gap' | 'interpolate' | 'zero';
    name: string;
    neckRatio: number;
    negativeColor: string;
    negativeValues: NegativeBubbleValues;
    noteTextField: string;
    opacity: number;
    openField: string;
    outliersField: string;
    overlay: Overlay;
    padding: number;
    q1Field: string;
    q3Field: string;
    segmentSpacing: number;
    size: number;
    sizeField: string;
    spacing: number;
    stack: boolean | string | SeriesStack;
    startAngle: number;
    style: LineStyle;
    summaryField: string;
    target: BulletTarget;
    toField: string;
    type: SeriesType;
    upperField: string;
    visible: boolean;
    visibleInLegend: boolean;
    visibleInLegendField: string;
    visual: (e: SeriesVisualArgs) => drawing.Element;
    width: number;
    whiskers: SeriesWhiskers;
    xAxis: string;
    xErrorHighField: string;
    xErrorLowField: string;
    xField: string;
    yAxis: string;
    yErrorHighField: string;
    yErrorLowField: string;
    yField: string;
    zIndex: number;
    errorBars: SeriesErrorBars;
    extremes: SeriesExtremes;
    highlight: SeriesHighlight;
    labels: SeriesLabels;
    markers: SeriesMarkers;
    notes: SeriesNotes;
    outliers: SeriesOutliers;
    tooltip: SeriesTooltip;
    constructor(configurationService: ConfigurationService, collectionService: CollectionService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesItemComponentGenerated, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SeriesItemComponentGenerated, never, never, { "aggregate": "aggregate"; "autoFit": "autoFit"; "axis": "axis"; "border": "border"; "categoryAxis": "categoryAxis"; "categoryField": "categoryField"; "closeField": "closeField"; "color": "color"; "colorField": "colorField"; "connectors": "connectors"; "currentField": "currentField"; "dashType": "dashType"; "data": "data"; "downColor": "downColor"; "downColorField": "downColorField"; "dynamicHeight": "dynamicHeight"; "dynamicSlope": "dynamicSlope"; "errorHighField": "errorHighField"; "errorLowField": "errorLowField"; "explodeField": "explodeField"; "field": "field"; "fromField": "fromField"; "gap": "gap"; "highField": "highField"; "holeSize": "holeSize"; "line": "line"; "lowField": "lowField"; "lowerField": "lowerField"; "margin": "margin"; "maxSize": "maxSize"; "mean": "mean"; "meanField": "meanField"; "median": "median"; "medianField": "medianField"; "minSize": "minSize"; "missingValues": "missingValues"; "name": "name"; "neckRatio": "neckRatio"; "negativeColor": "negativeColor"; "negativeValues": "negativeValues"; "noteTextField": "noteTextField"; "opacity": "opacity"; "openField": "openField"; "outliersField": "outliersField"; "overlay": "overlay"; "padding": "padding"; "q1Field": "q1Field"; "q3Field": "q3Field"; "segmentSpacing": "segmentSpacing"; "size": "size"; "sizeField": "sizeField"; "spacing": "spacing"; "stack": "stack"; "startAngle": "startAngle"; "style": "style"; "summaryField": "summaryField"; "target": "target"; "toField": "toField"; "type": "type"; "upperField": "upperField"; "visible": "visible"; "visibleInLegend": "visibleInLegend"; "visibleInLegendField": "visibleInLegendField"; "visual": "visual"; "width": "width"; "whiskers": "whiskers"; "xAxis": "xAxis"; "xErrorHighField": "xErrorHighField"; "xErrorLowField": "xErrorLowField"; "xField": "xField"; "yAxis": "yAxis"; "yErrorHighField": "yErrorHighField"; "yErrorLowField": "yErrorLowField"; "yField": "yField"; "zIndex": "zIndex"; "errorBars": "errorBars"; "extremes": "extremes"; "highlight": "highlight"; "labels": "labels"; "markers": "markers"; "notes": "notes"; "outliers": "outliers"; "tooltip": "tooltip"; }, {}, never>;
}

//# sourceMappingURL=series-item.component.generated.d.ts.map