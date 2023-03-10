/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { __decorate, __metadata, __param } from 'tslib';
import { EventEmitter, Input, Output, Injectable, NgZone, Directive, Optional, TemplateRef, SimpleChange, ContentChild, Component, ChangeDetectionStrategy, ElementRef, ViewChild, ViewChildren, QueryList, isDevMode, ContentChildren, ChangeDetectorRef, Renderer2, Inject, LOCALE_ID, InjectionToken, NgModule } from '@angular/core';
import { BehaviorSubject, Subject, combineLatest } from 'rxjs';
import { auditTime, tap } from 'rxjs/operators';
import { validatePackage } from '@progress/kendo-licensing';
import { chartBaseTheme, InstanceObserver, DateCategoryAxis, DateValueAxis, DomEventsBuilder, Chart, StockChart, Sparkline } from '@progress/kendo-charts';
import { isDocumentAvailable, ResizeSensorModule } from '@progress/kendo-angular-common';
export { ResizeSensorComponent } from '@progress/kendo-angular-common';
import { PopupService, POPUP_CONTAINER, PopupModule } from '@progress/kendo-angular-popup';
export { PopupComponent } from '@progress/kendo-angular-popup';
import { LocalizationService, L10N_PREFIX } from '@progress/kendo-angular-l10n';
import { IntlService } from '@progress/kendo-angular-intl';
import { exportImage, exportSVG } from '@progress/kendo-drawing';
import { CommonModule } from '@angular/common';

/**
 * @hidden
 */
const packageMetadata = {
    name: '@progress/kendo-angular-charts',
    productName: 'Kendo UI for Angular',
    productCodes: ['KENDOUIANGULAR', 'KENDOUICOMPLETE'],
    publishDate: 1638166273,
    version: '',
    licensingDocsUrl: 'https://www.telerik.com/kendo-angular-ui/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-warning'
};

/**
 * @hidden
 */
class ChartComponentGenerated {
    constructor(configurationService) {
        this.configurationService = configurationService;
        /**
         * Fires when the user clicks an axis label ([see example]({% slug overview_chart_charts %}#toc-events)).
         */
        this.axisLabelClick = new EventEmitter();
        /**
         * Fires as long as the user is dragging the Chart with the mouse or through swipe gestures.
         */
        this.drag = new EventEmitter();
        /**
         * Fires when the user stops dragging the Chart.
         */
        this.dragEnd = new EventEmitter();
        /**
         * Fires when the user starts dragging the Chart.
         */
        this.dragStart = new EventEmitter();
        /**
         * Fires when the user hovers over a legend item ([see example]({% slug overview_chart_charts %}#toc-events)).
         */
        this.legendItemHover = new EventEmitter();
        /**
         * Fires when the cursor leaves a legend item.
         */
        this.legendItemLeave = new EventEmitter();
        /**
         * Fires when the user clicks a note.
         */
        this.noteClick = new EventEmitter();
        /**
         * Fires when the user hovers over a note.
         */
        this.noteHover = new EventEmitter();
        /**
         * Fires when the cursor leaves a note.
         */
        this.noteLeave = new EventEmitter();
        /**
         * Fires when a pane is rendered because the Chart:
         * * Is rendered.
         * * Performs panning or zooming.
         * * Is exported with different options.
         * The event is used to render custom visuals in the panes.
         */
        this.paneRender = new EventEmitter();
        /**
         * Fires when the user clicks the plot area ([see example]({% slug overview_chart_charts %}#toc-events)).
         * The `click` event is triggered by the `tap` and `contextmenu` events.
         * To distinguish between the original events, inspect the `e.originalEvent.type` field.
         */
        this.plotAreaClick = new EventEmitter();
        /**
         * Fires when the user hovers the plot area ([see example]({% slug overview_chart_charts %}#toc-events)).
         */
        this.plotAreaHover = new EventEmitter();
        /**
         * Fires when the cursor leaves the plot area.
         */
        this.plotAreaLeave = new EventEmitter();
        /**
         * Fires when the Chart is ready to render on screen ([see example]({% slug overview_chart_charts %}#toc-events)).
         * For example, you can use it to remove loading indicators.
         * Any changes made to the options are ignored.
         */
        this.render = new EventEmitter();
        /**
         * Fires when the user modifies the selection.
         *
         * The range units are:
         * - Generic axis&mdash;Category index (0-based).
         * - Date axis&mdash;Date instance.
         */
        this.select = new EventEmitter();
        /**
         * Fires when the user completes the modification of the selection.
         *
         * The range units are:
         * - Generic axis&mdash;Category index (0-based).
         * - Date axis&mdash;Date instance.
         */
        this.selectEnd = new EventEmitter();
        /**
         * Fires when the user starts modifying the axis selection.
         *
         * The range units are:
         * - Generic axis&mdash;Category index (0-based).
         * - Date axis&mdash;Date instance.
         */
        this.selectStart = new EventEmitter();
        /**
         * Fires when the user clicks the Chart series.
         *
         * The `click` event will be triggered by the `tap` and `contextmenu` events ([see example]({% slug overview_chart_charts %}#toc-events)).
         * To distinguish between the original events, inspect the `e.originalEvent.type` field.
         */
        this.seriesClick = new EventEmitter();
        /**
         * Fires when the user hovers the Chart series ([see example]({% slug overview_chart_charts %}#toc-events)).
         */
        this.seriesHover = new EventEmitter();
        /**
         * Fires when the cursor enters a series.
         */
        this.seriesOver = new EventEmitter();
        /**
         * Fires when the cursor leaves a series.
         */
        this.seriesLeave = new EventEmitter();
        /**
         * Fires as long as the user is zooming the Chart by using the mousewheel operation.
         */
        this.zoom = new EventEmitter();
        /**
         * Fires when the user stops zooming the Chart.
         */
        this.zoomEnd = new EventEmitter();
        /**
         * Fires when the user uses the mousewheel to zoom the Chart.
         */
        this.zoomStart = new EventEmitter();
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponentGenerated.prototype, "pannable", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ChartComponentGenerated.prototype, "renderAs", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], ChartComponentGenerated.prototype, "seriesColors", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponentGenerated.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ChartComponentGenerated.prototype, "transitions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponentGenerated.prototype, "zoomable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponentGenerated.prototype, "axisDefaults", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponentGenerated.prototype, "categoryAxis", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponentGenerated.prototype, "chartArea", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponentGenerated.prototype, "legend", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], ChartComponentGenerated.prototype, "panes", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponentGenerated.prototype, "paneDefaults", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponentGenerated.prototype, "plotArea", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], ChartComponentGenerated.prototype, "series", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponentGenerated.prototype, "seriesDefaults", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponentGenerated.prototype, "tooltip", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponentGenerated.prototype, "valueAxis", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponentGenerated.prototype, "xAxis", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponentGenerated.prototype, "yAxis", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "axisLabelClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "drag", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "dragEnd", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "dragStart", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "legendItemHover", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "legendItemLeave", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "noteClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "noteHover", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "noteLeave", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "paneRender", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "plotAreaClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "plotAreaHover", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "plotAreaLeave", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "render", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "select", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "selectEnd", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "selectStart", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "seriesClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "seriesHover", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "seriesOver", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "seriesLeave", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "zoom", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "zoomEnd", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponentGenerated.prototype, "zoomStart", void 0);

/**
 * @hidden
 */
const THROTTLE_MS = 1000 / 60;
/**
 * @hidden
 */
class Change {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
/**
 * @hidden
 */
let ConfigurationService = class ConfigurationService {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.store = {};
        this.source = new BehaviorSubject({});
        this.initSource();
    }
    initSource() {
        this.onFastChange$ = this.source.asObservable();
        this.onChange$ = this.onFastChange$.pipe(auditTime(THROTTLE_MS));
    }
    push(store) {
        this.store = store;
        this.next();
    }
    notify(change) {
        this.set(change.key, change.value);
        this.next();
    }
    set(field, value) {
        let store = this.store;
        const parts = field.split('.');
        let key = parts.shift();
        while (parts.length > 0) {
            store = store[key] = store[key] || {};
            key = parts.shift();
        }
        store[key] = value;
    }
    next() {
        this.ngZone.runOutsideAngular(() => {
            this.source.next(this.store);
        });
    }
};
ConfigurationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [NgZone])
], ConfigurationService);

/**
 * @hidden
 */
class BaseEvent {
    /**
     * @hidden
     */
    constructor(sender) {
        this.sender = sender;
    }
}

/**
 * @hidden
 */
class PreventableEvent extends BaseEvent {
    constructor() {
        super(...arguments);
        this.prevented = false;
    }
    /**
     * Prevents the default action for a specified event.
     * In this way, the source component suppresses
     * the built-in behavior that follows the event.
     */
    preventDefault() {
        this.prevented = true;
    }
    /**
     * Returns `true` if the event was prevented
     * by any of its subscribers.
     *
     * @returns `true` if the default action was prevented.
     * Otherwise, returns `false`.
     */
    isDefaultPrevented() {
        return this.prevented;
    }
}

/**
 * @hidden
 */
class LegendEvent extends PreventableEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.series = e.series;
        this.seriesIndex = e.seriesIndex;
        this.pointIndex = e.pointIndex;
        this.text = e.text;
    }
}

/**
 * Arguments for the `legendItemClick` event.
 */
class LegendItemClickEvent extends LegendEvent {
    /**
     * If called, the series visibility is not toggled as a result of clicking the legend item.
     */
    preventDefault() {
        super.preventDefault();
    }
}

/**
 * Arguments for the `axisLabelClick` event.
 */
class AxisLabelClickEvent extends BaseEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.axis = e.axis;
        this.dataItem = e.dataItem;
        this.index = e.index;
        this.text = e.text;
        this.value = e.value;
    }
}

/**
 * Arguments for the `drag` event.
 */
class DragEvent extends PreventableEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.axisRanges = e.axisRanges;
        this.originalEvent = e.originalEvent;
    }
}

/**
 * Arguments for the `dragEnd` event.
 */
class DragEndEvent extends BaseEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.axisRanges = e.axisRanges;
        this.originalEvent = e.originalEvent;
    }
}

/**
 * Arguments for the `dragStart` event.
 */
class DragStartEvent extends PreventableEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.axisRanges = e.axisRanges;
        this.originalEvent = e.originalEvent;
    }
}

/**
 * Arguments for the `legendItemHover` event.
 */
class LegendItemHoverEvent extends LegendEvent {
    /**
     * If called, the series highlight is not shown as a result of hovering over the legend item.
     */
    preventDefault() {
        super.preventDefault();
    }
}

/* tslint:disable:no-empty */
/**
 * Arguments for the `legendItemLeave` event.
 */
class LegendItemLeaveEvent extends LegendEvent {
    /**
     * @hidden
     */
    preventDefault() {
    }
    /**
     * @hidden
     */
    isDefaultPrevented() {
        return false;
    }
}

/**
 * @hidden
 */
class NoteEvent extends BaseEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.category = e.category;
        this.dataItem = e.dataItem;
        this.series = e.series;
        this.value = e.value;
        this.visual = e.visual;
    }
}

/**
 * Arguments for the `noteClick` event.
 */
class NoteClickEvent extends NoteEvent {
}

/**
 * Arguments for the `noteHover` event.
 */
class NoteHoverEvent extends NoteEvent {
}

/**
 * Arguments for the `noteLeave` event.
 */
class NoteLeaveEvent extends NoteEvent {
}

/**
 * Arguments for the `paneRender` event.
 */
class PaneRenderEvent extends BaseEvent {
    /**
     * @hidden
     */
    constructor(args, sender) {
        super(sender);
        Object.assign(this, args);
    }
}

/**
 * Arguments for the `plotAreaClick` event.
 */
class PlotAreaClickEvent extends BaseEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.category = e.category;
        this.originalEvent = e.originalEvent;
        this.value = e.value;
        this.x = e.x;
        this.y = e.y;
    }
}

/**
 * Arguments for the `plotAreaHover` event.
 */
class PlotAreaHoverEvent extends BaseEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.category = e.category;
        this.originalEvent = e.originalEvent;
        this.value = e.value;
        this.x = e.x;
        this.y = e.y;
    }
}

class PlotAreaLeaveEvent extends BaseEvent {
}

/**
 * Arguments for the `render` event.
 */
class RenderEvent extends BaseEvent {
    /**
     * @hidden
     */
    constructor(_e, sender) {
        super(sender);
    }
}

/**
 * Arguments for the `select` event.
 */
class SelectEvent extends PreventableEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.axis = e.axis;
        this.from = e.from;
        this.to = e.to;
    }
}

/**
 * Arguments for the `selectEnd` event.
 */
class SelectEndEvent extends BaseEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.axis = e.axis;
        this.from = e.from;
        this.to = e.to;
    }
}

/**
 * Arguments for the `selectStart` event.
 */
class SelectStartEvent extends PreventableEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.axis = e.axis;
        this.from = e.from;
        this.to = e.to;
    }
}

/**
 * Arguments for the `seriesClick` event.
 */
class SeriesClickEvent extends BaseEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.category = e.category;
        this.dataItem = e.dataItem;
        this.originalEvent = e.originalEvent;
        this.percentage = e.percentage;
        this.point = e.point;
        this.series = e.series;
        this.stackValue = e.stackValue;
        this.value = e.value;
    }
}

/**
 * @hidden
 */
class SeriesEvent extends PreventableEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.category = e.category;
        this.dataItem = e.dataItem;
        this.originalEvent = e.originalEvent;
        this.percentage = e.percentage;
        this.point = e.point;
        this.series = e.series;
        this.stackValue = e.stackValue;
        this.value = e.value;
    }
}

/**
 * Arguments for the `seriesHover` event.
 */
class SeriesHoverEvent extends SeriesEvent {
}

/**
 * Arguments for the `seriesOver` event.
 */
class SeriesOverEvent extends SeriesEvent {
}

/**
 * Arguments for the `seriesLeave` event.
 */
class SeriesLeaveEvent extends SeriesEvent {
}

/**
 * Arguments for the `zoom` event.
 */
class ZoomEvent extends PreventableEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.axisRanges = e.axisRanges;
        this.delta = e.delta;
        this.originalEvent = e.originalEvent;
    }
}

/**
 * Arguments for the `zoomEnd` event.
 */
class ZoomEndEvent extends BaseEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.axisRanges = e.axisRanges;
        this.originalEvent = e.originalEvent;
    }
}

/**
 * Arguments for the `zoomStart` event.
 */
class ZoomStartEvent extends PreventableEvent {
    /**
     * @hidden
     */
    constructor(e, sender) {
        super(sender);
        this.axisRanges = e.axisRanges;
        this.originalEvent = e.originalEvent;
    }
}

const EVENT_MAP = {
    axisLabelClick: AxisLabelClickEvent,
    drag: DragEvent,
    dragEnd: DragEndEvent,
    dragStart: DragStartEvent,
    legendItemHover: LegendItemHoverEvent,
    legendItemLeave: LegendItemLeaveEvent,
    noteClick: NoteClickEvent,
    noteHover: NoteHoverEvent,
    noteLeave: NoteLeaveEvent,
    paneRender: PaneRenderEvent,
    plotAreaClick: PlotAreaClickEvent,
    plotAreaHover: PlotAreaHoverEvent,
    plotAreaLeave: PlotAreaLeaveEvent,
    render: RenderEvent,
    select: SelectEvent,
    selectEnd: SelectEndEvent,
    selectStart: SelectStartEvent,
    seriesClick: SeriesClickEvent,
    seriesHover: SeriesHoverEvent,
    seriesOver: SeriesOverEvent,
    seriesLeave: SeriesLeaveEvent,
    zoom: ZoomEvent,
    zoomEnd: ZoomEndEvent,
    zoomStart: ZoomStartEvent
};
/**
 * @hidden
 */
class InstanceEventService {
    create(name, args, sender) {
        if (EVENT_MAP[name]) {
            return new EVENT_MAP[name](args, sender);
        }
    }
}

/**
 * A directive which selects a [template]({{ site.data.urls.angular['templatesyntax'] }})
 * within the `<kendo-chart>` component for the
 * [Donut center template]({% slug donut_seriestypes_charts %}).
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart style="height: 450px;">
 *       <ng-template kendoChartDonutCenterTemplate>
 *         <h3>22.5%</h3>
 *         of which renewables
 *       </ng-template>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item
 *             type="donut" [data]="data"
 *             categoryField="kind" field="share">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *       <kendo-chart-legend [visible]="false"></kendo-chart-legend>
 *     </kendo-chart>
 *   `
 * })
 * export class AppComponent {
 *   public data: any[] = [{
 *     kind: 'Hydroelectric', share: 0.175
 *   }, {
 *     kind: 'Nuclear', share: 0.238
 *   }, {
 *     kind: 'Coal', share: 0.118
 *   }, {
 *     kind: 'Solar', share: 0.052
 *   }, {
 *     kind: 'Wind', share: 0.225
 *   }, {
 *     kind: 'Other', share: 0.192
 *   }];
 * }
 *
 * ```
 */
let DonutCenterTemplateDirective = class DonutCenterTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
DonutCenterTemplateDirective = __decorate([
    Directive({
        selector: '[kendoChartDonutCenterTemplate]'
    }),
    __param(0, Optional()),
    __metadata("design:paramtypes", [TemplateRef])
], DonutCenterTemplateDirective);

/**
 * @hidden
 */
class ItemChange {
    constructor(sender, options) {
        this.sender = sender;
        this.options = options;
    }
}
/**
 * @hidden
 */
let CollectionService = class CollectionService {
    constructor() {
        this.source = new Subject();
        this.onItemChange$ = this.source.asObservable();
    }
    notify(change) {
        this.source.next(change);
    }
};
CollectionService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], CollectionService);

/**
 * @hidden
 */
function copyChanges(changes, options) {
    for (const propertyName in changes) {
        if (!changes.hasOwnProperty(propertyName)) {
            continue;
        }
        const value = changes[propertyName].currentValue;
        if (value === undefined) {
            delete options[propertyName];
        }
        else {
            options[propertyName] = value;
        }
    }
}

/**
 * @hidden
 */
function toSimpleChanges(changes) {
    const result = {};
    for (const propertyName in changes) {
        if (!changes.hasOwnProperty(propertyName)) {
            continue;
        }
        result[propertyName] = new SimpleChange(null, changes[propertyName], false);
    }
    return result;
}

/**
 * @hidden
 */
class CollectionItemComponent {
    constructor(configurationService, collectionService) {
        this.configurationService = configurationService;
        this.collectionService = collectionService;
        this.options = {};
        this.subscription = configurationService.onFastChange$.subscribe(store => {
            this.options = store;
            this.notify();
        });
    }
    ngOnChanges(changes) {
        const store = this.configurationService.store;
        copyChanges(changes, store);
        this.configurationService.push(store);
    }
    /**
     * Updates the component fields with the specified values and refreshes the Chart.
     *
     * Use this method when the configuration values cannot be set through the template.
     *
     * @example
     * ```ts-no-run
     * item.notifyChanges({ visible: true });
     * ```
     *
     * @param changes An object containing the updated input fields.
     */
    notifyChanges(changes) {
        this.ngOnChanges(toSimpleChanges(changes));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    notify() {
        if (!this.collectionService) {
            return;
        }
        this.collectionService.notify(new ItemChange(this, this.options));
    }
}

/**
 * @hidden
 */
class SeriesItemComponentGenerated extends CollectionItemComponent {
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "aggregate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesItemComponentGenerated.prototype, "autoFit", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "axis", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "categoryAxis", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "categoryField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "closeField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "colorField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "connectors", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "currentField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "dashType", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], SeriesItemComponentGenerated.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "downColor", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "downColorField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesItemComponentGenerated.prototype, "dynamicHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesItemComponentGenerated.prototype, "dynamicSlope", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "errorHighField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "errorLowField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "explodeField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "field", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "fromField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesItemComponentGenerated.prototype, "gap", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "highField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesItemComponentGenerated.prototype, "holeSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "line", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "lowField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "lowerField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesItemComponentGenerated.prototype, "maxSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "mean", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "meanField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "median", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "medianField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesItemComponentGenerated.prototype, "minSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "missingValues", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesItemComponentGenerated.prototype, "neckRatio", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "negativeColor", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "negativeValues", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "noteTextField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesItemComponentGenerated.prototype, "opacity", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "openField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "outliersField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "overlay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesItemComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "q1Field", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "q3Field", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesItemComponentGenerated.prototype, "segmentSpacing", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesItemComponentGenerated.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "sizeField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesItemComponentGenerated.prototype, "spacing", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "stack", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesItemComponentGenerated.prototype, "startAngle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "style", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "summaryField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "target", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "toField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "upperField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesItemComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesItemComponentGenerated.prototype, "visibleInLegend", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "visibleInLegendField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesItemComponentGenerated.prototype, "visual", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesItemComponentGenerated.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "whiskers", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "xAxis", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "xErrorHighField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "xErrorLowField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "xField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "yAxis", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "yErrorHighField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "yErrorLowField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesItemComponentGenerated.prototype, "yField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesItemComponentGenerated.prototype, "zIndex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "errorBars", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "extremes", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "highlight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "labels", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "markers", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "notes", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "outliers", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesItemComponentGenerated.prototype, "tooltip", void 0);

/**
 * @hidden
 */
class SettingsComponent {
    constructor(configKey, configurationService) {
        this.configKey = configKey;
        this.configurationService = configurationService;
        this.store = {};
        if (configKey === undefined) {
            throw new Error('Configuration key not set');
        }
    }
    ngOnDestroy() {
        this.store = undefined;
        this.notify();
    }
    ngOnChanges(changes) {
        copyChanges(changes, this.store);
        this.notify();
    }
    /**
     * Updates the component fields with the specified values and refreshes the Chart.
     *
     * Use this method when the configuration values cannot be set through the template.
     *
     * @example
     * ```ts-no-run
     * item.notifyChanges({ visible: true });
     * ```
     *
     * @param changes An object containing the updated input fields.
     */
    notifyChanges(changes) {
        this.ngOnChanges(toSimpleChanges(changes));
    }
    markAsVisible() {
        this.store.visible = true;
        this.notify();
    }
    notify() {
        this.configurationService.notify(new Change(this.configKey, this.store));
    }
}

/**
 * @hidden
 */
class SeriesTooltipComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('tooltip', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesTooltipComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesTooltipComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesTooltipComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesTooltipComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesTooltipComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesTooltipComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesTooltipComponentGenerated.prototype, "visible", void 0);

/**
 * The configuration options of the Chart series tooltip
 * ([see example]({% slug tooltips_chart_charts %})).
 */
let SeriesTooltipComponent = class SeriesTooltipComponent extends SeriesTooltipComponentGenerated {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
    get seriesTooltipTemplateRef() {
        return this.seriesTooltipTemplate;
    }
};
__decorate([
    ContentChild(TemplateRef, { static: false }),
    __metadata("design:type", TemplateRef)
], SeriesTooltipComponent.prototype, "seriesTooltipTemplate", void 0);
SeriesTooltipComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-tooltip',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesTooltipComponent);

const toggle = (flag) => flag === undefined ? false : !flag;
/**
 * The configuration component for a series item.
 */
let SeriesItemComponent = class SeriesItemComponent extends SeriesItemComponentGenerated {
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    /**
     * Toggles the series visibility and updates the parent Chart
     * without animated transitions.
     */
    toggleVisibility() {
        this.options.visible = toggle(this.options.visible);
        this.notify();
    }
    /**
     * Toggles the visibility of a point with the given index.
     * Applicable for the Pie, Donut, and Funnel series.
     *
     * @param pointIndex - The zero-based index of the point to toggle.
     */
    togglePointVisibility(pointIndex) {
        const pv = this.options.pointVisibility = this.options.pointVisibility || {};
        pv[pointIndex] = toggle(pv[pointIndex]);
        this.notify();
    }
    get seriesTooltipTemplateRef() {
        if (this.seriesTooltip) {
            return this.seriesTooltip.seriesTooltipTemplateRef;
        }
    }
};
__decorate([
    ContentChild(SeriesTooltipComponent, { static: false }),
    __metadata("design:type", SeriesTooltipComponent)
], SeriesItemComponent.prototype, "seriesTooltip", void 0);
SeriesItemComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [ConfigurationService],
        selector: 'kendo-chart-series-item',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        CollectionService])
], SeriesItemComponent);

/**
 * Fallback theme in case the Theme Service fails
 * to read the variables from the main theme.
 *
 * @hidden
 */
const chartDefaultTheme = () => Object.assign({}, chartBaseTheme(), {
    axisDefaults: {
        crosshair: {
            color: 'rgba(0, 0, 0, 0.5)'
        },
        labels: {
            color: 'rgb(101, 101, 101)',
            font: '12px serif'
        },
        line: {
            color: 'rgba(0, 0, 0, 0.08)'
        },
        majorGridLines: {
            color: 'rgba(0, 0, 0, 0.08)'
        },
        minorGridLines: {
            color: 'rgba(0, 0, 0, 0.04)'
        },
        notes: {
            icon: {
                background: 'rgba(0, 0, 0, 0.5)',
                border: {
                    color: 'rgba(0, 0, 0, 0.5)'
                }
            },
            line: {
                color: 'rgba(0, 0, 0, 0.5)'
            },
            label: {
                font: '14px serif'
            }
        },
        title: {
            color: 'rgb(101, 101, 101)',
            font: '14px serif'
        }
    },
    chartArea: {
        background: 'rgb(255, 255, 255)'
    },
    legend: {
        inactiveItems: {
            labels: {
                color: 'rgba(102, 102, 102, 0.5)'
            },
            markers: {
                color: 'rgba(102, 102, 102, 0.5)'
            }
        },
        labels: {
            color: 'rgb(101, 101, 101)',
            font: '14px serif'
        }
    },
    seriesDefaults: {
        boxPlot: {
            downColor: 'rgba(0, 0, 0, 0.08)',
            mean: {
                color: 'rgb(246, 246, 246)'
            },
            median: {
                color: 'rgb(246, 246, 246)'
            },
            whiskers: {
                color: 'rgb(255, 99, 88)'
            }
        },
        bullet: {
            target: {
                color: 'rgb(101, 101, 101)'
            }
        },
        candlestick: {
            downColor: 'rgb(101, 101, 101)',
            line: {
                color: 'rgb(101, 101, 101)'
            }
        },
        errorBars: {
            color: 'rgba(0, 0, 0, 0.5)'
        },
        horizontalWaterfall: {
            line: {
                color: 'rgba(0, 0, 0, 0.08)'
            }
        },
        icon: {
            border: {
                color: 'rgba(0, 0, 0, 0.08)'
            }
        },
        labels: {
            background: 'rgb(255, 255, 255)',
            color: 'rgb(101, 101, 101)',
            opacity: 0.8,
            font: '12px serif'
        },
        notes: {
            icon: {
                background: 'rgba(0, 0, 0, 0.5)',
                border: {
                    color: 'rgba(0, 0, 0, 0.5)'
                }
            },
            line: {
                color: 'rgba(0, 0, 0, 0.5)'
            },
            label: {
                font: '14px serif'
            }
        },
        overlay: {
            gradient: "none"
        },
        verticalBoxPlot: {
            downColor: 'rgba(0, 0, 0, 0.08)',
            mean: {
                color: 'rgb(246, 246, 246)'
            },
            median: {
                color: 'rgb(246, 246, 246)'
            },
            whiskers: {
                color: 'rgb(255, 99, 88)'
            }
        },
        verticalBullet: {
            target: {
                color: 'rgb(101, 101, 101)'
            }
        },
        waterfall: {
            line: {
                color: 'rgba(0, 0, 0, 0.08)'
            }
        },
        area: {
            opacity: 0.8
        }
    },
    title: {
        color: 'rgb(101, 101, 101)',
        font: '16px serif'
    },
    seriesColors: [
        'rgb(255, 99, 88)',
        'rgb(255, 210, 70)',
        'rgb(120, 210, 55)',
        'rgb(40, 180, 200)',
        'rgb(45, 115, 245)',
        'rgb(170, 70, 190)'
    ]
});

const font = (style) => `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
const computedBackgroundColor = (element) => window.getComputedStyle(element).backgroundColor;
const letterPos = (letter) => letter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
const seriesPos = (name) => {
    const alpha = name.match(/series-([a-z])$/);
    if (alpha !== null) {
        return letterPos(alpha[1]);
    }
    const num = name.split('--series-')[1];
    return parseInt(num, 10) - 1;
};
const SERIES_COLORS = 30;
const seriesTemplate = () => {
    let template = `
      <div class="k-var--series-a"></div>
      <div class="k-var--series-b"></div>
      <div class="k-var--series-c"></div>
      <div class="k-var--series-d"></div>
      <div class="k-var--series-e"></div>
      <div class="k-var--series-f"></div>
  `;
    for (let i = 0; i < SERIES_COLORS; i++) {
        template += `
      <div class="k-var--series-${i + 1}"></div>`;
    }
    return template;
};
const template = () => `
    <div class="k-var--accent"></div>
    <div class="k-var--accent-contrast"></div>
    <div class="k-var--base"></div>
    <div class="k-var--background"></div>

    <div class="k-var--normal-background"></div>
    <div class="k-var--normal-text-color"></div>
    <div class="k-var--hover-background"></div>
    <div class="k-var--hover-text-color"></div>
    <div class="k-var--selected-background"></div>
    <div class="k-var--selected-text-color"></div>
    <div class="k-var--chart-error-bars-background"></div>
    <div class="k-var--chart-notes-background"></div>
    <div class="k-var--chart-notes-border"></div>
    <div class="k-var--chart-notes-lines"></div>
    <div class="k-var--chart-crosshair-background"></div>

    <div class="k-var--chart-inactive"></div>
    <div class="k-var--chart-major-lines"></div>
    <div class="k-var--chart-minor-lines"></div>
    <div class="k-var--chart-area-opacity"></div>
    <div class="k-var--chart-area-inactive-opacity"></div>
    <div class="k-var--chart-line-inactive-opacity"></div>

    <div class="k-widget k-chart">
        <div class="k-var--chart-font"></div>
        <div class="k-var--chart-title-font"></div>
        <div class="k-var--chart-pane-title-font"></div>
        <div class="k-var--chart-label-font"></div>
    </div>

    <div class="k-var--series-unset"></div>
    <div class="k-var--series">
      ${seriesTemplate()}
    </div>
`;
/**
 * @hidden
 */
let ThemeService = class ThemeService extends ConfigurationService {
    constructor(ngZone) {
        super(ngZone);
        this.loaded = false;
    }
    loadTheme() {
        if (this.loaded || !isDocumentAvailable()) {
            return;
        }
        if (!this.readTheme()) {
            this.readDefaultTheme();
        }
        this.loaded = true;
        this.next();
    }
    readTheme() {
        this.createElement();
        const available = this.queryColor('accent') !==
            this.queryColor('accent-contrast');
        try {
            if (available) {
                this.push(chartBaseTheme());
                this.setColors();
                this.setFonts();
                this.setSeriesColors();
            }
        }
        finally {
            this.destroyElement();
        }
        return available;
    }
    readDefaultTheme() {
        this.push(chartDefaultTheme());
    }
    createElement() {
        const container = this.element = document.createElement('div');
        container.style.display = 'none';
        container.innerHTML = template();
        document.body.appendChild(container);
    }
    destroyElement() {
        if (this.element) {
            document.body.removeChild(this.element);
            this.element = undefined;
        }
    }
    setStyle(key, value) {
        this.set(key, value);
    }
    setColors() {
        this.mapColor('axisDefaults.crosshair.color', 'chart-crosshair-background');
        this.mapColor('axisDefaults.labels.color', 'normal-text-color');
        this.mapColor('axisDefaults.line.color', 'chart-major-lines');
        this.mapColor('axisDefaults.majorGridLines.color', 'chart-major-lines');
        this.mapColor('axisDefaults.minorGridLines.color', 'chart-minor-lines');
        this.mapColor('axisDefaults.notes.icon.background', 'chart-notes-background');
        this.mapColor('axisDefaults.notes.icon.border.color', 'chart-notes-border');
        this.mapColor('axisDefaults.notes.line.color', 'chart-notes-lines');
        this.mapColor('axisDefaults.title.color', 'normal-text-color');
        this.mapColor('chartArea.background', 'background');
        this.mapColor('legend.inactiveItems.labels.color', 'chart-inactive');
        this.mapColor('legend.inactiveItems.markers.color', 'chart-inactive');
        this.mapColor('legend.labels.color', 'normal-text-color');
        this.mapColor('seriesDefaults.boxPlot.downColor', 'chart-major-lines');
        this.mapColor('seriesDefaults.boxPlot.mean.color', 'base');
        this.mapColor('seriesDefaults.boxPlot.median.color', 'base');
        this.mapColor('seriesDefaults.boxPlot.whiskers.color', 'accent');
        this.mapColor('seriesDefaults.bullet.target.color', 'normal-text-color');
        this.mapColor('seriesDefaults.candlestick.downColor', 'normal-text-color');
        this.mapColor('seriesDefaults.candlestick.line.color', 'normal-text-color');
        this.mapColor('seriesDefaults.errorBars.color', 'chart-error-bars-background');
        this.mapColor('seriesDefaults.horizontalWaterfall.line.color', 'chart-major-lines');
        this.mapColor('seriesDefaults.icon.border.color', 'chart-major-lines');
        this.mapColor('seriesDefaults.labels.background', 'background');
        this.mapColor('seriesDefaults.labels.color', 'normal-text-color');
        this.mapColor('seriesDefaults.notes.icon.background', 'chart-notes-background');
        this.mapColor('seriesDefaults.notes.icon.border.color', 'chart-notes-border');
        this.mapColor('seriesDefaults.notes.line.color', 'chart-notes-lines');
        this.mapColor('seriesDefaults.verticalBoxPlot.downColor', 'chart-major-lines');
        this.mapColor('seriesDefaults.verticalBoxPlot.mean.color', 'base');
        this.mapColor('seriesDefaults.verticalBoxPlot.median.color', 'base');
        this.mapColor('seriesDefaults.verticalBoxPlot.whiskers.color', 'accent');
        this.mapColor('seriesDefaults.verticalBullet.target.color', 'normal-text-color');
        this.mapColor('seriesDefaults.waterfall.line.color', 'chart-major-lines');
        this.mapColor('title.color', 'normal-text-color');
        const opacity = parseFloat(this.queryStyle('chart-area-opacity').opacity);
        if (!isNaN(opacity)) {
            this.setStyle('seriesDefaults.area.opacity', opacity);
            this.setStyle('seriesDefaults.radarArea.opacity', opacity);
            this.setStyle('seriesDefaults.verticalArea.opacity', opacity);
            this.setStyle('seriesDefaults.labels.opacity', opacity);
        }
        this.setInactiveOpacity(['area', 'verticalArea'], 'chart-area-inactive-opacity');
        this.setInactiveOpacity(['line', 'verticalLine'], 'chart-line-inactive-opacity');
    }
    setInactiveOpacity(seriesTypes, selector) {
        const inactiveOpacity = parseFloat(this.queryStyle(selector).opacity);
        if (!isNaN(inactiveOpacity) && inactiveOpacity < 1) {
            seriesTypes.forEach(type => this.setStyle(`seriesDefaults.${type}.highlight.inactiveOpacity`, inactiveOpacity));
        }
    }
    setFonts() {
        const defaultFont = font(this.queryStyle('chart-font'));
        const titleFont = font(this.queryStyle('chart-title-font'));
        const paneTitleFont = font(this.queryStyle('chart-pane-title-font'));
        const labelFont = font(this.queryStyle('chart-label-font'));
        this.setStyle('axisDefaults.labels.font', labelFont);
        this.setStyle('axisDefaults.notes.label.font', defaultFont);
        this.setStyle('axisDefaults.title.font', defaultFont);
        this.setStyle('legend.labels.font', defaultFont);
        this.setStyle('seriesDefaults.labels.font', labelFont);
        this.setStyle('seriesDefaults.notes.label.font', defaultFont);
        this.setStyle('title.font', titleFont);
        this.setStyle('paneDefaults.title.font', paneTitleFont);
    }
    setSeriesColors() {
        const element = this.element;
        const series = [].slice.call(element.querySelectorAll('.k-var--series div'));
        const unsetColor = computedBackgroundColor(element.querySelector('.k-var--series-unset'));
        const seriesColors = series.reduce((arr, el) => {
            const pos = seriesPos(el.className);
            const color = computedBackgroundColor(el);
            if (color !== unsetColor) {
                arr[pos] = color;
            }
            return arr;
        }, [] // Will populate the series colors in this array
        );
        this.setStyle('seriesColors', seriesColors);
    }
    mapColor(key, varName) {
        this.setStyle(key, this.queryColor(varName));
    }
    queryColor(varName) {
        return this.queryStyle(varName).backgroundColor;
    }
    queryStyle(varName) {
        const element = this.element.querySelector(`.k-var--${varName}`);
        return window.getComputedStyle(element);
    }
};
ThemeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [NgZone])
], ThemeService);

/**
 * @hidden
 */
class ChartInstanceObserver extends InstanceObserver {
    constructor(instance) {
        super(instance);
        this.handlerMap = {
            hideTooltip: 'onHideTooltip',
            legendItemClick: 'onLegendItemClick',
            render: 'onRender',
            showTooltip: 'onShowTooltip',
            init: 'onInit'
        };
    }
}

/**
 * @hidden
 */
let TooltipTemplateService = class TooltipTemplateService {
    setTemplate(template) {
        this.template = template;
    }
    getTemplate(seriesIndex) {
        if (this.seriesTemplates && this.seriesTemplates[seriesIndex]) {
            return this.seriesTemplates[seriesIndex];
        }
        return this.template;
    }
    setSeriesTemplates(seriesTemplates) {
        this.seriesTemplates = seriesTemplates;
    }
    setSharedTemplate(sharedTemplate) {
        this.sharedTemplate = sharedTemplate;
    }
    getSharedTemplate() {
        return this.sharedTemplate;
    }
};
TooltipTemplateService = __decorate([
    Injectable()
], TooltipTemplateService);

/**
 * A directive that selects a [template]({{ site.data.urls.angular['templatesyntax'] }})
 * within the `<kendo-chart-tooltip>` component for the
 * [series tooltip]({% slug tooltips_chart_charts %}#toc-series-tooltip).
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-tooltip>
 *          <ng-template kendoChartSeriesTooltipTemplate let-value="value">
 *             Value is {{value}}
 *           </ng-template>
 *       </kendo-chart-tooltip>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 * }
 *
 * ```
 */
let SeriesTooltipTemplateDirective = class SeriesTooltipTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
SeriesTooltipTemplateDirective = __decorate([
    Directive({
        selector: '[kendoChartSeriesTooltipTemplate]'
    }),
    __param(0, Optional()),
    __metadata("design:paramtypes", [TemplateRef])
], SeriesTooltipTemplateDirective);

/**
 * A directive that selects a [template]({{ site.data.urls.angular['templatesyntax'] }})
 * within the `<kendo-chart-tooltip>` component for the
 * [shared series tooltip]({% slug tooltips_chart_charts %}#toc-shared-tooltip).
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-tooltip [shared]="true">
 *         <ng-template kendoChartSharedTooltipTemplate let-category="category" let-points="points">
 *             <div> {{ category }} </div>
 *             <div *ngFor="let point of points">
 *                 {{ point.series.name }} : {{ point.value }}
 *             </div>
 *         </ng-template>
 *       </kendo-chart-tooltip>
 *       <kendo-chart-category-axis>
 *         <kendo-chart-category-axis-item [categories]="['A', 'B', 'C']">
 *         </kendo-chart-category-axis-item>
 *       </kendo-chart-category-axis>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item name="A" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *         <kendo-chart-series-item name="B" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 * }
 *
 * ```
 */
let SharedTooltipTemplateDirective = class SharedTooltipTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
SharedTooltipTemplateDirective = __decorate([
    Directive({
        selector: '[kendoChartSharedTooltipTemplate]'
    }),
    __param(0, Optional()),
    __metadata("design:paramtypes", [TemplateRef])
], SharedTooltipTemplateDirective);

/**
 * The point that is passed to the tooltip template.
 */
class TooltipTemplatePoint {
    /**
     * @hidden
     */
    constructor(point, format, template) {
        this.value = point.value;
        this.category = point.category;
        this.categoryIndex = point.categoryIx;
        this.series = point.series;
        this.dataItem = point.dataItem;
        this.percentage = point.percentage;
        this.runningTotal = point.runningTotal;
        this.total = point.total;
        this.low = point.low;
        this.high = point.high;
        this.xLow = point.xLow;
        this.xHigh = point.xHigh;
        this.yLow = point.yLow;
        this.yHigh = point.yHigh;
        this.template = template;
        this.point = point;
        this.format = format;
    }
    /**
     * @hidden
     */
    get formattedValue() {
        return this.format ? this.point.formatValue(this.format) : String(this.value);
    }
}

/* tslint:disable:align no-empty */
const POSITION_MODE = 'absolute';
const COLLISION = { horizontal: "fit", vertical: "fit" };
/**
 * @hidden
 */
class BaseTooltip {
    constructor(popupService, localizationService) {
        this.popupService = popupService;
        this.localizationService = localizationService;
        this.style = {};
        this.popupRef = null;
    }
    get active() {
        return this.popupRef !== null;
    }
    show(e) {
        const align = e.anchor.align;
        const offset = this.position(e.anchor.point);
        this.style = e.style;
        if (!this.popupRef) {
            this.popupRef = this.popupService.open(Object.assign({
                offset: offset,
                popupAlign: align,
                animate: this.animate,
                content: this.templateRef,
                collision: COLLISION,
                positionMode: POSITION_MODE
            }, this.popupSettings));
            if (this.localizationService.rtl) {
                this.popupRef.popupElement.setAttribute('dir', 'rtl');
            }
            this.onInit();
        }
        else {
            const popup = this.popupRef.popup.instance;
            popup.offset = offset;
            popup.popupAlign = align;
        }
    }
    hide() {
        if (this.popupRef) {
            this.popupRef.close();
            this.popupRef = null;
        }
    }
    onInit() {
    }
    ngOnDestroy() {
        this.hide();
    }
    position(offset) {
        if (!this.popupSettings || !this.popupSettings.appendTo) {
            return offset;
        }
        const appendTo = this.popupSettings.appendTo.element.nativeElement;
        console.log('appendTo', appendTo);
        const bbox = appendTo.getBoundingClientRect();
        const { scrollLeft, scrollTop } = this.scrollOffset(appendTo);
        return {
            left: offset.left - bbox.left - scrollLeft,
            top: offset.top - bbox.top - scrollTop
        };
    }
    scrollOffset(element) {
        if (!element) {
            return null;
        }
        let scrollLeft = element.scrollLeft;
        let scrollTop = element.scrollTop;
        let parent = element.parentElement;
        while (parent) {
            scrollLeft += parent.scrollLeft;
            scrollTop += parent.scrollTop;
            parent = parent.parentElement;
        }
        return { scrollLeft, scrollTop };
    }
}

/**
 * @hidden
 */
function hasParent(element, parent) {
    let current = element;
    while (current && current !== parent) {
        current = current.parentNode;
    }
    return current ? true : false;
}

/**
 * @hidden
 */
function bodyFactory() {
    if (isDocumentAvailable()) {
        return new ElementRef(document.body);
    }
}

const SHARED_TOOLTIP_CLASS = 'k-chart-shared-tooltip';
const TOOLTIP_CLASS = "k-chart-tooltip";
const ɵ0$2 = bodyFactory;
// Codelyzer 2.0.0-beta2 doesn't handle inherited members
/* tslint:disable:no-access-missing-member */
/**
 * @hidden
 */
let TooltipPopupComponent = class TooltipPopupComponent extends BaseTooltip {
    constructor(popupService, templateService, localizationService, ngZone) {
        super(popupService, localizationService);
        this.popupService = popupService;
        this.templateService = templateService;
        this.localizationService = localizationService;
        this.ngZone = ngZone;
        this.seriesTooltipContext = {};
        this.seriesSharedTooltipContext = {};
        this.animate = true;
        this.wrapperClass = 'k-chart-tooltip-wrapper';
        this.leave = new EventEmitter();
        this.popupClasses = {};
    }
    show(e) {
        this.shared = e.shared;
        this.popupClasses = Object.assign({
            [SHARED_TOOLTIP_CLASS]: e.shared,
            [TOOLTIP_CLASS]: true,
            [e.className]: !!e.className
        }, this.classNames);
        if (!e.shared) {
            this.seriesTooltipContext = new TooltipTemplatePoint(e.point, e.format);
            this.seriesTooltipTemplateRef = this.pointTemplateRef(e.point);
        }
        else {
            this.seriesSharedTooltipTemplateRef = this.templateService.getSharedTemplate()
                || this.defaultSharedTooltipTemplate.templateRef;
            this.seriesSharedTooltipContext = this.sharedTemplateContext(e);
        }
        super.show(e);
    }
    containsElement(element) {
        if (this.popupRef) {
            return hasParent(element, this.popupRef.popupElement);
        }
    }
    sharedTemplateContext(e) {
        const points = e.points;
        const nameColumn = points.filter((point) => typeof point.series.name !== 'undefined').length > 0;
        const colorMarker = e.series.length > 1;
        let colspan = 1;
        if (nameColumn) {
            colspan++;
        }
        if (colorMarker) {
            colspan++;
        }
        return {
            category: e.category,
            categoryText: e.categoryText,
            colorMarker: colorMarker,
            colspan: colspan,
            nameColumn: nameColumn,
            points: this.wrapPoints(e.points, e.format)
        };
    }
    pointTemplateRef(point) {
        return this.templateService.getTemplate(point.series.index) || this.defaultSeriesTooltipTemplate.templateRef;
    }
    wrapPoints(points, format) {
        const result = [];
        for (let idx = 0; idx < points.length; idx++) {
            const point = points[idx];
            const template = this.pointTemplateRef(point);
            const pointFormat = ((point.options || {}).tooltip || {}).format || format;
            result.push(new TooltipTemplatePoint(point, pointFormat, template));
        }
        return result;
    }
    onInit() {
        this.ngZone.runOutsideAngular(() => {
            this.mouseleaveSubscription = this.popupRef.popupElement.addEventListener('mouseleave', (args) => {
                this.leave.emit(args);
            });
        });
        this.popupRef.popupElement.className += ` ${this.wrapperClass}`;
    }
    hide() {
        if (this.mouseleaveSubscription) {
            this.mouseleaveSubscription();
            this.mouseleaveSubscription = null;
        }
        super.hide();
    }
};
__decorate([
    ViewChild(SeriesTooltipTemplateDirective, { static: false }),
    __metadata("design:type", SeriesTooltipTemplateDirective)
], TooltipPopupComponent.prototype, "defaultSeriesTooltipTemplate", void 0);
__decorate([
    ViewChild(SharedTooltipTemplateDirective, { static: false }),
    __metadata("design:type", SharedTooltipTemplateDirective)
], TooltipPopupComponent.prototype, "defaultSharedTooltipTemplate", void 0);
__decorate([
    ViewChild('content', { static: true }),
    __metadata("design:type", TemplateRef)
], TooltipPopupComponent.prototype, "templateRef", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TooltipPopupComponent.prototype, "animate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipPopupComponent.prototype, "classNames", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipPopupComponent.prototype, "popupSettings", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipPopupComponent.prototype, "wrapperClass", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TooltipPopupComponent.prototype, "leave", void 0);
TooltipPopupComponent = __decorate([
    Component({
        providers: [PopupService, {
                provide: POPUP_CONTAINER,
                useFactory: ɵ0$2
            }],
        selector: 'kendo-chart-tooltip-popup',
        template: `
    <ng-template #content>
        <div [ngClass]="popupClasses" [ngStyle]="style">
          <ng-template [ngTemplateOutlet]="seriesTooltipTemplateRef" *ngIf="!shared"
                    [ngTemplateOutletContext]="seriesTooltipContext">
          </ng-template>
          <ng-template [ngTemplateOutlet]="seriesSharedTooltipTemplateRef" *ngIf="shared"
                    [ngTemplateOutletContext]="seriesSharedTooltipContext">
          </ng-template>
        </div>
    </ng-template>

    <ng-template kendoChartSeriesTooltipTemplate let-formattedValue="formattedValue">
        <span [innerHTML]="formattedValue"></span>
    </ng-template>
    <ng-template kendoChartSharedTooltipTemplate let-points="points" let-categoryText="categoryText" let-colspan="colspan" let-colorMarker="colorMarker" let-nameColumn="nameColumn" >
        <table>
            <tr><th [attr.colspan]='colspan'> {{ categoryText }} </th></tr>
            <tr *ngFor="let point of points">
                <td *ngIf="colorMarker"><span class='k-chart-shared-tooltip-marker' [style.background-color]='point.series.color'></span></td>
                <td *ngIf="nameColumn">
                    <ng-container *ngIf="point.series.name !== undefined">{{ point.series.name }}</ng-container>
                    <ng-container *ngIf="point.series.name === undefined">&nbsp;</ng-container>
                </td>
                <td>
                  <ng-template [ngTemplateOutlet]="point.template"
                            [ngTemplateOutletContext]="point">
                  </ng-template>
                </td>
            </tr>
        </table>
    </ng-template>
    `
    }),
    __metadata("design:paramtypes", [PopupService,
        TooltipTemplateService,
        LocalizationService,
        NgZone])
], TooltipPopupComponent);

const ɵ0$3 = bodyFactory;
// Codelyzer 2.0.0-beta2 doesn't handle inherited members
/* tslint:disable:no-access-missing-member */
/**
 * @hidden
 */
let CrosshairTooltipComponent = class CrosshairTooltipComponent extends BaseTooltip {
    constructor(popupService, localizationService) {
        super(popupService, localizationService);
        this.animate = false;
    }
    show(e) {
        super.show(e);
        this.value = e.value;
        this.popupRef.popup.changeDetectorRef.detectChanges();
    }
};
__decorate([
    ViewChild('content', { static: true }),
    __metadata("design:type", TemplateRef)
], CrosshairTooltipComponent.prototype, "templateRef", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CrosshairTooltipComponent.prototype, "key", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CrosshairTooltipComponent.prototype, "popupSettings", void 0);
CrosshairTooltipComponent = __decorate([
    Component({
        providers: [PopupService, {
                provide: POPUP_CONTAINER,
                useFactory: ɵ0$3
            }],
        selector: 'kendo-chart-crosshair-tooltip',
        template: `
        <ng-template #content>
            <div class="k-chart-tooltip k-chart-crosshair-tooltip" [ngStyle]="style">
                {{ value }}
            </div>
        </ng-template>
    `
    }),
    __metadata("design:paramtypes", [PopupService, LocalizationService])
], CrosshairTooltipComponent);

const AXES = ["categoryAxis", "valueAxis", "xAxis", "yAxis"];
/**
 * @hidden
 */
let CrosshairTooltipsContainerComponent = class CrosshairTooltipsContainerComponent {
    /**
     * @hidden
     */
    constructor() {
        this.tooltipKeys = [];
        this.tooltipsMap = {};
    }
    show(e) {
        const tooltipComponents = this.crossahirTooltipComponents.toArray();
        const axisName = e.axisName;
        const axisIndex = e.axisIndex;
        for (let idx = 0; idx < tooltipComponents.length; idx++) {
            if (tooltipComponents[idx].key === axisName + axisIndex) {
                tooltipComponents[idx].show(e);
                break;
            }
        }
    }
    hide() {
        const tooltipComponents = this.crossahirTooltipComponents.toArray();
        for (let idx = 0; idx < tooltipComponents.length; idx++) {
            tooltipComponents[idx].hide();
        }
    }
    get active() {
        return this.tooltipKeys.length > 0;
    }
    createCrosshairTooltips(options) {
        const newMap = this.mapTooltips(options);
        const map = this.tooltipsMap;
        for (let key in map) {
            if (!newMap[key]) {
                this.removeTooltip(key);
                delete map[key];
            }
        }
        for (let key in newMap) {
            if (!map[key]) {
                map[key] = newMap[key];
                this.tooltipKeys.push(key);
            }
        }
    }
    removeTooltip(key) {
        const keys = this.tooltipKeys;
        for (let idx = 0; idx < keys.length; idx++) {
            if (keys[idx] === key) {
                keys.splice(idx, 1);
                break;
            }
        }
    }
    mapTooltips(options) {
        const map = {};
        for (let idx = 0; idx < AXES.length; idx++) {
            const tooltips = this.axesCrosshairTooltipOptions(options, AXES[idx]);
            for (let tooltipIdx = 0; tooltipIdx < tooltips.length; tooltipIdx++) {
                const tooltip = tooltips[tooltipIdx];
                map[tooltip.name + tooltip.index] = tooltip;
            }
        }
        return map;
    }
    axesCrosshairTooltipOptions(options, name) {
        const result = [];
        if (options[name]) {
            const axes = [].concat(options[name]);
            for (let idx = 0; idx < axes.length; idx++) {
                const tooltip = (axes[idx].crosshair || {}).tooltip;
                if (tooltip && tooltip.visible) {
                    result.push({
                        index: idx,
                        name: name
                    });
                }
            }
        }
        return result;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], CrosshairTooltipsContainerComponent.prototype, "popupSettings", void 0);
__decorate([
    ViewChildren(CrosshairTooltipComponent),
    __metadata("design:type", QueryList)
], CrosshairTooltipsContainerComponent.prototype, "crossahirTooltipComponents", void 0);
CrosshairTooltipsContainerComponent = __decorate([
    Component({
        selector: 'kendo-chart-crosshair-tooltips-container',
        template: `
        <kendo-chart-crosshair-tooltip *ngFor="let key of tooltipKeys" [key]="key" [popupSettings]="popupSettings">
        </kendo-chart-crosshair-tooltip>
    `
    })
], CrosshairTooltipsContainerComponent);

const getTouch = (domEvent) => {
    return {
        x: {
            location: domEvent.pageX
        },
        y: {
            location: domEvent.pageY
        }
    };
};
const eventArgs = (e, previousArgs) => {
    const pointers = e.pointers;
    const pointer = pointers[0];
    const xLocation = pointer.pageX;
    const yLocation = pointer.pageY;
    let distance = 0;
    if (pointers.length > 1) {
        const pointer1 = pointers[0];
        const pointer2 = pointers[1];
        distance = Math.sqrt(Math.pow(pointer1.pageX - pointer2.pageX, 2) + Math.pow(pointer1.pageY - pointer2.pageY, 2));
    }
    return {
        distance: distance,
        event: e.srcEvent,
        preventDefault: function () {
            e.preventDefault();
        },
        target: e.target,
        touches: pointers.map(getTouch),
        type: e.type,
        x: {
            delta: previousArgs ? xLocation - previousArgs.x.location : 0,
            initialDelta: e.deltaX,
            location: xLocation,
            startLocation: xLocation - e.deltaX
        },
        y: {
            delta: previousArgs ? yLocation - previousArgs.y.location : 0,
            initialDelta: e.deltaY,
            location: yLocation,
            startLocation: yLocation - e.deltaY
        }
    };
};
function shouldBindGroup(groupNames, events) {
    for (let idx = 0; idx < groupNames.length; idx++) {
        if (events[groupNames[idx]]) {
            return true;
        }
    }
    return false;
}
const eventGroups = [{
        end: 'panend',
        move: 'panmove',
        start: 'panstart'
    }, {
        gesturechange: 'pinchmove',
        gestureend: 'pinchend',
        gesturestart: 'pinchstart'
    }, {
        press: 'press'
    }, {
        tap: 'tap'
    }];
/**
 * @hidden
 */
class DomEvents {
    constructor(hammerInstance, events) {
        this.hammerInstance = hammerInstance;
        this.eventHandlers = {};
        this.tap = this.tap.bind(this);
        this.press = this.press.bind(this);
        this.panstart = this.panstart.bind(this);
        this.panmove = this.panmove.bind(this);
        this.panend = this.panend.bind(this);
        this.pinchstart = this.pinchstart.bind(this);
        this.pinchmove = this.pinchmove.bind(this);
        this.pinchend = this.pinchend.bind(this);
        if (events) {
            this.bind(events);
        }
    }
    tap(e) {
        this.trigger('tap', e);
    }
    press(e) {
        this.trigger('press', e);
    }
    panstart(e) {
        delete this.previous;
        this.previous = this.trigger('start', e);
    }
    panmove(e) {
        this.previous = this.trigger('move', e);
    }
    panend(e) {
        this.trigger('end', e);
        delete this.previous;
    }
    pinchstart(e) {
        this.trigger('gesturestart', e);
    }
    pinchmove(e) {
        this.trigger('gesturechange', e);
    }
    pinchend(e) {
        this.trigger('gestureend', e);
    }
    trigger(name, e) {
        const args = eventArgs(e, this.previous);
        if (this.eventHandlers[name]) {
            this.eventHandlers[name](args);
        }
        return args;
    }
    bind(events = {}) {
        this.unbind();
        this.eventHandlers = events;
        for (let idx = 0; idx < eventGroups.length; idx++) {
            const eventGroup = eventGroups[idx];
            const groupNames = Object.keys(eventGroup);
            if (shouldBindGroup(groupNames, events)) {
                for (let nameIdx = 0; nameIdx < groupNames.length; nameIdx++) {
                    const name = eventGroup[groupNames[nameIdx]];
                    this.hammerInstance.on(name, this[name]);
                }
            }
        }
    }
    unbind() {
        if (this.hammerInstance) {
            this.hammerInstance.off();
        }
        this.eventHandlers = {};
    }
    destroy() {
        if (this.hammerInstance) {
            this.hammerInstance.destroy();
            delete this.hammerInstance;
        }
        delete this.eventHandlers;
    }
    toggleDrag(enable) {
        this.toggle('pan', enable);
    }
    toggleZoom(enable) {
        this.toggle('pinch', enable);
    }
    toggle(recognizer, enable) {
        if (this.hammerInstance) {
            const instanceRecognizer = this.hammerInstance.get(recognizer);
            instanceRecognizer.set({
                enable: enable
            });
        }
    }
}

const MISSING_HAMMER_MESSAGE = 'Hammerjs is not loaded.' +
    'Solution: http://www.telerik.com/kendo-angular-ui/components/charts/troubleshooting/#toc-hammerjs-is-not-loaded';
/**
 * @hidden
 */
class DomEventsBuilder$1 {
    static create(element, events) {
        if (typeof window !== 'undefined') {
            const HAMMER = window.Hammer;
            if (!HAMMER) {
                if (isDevMode()) {
                    throw new Error(MISSING_HAMMER_MESSAGE);
                }
                return;
            }
            const hammerInstance = new HAMMER(element, {
                recognizers: [
                    [HAMMER.Tap],
                    [HAMMER.Pan],
                    [HAMMER.Pinch],
                    [HAMMER.Press, { time: 0 }]
                ]
            });
            return new DomEvents(hammerInstance, events);
        }
    }
}

const dateCategoryAxisFormats = DateCategoryAxis.prototype.options.labels.dateFormats;
const dateValueAxisFormats = DateValueAxis.prototype.options.labels.dateFormats;
const dateFormats = {
    milliseconds: "HH:mm:ss.SSS",
    seconds: { time: 'medium' },
    minutes: { time: 'short' },
    hours: { time: 'short' },
    days: { skeleton: 'Md' },
    weeks: { skeleton: 'Md' },
    months: { skeleton: 'yyMMM' },
    years: { skeleton: 'y' }
};
Object.assign(dateCategoryAxisFormats, dateFormats);
Object.assign(dateValueAxisFormats, dateFormats);
DomEventsBuilder.register(DomEventsBuilder$1);

function hasObservers(emitter) {
    return emitter.observers.length > 0;
}
/**
 * The root Chart component.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <button (click)="toggleLegend()">Toggle Legend</button>
 *     <button (click)="toggleSeries()">Toggle Series</button>
 *     <kendo-chart>
 *       <kendo-chart-legend [visible]="legendVisible">
 *       </kendo-chart-legend>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item *ngIf="seriesVisible" name="Series #1"
 *                                   type="line" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 *   public legendVisible: boolean = true;
 *   public seriesVisible: boolean = true;
 *
 *   public toggleSeries(): void {
 *     this.seriesVisible = !this.seriesVisible;
 *   }
 *
 *   public toggleLegend(): void {
 *     this.legendVisible = !this.legendVisible;
 *   }
 * }
 *
 * ```
 */
let ChartComponent = class ChartComponent extends ChartComponentGenerated {
    constructor(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer) {
        super(configurationService);
        this.configurationService = configurationService;
        this.themeService = themeService;
        this.element = element;
        this.intl = intl;
        this.localizationService = localizationService;
        this.ngZone = ngZone;
        this.instanceEventService = instanceEventService;
        this.changeDetector = changeDetector;
        this.renderer = renderer;
        /**
         * Fires when a legend item is clicked before the selected series visibility is toggled.
         * Can be prevented.
         */
        this.legendItemClick = new EventEmitter();
        /**
         * Limits the automatic resizing of the Chart. Sets the maximum number of times per second
         * that the component redraws its content when the size of its container changes.
         * Defaults to `10`. To disable the automatic resizing, set it to `0`.
         *
         * @example
         * ```ts
         * _@Component({
         *     selector: 'my-app',
         *     template: `
         *         <kendo-chart [resizeRateLimit]="2">
         * <!--                 ^^^^^^^^^^^^^^^^^^^^^^
         *       Will update the size of the Chart up to two times a second.
         *       Resize the Plunkr pane or window to try it out.
         * -->
         *          <kendo-chart-series>
         *            <kendo-chart-series-item [data]="seriesData">
         *           </kendo-chart-series-item>
         *         </kendo-chart-series>
         *       </kendo-chart>
         *   `
         * })
         * export class AppComponent {
         *    seriesData: number[] = [1, 2, 3, 5];
         * }
         * ```
         */
        this.resizeRateLimit = 10;
        this.theme = null;
        this.suppressTransitions = false;
        this.rtl = false;
        this.hostClasses = ['k-chart', 'k-widget'];
        validatePackage(packageMetadata);
        this.themeService.loadTheme();
        this.refreshWait();
    }
    ngOnInit() {
        if (this.element) {
            this.hostClasses.forEach(name => {
                this.renderer.addClass(this.element.nativeElement, name);
            });
            this.renderer.setStyle(this.element.nativeElement, 'position', 'relative');
        }
    }
    ngAfterViewInit() {
        if (this.canRender) {
            this.ngZone.runOutsideAngular(() => {
                const chartMouseleave = this.renderer.listen(this.surfaceElement.nativeElement, 'mouseleave', this.chartMouseleave.bind(this));
                this.domSubscriptions = () => {
                    chartMouseleave();
                };
            });
        }
        this.setDirection();
        this.subscriptions = this.intl.changes.subscribe(this.intlChange.bind(this));
        this.subscriptions.add(this.localizationService.changes.subscribe(this.rtlChange.bind(this)));
    }
    ngAfterViewChecked() {
        if (this.instance && this.autoResize) {
            this.ngZone.runOutsideAngular(() => {
                clearTimeout(this.resizeTimeout);
                this.resizeTimeout = setTimeout(() => {
                    this.resize();
                }, 0);
            });
        }
    }
    ngOnChanges(changes) {
        const store = this.configurationService.store;
        copyChanges(changes, store);
        store.popupSettings = null;
        this.configurationService.push(store);
    }
    /**
     * Updates the component fields with the specified values and refreshes the Chart.
     *
     * Use this method when the configuration values cannot be set through the template.
     *
     * @example
     * ```ts-no-run
     * chart.notifyChanges({ title: { text: 'New Title' } });
     * ```
     *
     * @param changes An object containing the updated input fields.
     */
    notifyChanges(changes) {
        this.ngOnChanges(toSimpleChanges(changes));
    }
    ngOnDestroy() {
        this.destroyed = true;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.domSubscriptions) {
            this.domSubscriptions();
            this.domSubscriptions = null;
        }
        if (this.instance) {
            this.instance.destroy();
            this.instance = null;
        }
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
        clearTimeout(this.resizeTimeout);
        clearTimeout(this.redrawTimeout);
    }
    createInstance(element, observer) {
        this.instance = new Chart(element, this.options, this.theme, {
            intlService: this.intl,
            observer: observer,
            rtl: this.rtl,
            sender: this
        });
    }
    /**
     * Exports the Chart as an image. The export operation is asynchronous and returns a promise.
     *
     * @param {ImageExportOptions} options - The parameters for the exported image.
     * @returns {Promise<string>} - A promise that will be resolved with a PNG image encoded as a Data URI.
     */
    exportImage(options = {}) {
        return exportImage(this.exportVisual(options), options);
    }
    /**
     * Exports the Chart as an SVG document. The export operation is asynchronous and returns a promise.
     *
     * @param options - The parameters for the exported file.
     * @returns - A promise that will be resolved with an SVG document that is encoded as a Data URI.
     */
    exportSVG(options = {}) {
        return exportSVG(this.exportVisual(options), options);
    }
    /**
     * Exports the Chart as a Drawing `Scene`.
     *
     * @param options - The parameters for the export operation.
     * @returns - The root Group of the scene.
     */
    exportVisual(options = {}) {
        return this.instance.exportVisual(options);
    }
    /**
     * Returns the axis with the specified name.
     *
     * @param {string} name - The axis name.
     * @returns {ChartAxis} - The axis with a corresponding name.
     */
    findAxisByName(name) {
        if (this.instance) {
            return this.instance.findAxisByName(name);
        }
    }
    /**
     * Returns the pane at the specified index.
     *
     * @param {number} index - The pane index.
     * @returns {ChartPane} - The pane at the specified index.
     */
    findPaneByIndex(index) {
        if (this.instance) {
            return this.instance.findPaneByIndex(index);
        }
    }
    /**
     * Returns the pane with the specified name.
     *
     * @param {string} name - The name of the pane.
     * @returns {ChartPane} - The pane with the provided name.
     */
    findPaneByName(name) {
        if (this.instance) {
            return this.instance.findPaneByName(name);
        }
    }
    /**
     * Returns the plot area of the Chart.
     * @returns {ChartPlotArea} - The plot area of the Chart.
     */
    getPlotArea() {
        if (this.instance) {
            return this.instance.plotArea();
        }
    }
    /**
     * Highlights the series points or the segments of a Pie, Donut, or Funnel charts.
     *
     * See [Series Highlight]({% slug serieshighlight_chart_charts %}) for more details.
     *
     * In the following example, the callback is evaluated for each data point.
     * If the function returns `true`, the point is highlighted.
     *
     * {% meta height:500 %}
     * {% embed_file elements/highlight/api/app.component.ts preview %}
     * {% embed_file shared/app.module.ts hidden %}
     * {% embed_file shared/main.ts hidden %}
     * {% endmeta %}
     *
     * @param show - A Boolean value that indicates whether the highlight is shown or hidden.
     * @param filter - A string that represents the series or category name, an object with the series and category name, or a function which will be called for each point. The function should return `true` for the points for which the highlight is toggled.
     */
    toggleHighlight(show, filter) {
        if (this.instance) {
            this.instance.toggleHighlight(show, filter);
        }
    }
    /**
     * Hides the tooltip of the Chart.
     */
    hideTooltip() {
        if (this.instance) {
            this.instance.hideTooltip();
        }
    }
    /**
     * Shows the Chart tooltip of a specific point or the shared tooltip of a specific category.
     *
     * @param filter - The category for a shared tooltip or a function which will be called for each point until the function returns `true`.
     */
    showTooltip(filter) {
        if (this.instance) {
            this.instance.showTooltip(filter);
        }
    }
    init() {
        if (!this.canRender) {
            return;
        }
        const element = this.surfaceElement.nativeElement;
        const instanceObserver = new ChartInstanceObserver(this);
        this.createInstance(element, instanceObserver);
    }
    /**
     * Detects the size of the container and redraws the Chart.
     * Resizing is automatic unless you set the `resizeRateLimit` option to `0`.
     */
    resize() {
        if (this.instance) {
            this.instance.resize();
        }
    }
    /**
     * @hidden
     */
    onResize(_event) {
        if (this.autoResize) {
            this.resize();
        }
    }
    onLegendItemClick(e) {
        this.run(() => {
            const args = new LegendItemClickEvent(e, this);
            this.legendItemClick.emit(args);
            if (!args.isDefaultPrevented()) {
                const series = this.seriesComponents.toArray()[e.series.index];
                if (!series) {
                    return;
                }
                if (e.pointIndex === undefined) {
                    series.toggleVisibility();
                }
                else {
                    series.togglePointVisibility(e.pointIndex);
                }
                this.suppressTransitions = true;
            }
        }, hasObservers(this.legendItemClick), this.seriesComponents.length > 0);
    }
    onInit(e) {
        this.instance = e.sender;
    }
    onRender(e) {
        const donutCenterStyle = this.getDonutCenterStyle();
        this.run(() => {
            const args = new RenderEvent(e, this);
            this.surface = e.sender.surface;
            this.render.emit(args);
            this.donutCenterStyle = donutCenterStyle;
        }, hasObservers(this.render), this.donutCenterStyle !== donutCenterStyle);
    }
    onShowTooltip(e) {
        this.run(() => {
            if (!e.crosshair) {
                this.tooltipInstance.show(e);
            }
            else {
                this.crossahirTooltips.show(e);
            }
        }, !e.crosshair, true);
    }
    onHideTooltip(e) {
        if (!e.crosshair) {
            if (this.tooltipInstance.active) {
                this.tooltipInstance.hide();
                this.detectChanges();
            }
        }
        else if (this.crossahirTooltips.active) {
            this.crossahirTooltips.hide();
            this.detectChanges();
        }
    }
    trigger(name, e) {
        if (name === 'resize') {
            return;
        }
        const emitter = this.activeEmitter(name);
        if (emitter) {
            const args = this.instanceEventService.create(name, e, this);
            this.run(() => {
                emitter.emit(args);
            });
            return args.isDefaultPrevented && args.isDefaultPrevented();
        }
    }
    requiresHandlers(names) {
        for (let idx = 0; idx < names.length; idx++) {
            if (this.activeEmitter(names[idx])) {
                return true;
            }
        }
        return false;
    }
    refresh() {
        clearTimeout(this.redrawTimeout);
        this.updateDirection();
        this.crossahirTooltips.createCrosshairTooltips(this.options);
        this.setChartAreaSize();
        if (!this.instance) {
            this.init();
            return;
        }
        const transitions = this.options.transitions;
        if (this.suppressTransitions) {
            this.options.transitions = false;
        }
        this.updateOptions();
        if (this.suppressTransitions) {
            this.options.transitions = transitions;
            this.suppressTransitions = false;
        }
    }
    setChartAreaSize() {
        if (!this.element) {
            return;
        }
        const element = this.element.nativeElement;
        const chartArea = this.options.chartArea || {};
        if (chartArea.width) {
            element.style.width = `${chartArea.width}px`;
        }
        if (chartArea.height) {
            element.style.height = `${chartArea.height}px`;
        }
    }
    updateOptions() {
        this.instance.setOptions(this.options);
    }
    /**
     * @hidden
     */
    tooltipMouseleave(e) {
        const relatedTarget = e.relatedTarget;
        const chartElement = this.element.nativeElement;
        if (this.instance && (!relatedTarget || !hasParent(relatedTarget, chartElement))) {
            this.instance.hideElements();
        }
    }
    /**
     * @hidden
     */
    chartMouseleave(e) {
        const relatedTarget = e.relatedTarget;
        const chartElement = this.element.nativeElement;
        if (this.instance && (!relatedTarget || !(this.tooltipInstance.containsElement(relatedTarget) || hasParent(relatedTarget, chartElement))) &&
            !this.instance.handlingTap) {
            this.instance.hideElements();
        }
    }
    get canRender() {
        return isDocumentAvailable() && Boolean(this.surfaceElement);
    }
    get autoResize() {
        return this.resizeRateLimit > 0;
    }
    activeEmitter(name) {
        const emitter = this[name];
        if (emitter && emitter.emit && hasObservers(emitter)) {
            return emitter;
        }
    }
    getDonutCenterStyle() {
        if (!this.instance || !this.options || !this.options.series) {
            return;
        }
        const firstSeries = this.options.series[0];
        const charts = this.instance._plotArea.charts;
        if (!firstSeries || firstSeries.type !== 'donut' || !charts || charts[0].points.length === 0) {
            return;
        }
        const firstPoint = charts[0].points[0];
        const center = firstPoint.box.center();
        const radius = firstPoint.sector.innerRadius;
        const top = center.y - radius;
        const left = center.x - radius;
        const size = radius * 2;
        return {
            height: size + 'px',
            left: left + 'px',
            top: top + 'px',
            width: size + 'px'
        };
    }
    refreshWait() {
        this.ngZone.runOutsideAngular(() => {
            this.subscription = combineLatest(this.configurationService.onChange$, this.themeService.onChange$).pipe(tap((result) => {
                this.options = result[0];
                this.theme = result[1];
            }), auditTime(THROTTLE_MS))
                .subscribe(() => {
                this.refresh();
            });
        });
    }
    run(callback, inZone = true, detectChanges) {
        if (inZone) {
            if (detectChanges) {
                this.changeDetector.markForCheck();
            }
            this.ngZone.run(callback);
        }
        else {
            callback();
            if (detectChanges) {
                this.detectChanges();
            }
        }
    }
    detectChanges() {
        if (!this.destroyed) {
            this.changeDetector.detectChanges();
        }
    }
    intlChange() {
        if (this.instance) {
            this.deferredRedraw();
        }
    }
    rtlChange() {
        if (this.instance && this.rtl !== this.isRTL) {
            this.deferredRedraw();
        }
    }
    deferredRedraw() {
        this.ngZone.runOutsideAngular(() => {
            clearTimeout(this.redrawTimeout);
            this.redrawTimeout = setTimeout(() => {
                this.updateDirection();
                this.instance.noTransitionsRedraw();
            }, 0);
        });
    }
    updateDirection() {
        const current = this.isRTL;
        if (this.rtl !== current) {
            this.setDirection();
            if (this.instance) {
                this.instance.setDirection(current);
            }
        }
    }
    setDirection() {
        this.rtl = this.isRTL;
        if (this.element) {
            this.renderer.setAttribute(this.element.nativeElement, 'dir', this.rtl ? 'rtl' : 'ltr');
        }
    }
    get isRTL() {
        return Boolean(this.localizationService.rtl);
    }
};
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponent.prototype, "legendItemClick", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ChartComponent.prototype, "resizeRateLimit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "popupSettings", void 0);
__decorate([
    ContentChildren(SeriesItemComponent, { descendants: true }),
    __metadata("design:type", QueryList)
], ChartComponent.prototype, "seriesComponents", void 0);
__decorate([
    ContentChild(DonutCenterTemplateDirective, { static: false }),
    __metadata("design:type", DonutCenterTemplateDirective)
], ChartComponent.prototype, "donutCenterTemplate", void 0);
__decorate([
    ViewChild(TooltipPopupComponent, { static: true }),
    __metadata("design:type", TooltipPopupComponent)
], ChartComponent.prototype, "tooltipInstance", void 0);
__decorate([
    ViewChild(CrosshairTooltipsContainerComponent, { static: true }),
    __metadata("design:type", CrosshairTooltipsContainerComponent)
], ChartComponent.prototype, "crossahirTooltips", void 0);
__decorate([
    ViewChild('surface', { static: true }),
    __metadata("design:type", ElementRef)
], ChartComponent.prototype, "surfaceElement", void 0);
ChartComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        exportAs: 'kendoChart',
        providers: [
            ConfigurationService,
            TooltipTemplateService,
            InstanceEventService,
            LocalizationService,
            {
                provide: L10N_PREFIX,
                useValue: 'kendo.chart'
            }
        ],
        selector: 'kendo-chart',
        template: `
    <div #surface class="k-chart-surface"></div>
    <kendo-chart-crosshair-tooltips-container [popupSettings]="popupSettings">
    </kendo-chart-crosshair-tooltips-container>
    <kendo-chart-tooltip-popup (leave)="tooltipMouseleave($event)" [popupSettings]="popupSettings">
    </kendo-chart-tooltip-popup>
    <kendo-resize-sensor (resize)="onResize($event)" [rateLimit]="resizeRateLimit"></kendo-resize-sensor>
    <div class="k-chart-donut-center" [ngStyle]="donutCenterStyle" *ngIf="donutCenterStyle && donutCenterTemplate">
      <ng-template [ngTemplateOutlet]="donutCenterTemplate.templateRef"></ng-template>
    </div>
  `
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        ThemeService,
        ElementRef,
        IntlService,
        LocalizationService,
        NgZone,
        InstanceEventService,
        ChangeDetectorRef,
        Renderer2])
], ChartComponent);

/**
 * @hidden
 */
class AxisDefaultsComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('axisDefaults', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsComponentGenerated.prototype, "line", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsComponentGenerated.prototype, "majorGridLines", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsComponentGenerated.prototype, "majorTicks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsComponentGenerated.prototype, "minorGridLines", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsComponentGenerated.prototype, "minorTicks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AxisDefaultsComponentGenerated.prototype, "narrowRange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsComponentGenerated.prototype, "pane", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], AxisDefaultsComponentGenerated.prototype, "plotBands", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AxisDefaultsComponentGenerated.prototype, "reverse", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AxisDefaultsComponentGenerated.prototype, "startAngle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AxisDefaultsComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsComponentGenerated.prototype, "crosshair", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsComponentGenerated.prototype, "labels", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsComponentGenerated.prototype, "title", void 0);

/**
 * The default options for all Chart axes.
 * Accepts the options which are supported by [`categoryAxis`]({% slug api_charts_categoryaxisitemcomponent %}),
 * [`valueAxis`]({% slug api_charts_valueaxisitemcomponent %}),
 * [`xAxis`]({% slug api_charts_xaxisitemcomponent %}),
 * and [`yAxis`]({% slug api_charts_yaxisitemcomponent %}).
 *
 * @example
 * ```ts-preview
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *  <div style="height: 600px;">
 *  <kendo-chart [categoryAxis]="{ categories: categories }" [chartArea]="{height: 600}" >
 *    <kendo-chart-axis-defaults
 *      [background]="background"
 *      [color]="color"
 *      [crosshair]="crosshair"
 *      [labels]="labels"
 *      [line]="line"
 *      [majorGridLines]="majorGridLines"
 *      [minorGridLines]="minorGridLines"
 *      [majorTicks]="majorTicks"
 *      [minorTicks]="minorTicks"
 *      [title]="title"
 *      ></kendo-chart-axis-defaults>
 *    <kendo-chart-title text="Gross domestic product growth /GDP annual %/"></kendo-chart-title>
 *    <kendo-chart-legend position="bottom" orientation="horizontal"></kendo-chart-legend>
 *    <kendo-chart-tooltip format="{0}%"></kendo-chart-tooltip>
 *    <kendo-chart-series>
 *        <kendo-chart-series-item *ngFor="let item of series"
 *            type="line" style="smooth" [data]="item.data" [name]="item.name">
 *        </kendo-chart-series-item>
 *    </kendo-chart-series>
 *  </kendo-chart>
 *  </div>
 * `
 * })
 * export class AppComponent {
 * public series: any[] = [{
 * name: "India",
 * data: [4, 8, 8, 9, 9, 9, 3, 8, 9, 6]
 * }, {
 * name: "Russian Federation",
 * data: [4, 7, 7, 6, 8, 8, 5, 8, 4, 4]
 * }, {
 * name: "Germany",
 * data: [0, 0, 1, 1, 4, 3, 1, 5, 4, 3]
 * },{
 * name: "World",
 * data: [2, 3, 4, 4, 4, 4, 1, 2, 4, 3]
 * }];
 *
 * public  categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
 *
 * public background = 'white';
 * // public color = 'cyan'; // will override the line.color option
 * public crosshair = {
 * visible: true
 * };
 * public labels = {
 * font: 'bold 12px/30px Helvetica, Arial, sans-serif',
 * color: '#4CAF50',
 * padding: 5,
 * rotation: 45,
 * background: 'white',
 * border: {
 * color: '#4CAF50',
 * width: 2
 * },
 * };
 * public line = {
 * color: 'black',
 * width: 3
 * };
 *
 * public majorGridLines = {
 * color: 'black',
 * visible: true
 * }
 *
 * public minorGridLines = {
 * color: 'lightgray',
 * visible: true
 * }
 *
 * public majorTicks = {
 * color: 'black',
 * size: 15
 * }
 *
 * public minorTicks = {
 * color: 'lightgray',
 * size: 10
 * }
 *
 * public title = {
 * text: 'Default Axis Title',
 * color: 'black',
 * background: 'white',
 * border: {
 * color: 'black',
 * width: 2
 * },
 * padding: 10
 * }
 * }
 * ```
 */
let AxisDefaultsComponent = class AxisDefaultsComponent extends AxisDefaultsComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
AxisDefaultsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-axis-defaults',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], AxisDefaultsComponent);

/**
 * @hidden
 */
class AxisDefaultsCrosshairComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('axisDefaults.crosshair', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsCrosshairComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsCrosshairComponentGenerated.prototype, "dashType", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AxisDefaultsCrosshairComponentGenerated.prototype, "opacity", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AxisDefaultsCrosshairComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AxisDefaultsCrosshairComponentGenerated.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsCrosshairComponentGenerated.prototype, "tooltip", void 0);

/**
 * The crosshair configuration options ([see example]({% slug api_charts_axisdefaultscomponent %})).
 */
let AxisDefaultsCrosshairComponent = class AxisDefaultsCrosshairComponent extends AxisDefaultsCrosshairComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
AxisDefaultsCrosshairComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-axis-defaults-crosshair',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], AxisDefaultsCrosshairComponent);

/**
 * @hidden
 */
class AxisDefaultsCrosshairTooltipComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('axisDefaults.crosshair.tooltip', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsCrosshairTooltipComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsCrosshairTooltipComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsCrosshairTooltipComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsCrosshairTooltipComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsCrosshairTooltipComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsCrosshairTooltipComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AxisDefaultsCrosshairTooltipComponentGenerated.prototype, "visible", void 0);

/**
 * The options of the crosshair tooltip ([see example]({% slug crosshairs_chart_charts %})).
 * The crosshair tooltip is displayed when the [`axisDefaults.crosshair.tooltip.visible`]({% slug api_charts_axisdefaultscrosshairtooltipcomponent %}#toc-visible)
 * option is set to `true`.
 */
let AxisDefaultsCrosshairTooltipComponent = class AxisDefaultsCrosshairTooltipComponent extends AxisDefaultsCrosshairTooltipComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
AxisDefaultsCrosshairTooltipComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-axis-defaults-crosshair-tooltip',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], AxisDefaultsCrosshairTooltipComponent);

/**
 * @hidden
 */
class AxisDefaultsLabelsComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('axisDefaults.labels', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", Function)
], AxisDefaultsLabelsComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsLabelsComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsLabelsComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsLabelsComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AxisDefaultsLabelsComponentGenerated.prototype, "mirror", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsLabelsComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsLabelsComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AxisDefaultsLabelsComponentGenerated.prototype, "skip", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AxisDefaultsLabelsComponentGenerated.prototype, "step", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AxisDefaultsLabelsComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], AxisDefaultsLabelsComponentGenerated.prototype, "visual", void 0);

/**
 * The configuration of the axis labels ([see example]({% slug api_charts_axisdefaultscomponent %})).
 */
let AxisDefaultsLabelsComponent = class AxisDefaultsLabelsComponent extends AxisDefaultsLabelsComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
AxisDefaultsLabelsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-axis-defaults-labels',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], AxisDefaultsLabelsComponent);

/**
 * @hidden
 */
class AxisDefaultsTitleComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('axisDefaults.title', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsTitleComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsTitleComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsTitleComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsTitleComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsTitleComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AxisDefaultsTitleComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsTitleComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AxisDefaultsTitleComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AxisDefaultsTitleComponentGenerated.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AxisDefaultsTitleComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], AxisDefaultsTitleComponentGenerated.prototype, "visual", void 0);

/**
 * The configuration of the axis title ([see example]({% slug api_charts_axisdefaultscomponent %})).
 */
let AxisDefaultsTitleComponent = class AxisDefaultsTitleComponent extends AxisDefaultsTitleComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
AxisDefaultsTitleComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-axis-defaults-title',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], AxisDefaultsTitleComponent);

/**
 * @hidden
 */
class CollectionComponent {
    constructor(configKey, configurationService, collectionService) {
        this.configKey = configKey;
        this.configurationService = configurationService;
        this.collectionService = collectionService;
        this.items = [];
        this.subscription = collectionService.onItemChange$.subscribe(changes => this.processChanges(changes));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterContentInit() {
        this.readItems();
        this.children.changes.subscribe(() => this.readItems());
    }
    processChanges(changes) {
        if (!this.children) {
            return;
        }
        const index = this.children.toArray().indexOf(changes.sender);
        if (index < 0) {
            return;
        }
        this.items[index] = changes.options;
        this.change();
    }
    readItems() {
        this.items = this.children.map(s => s.options);
        this.change();
    }
    change() {
        this.configurationService.notify(new Change(this.configKey, this.items.length === 0 ? undefined : this.items));
    }
}

/**
 * Specifies the `weekStartDay` of a [CategoryAxisItemComponent]({% slug api_charts_categoryaxisitemcomponent %}).
 */
var WeekStartDay;
(function (WeekStartDay) {
    /**
     * Specifies Sunday as the first day of the week.
     */
    WeekStartDay[WeekStartDay["Sunday"] = 0] = "Sunday";
    /**
     * Specifies Monday as the first day of the week.
     */
    WeekStartDay[WeekStartDay["Monday"] = 1] = "Monday";
    /**
     * Specifies Tuesday as the first day of the week.
     */
    WeekStartDay[WeekStartDay["Tuesday"] = 2] = "Tuesday";
    /**
     * Specifies Wednesday as the first day of the week.
     */
    WeekStartDay[WeekStartDay["Wednesday"] = 3] = "Wednesday";
    /**
     * Specifies Thursday as the first day of the week.
     */
    WeekStartDay[WeekStartDay["Thursday"] = 4] = "Thursday";
    /**
     * Specifies Friday as the first day of the week.
     */
    WeekStartDay[WeekStartDay["Friday"] = 5] = "Friday";
    /**
     * Specifies Saturday as the first day of the week.
     */
    WeekStartDay[WeekStartDay["Saturday"] = 6] = "Saturday";
})(WeekStartDay || (WeekStartDay = {}));

/**
 * @hidden
 */
class CategoryAxisItemComponentGenerated extends CollectionItemComponent {
    constructor(configurationService, collectionService, intl, localeId) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
        this.notifyChanges({ weekStartDay: intl.firstDay(localeId) });
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponentGenerated.prototype, "autoBaseUnitSteps", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponentGenerated.prototype, "axisCrossingValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisItemComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisItemComponentGenerated.prototype, "baseUnit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponentGenerated.prototype, "baseUnitStep", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CategoryAxisItemComponentGenerated.prototype, "categories", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisItemComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CategoryAxisItemComponentGenerated.prototype, "justified", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponentGenerated.prototype, "line", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponentGenerated.prototype, "majorGridLines", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponentGenerated.prototype, "majorTicks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponentGenerated.prototype, "max", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CategoryAxisItemComponentGenerated.prototype, "maxDateGroups", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CategoryAxisItemComponentGenerated.prototype, "maxDivisions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponentGenerated.prototype, "min", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponentGenerated.prototype, "minorGridLines", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponentGenerated.prototype, "minorTicks", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisItemComponentGenerated.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisItemComponentGenerated.prototype, "pane", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CategoryAxisItemComponentGenerated.prototype, "plotBands", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CategoryAxisItemComponentGenerated.prototype, "reverse", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CategoryAxisItemComponentGenerated.prototype, "roundToBaseUnit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CategoryAxisItemComponentGenerated.prototype, "startAngle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisItemComponentGenerated.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CategoryAxisItemComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CategoryAxisItemComponentGenerated.prototype, "weekStartDay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponentGenerated.prototype, "crosshair", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponentGenerated.prototype, "labels", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponentGenerated.prototype, "notes", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponentGenerated.prototype, "select", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponentGenerated.prototype, "title", void 0);

/**
 * The configuration component for a category axis ([see example]({% slug axes_chart_charts %})).
 */
let CategoryAxisItemComponent = class CategoryAxisItemComponent extends CategoryAxisItemComponentGenerated {
    constructor(configurationService, collectionService, intl, localeId) {
        super(configurationService, collectionService, intl, localeId);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisItemComponent.prototype, "rangeLabels", void 0);
CategoryAxisItemComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [ConfigurationService],
        selector: 'kendo-chart-category-axis-item',
        template: ''
    }),
    __param(3, Inject(LOCALE_ID)),
    __metadata("design:paramtypes", [ConfigurationService,
        CollectionService,
        IntlService, String])
], CategoryAxisItemComponent);

/**
 * @hidden
 */
class CategoryAxisComponentGenerated extends CollectionComponent {
    constructor(configurationService, collectionService) {
        super('categoryAxis', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
}
__decorate([
    ContentChildren(CategoryAxisItemComponent),
    __metadata("design:type", QueryList)
], CategoryAxisComponentGenerated.prototype, "children", void 0);

/**
 * A collection of one or more category axis items.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-category-axis>
 *         <kendo-chart-category-axis-item [categories]="[2015, 2016]" color="#f00">
 *         </kendo-chart-category-axis-item>
 *       </kendo-chart-category-axis>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item type="line" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 * }
 * ```
 */
let CategoryAxisComponent = class CategoryAxisComponent extends CategoryAxisComponentGenerated {
    // Place custom properties here
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
};
CategoryAxisComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CollectionService],
        selector: 'kendo-chart-category-axis',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        CollectionService])
], CategoryAxisComponent);

/**
 * @hidden
 */
class CategoryAxisCrosshairComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('crosshair', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisCrosshairComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisCrosshairComponentGenerated.prototype, "dashType", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CategoryAxisCrosshairComponentGenerated.prototype, "opacity", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CategoryAxisCrosshairComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CategoryAxisCrosshairComponentGenerated.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisCrosshairComponentGenerated.prototype, "tooltip", void 0);

/**
 * The crosshair configuration options ([see example]({% slug crosshairs_chart_charts %})).
 */
let CategoryAxisCrosshairComponent = class CategoryAxisCrosshairComponent extends CategoryAxisCrosshairComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
CategoryAxisCrosshairComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-category-axis-item-crosshair',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], CategoryAxisCrosshairComponent);

/**
 * @hidden
 */
class CategoryAxisCrosshairTooltipComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('crosshair.tooltip', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisCrosshairTooltipComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisCrosshairTooltipComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisCrosshairTooltipComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisCrosshairTooltipComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisCrosshairTooltipComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisCrosshairTooltipComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CategoryAxisCrosshairTooltipComponentGenerated.prototype, "visible", void 0);

/**
 * The options of the crosshair tooltip ([see example]({% slug crosshairs_chart_charts %})).
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
let CategoryAxisCrosshairTooltipComponent = class CategoryAxisCrosshairTooltipComponent extends CategoryAxisCrosshairTooltipComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
CategoryAxisCrosshairTooltipComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-category-axis-item-crosshair-tooltip',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], CategoryAxisCrosshairTooltipComponent);

/**
 * The configuration of the axis labels ([see example]({% slug labels_chart_charts %})).
 */
let CategoryAxisLabelsComponent = class CategoryAxisLabelsComponent extends SettingsComponent {
    constructor(configurationService) {
        super('labels', configurationService);
        this.configurationService = configurationService;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisLabelsComponent.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisLabelsComponent.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisLabelsComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], CategoryAxisLabelsComponent.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisLabelsComponent.prototype, "culture", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisLabelsComponent.prototype, "dateFormats", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisLabelsComponent.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisLabelsComponent.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisLabelsComponent.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CategoryAxisLabelsComponent.prototype, "mirror", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisLabelsComponent.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisLabelsComponent.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisLabelsComponent.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CategoryAxisLabelsComponent.prototype, "skip", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CategoryAxisLabelsComponent.prototype, "step", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CategoryAxisLabelsComponent.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], CategoryAxisLabelsComponent.prototype, "visual", void 0);
CategoryAxisLabelsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-category-axis-item-labels',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], CategoryAxisLabelsComponent);

/**
 * The configuration of the axis date range labels ([see example]({% slug labels_chart_charts %})).
 */
let CategoryAxisRangeLabelsComponent = class CategoryAxisRangeLabelsComponent extends CategoryAxisLabelsComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.configKey = 'rangeLabels';
        this.markAsVisible();
    }
};
CategoryAxisRangeLabelsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-category-axis-item-range-labels',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], CategoryAxisRangeLabelsComponent);

/**
 * @hidden
 */
class CategoryAxisNotesComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", Array)
], CategoryAxisNotesComponentGenerated.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisNotesComponentGenerated.prototype, "line", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisNotesComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], CategoryAxisNotesComponentGenerated.prototype, "visual", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisNotesComponentGenerated.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisNotesComponentGenerated.prototype, "label", void 0);

/**
 * The configuration of the category axis notes ([see example]({% slug notes_chart_charts %}#toc-axis-notes)).
 */
let CategoryAxisNotesComponent = class CategoryAxisNotesComponent extends CategoryAxisNotesComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
CategoryAxisNotesComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-category-axis-item-notes',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], CategoryAxisNotesComponent);

/**
 * @hidden
 */
class CategoryAxisNotesIconComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes.icon', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisNotesIconComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisNotesIconComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CategoryAxisNotesIconComponentGenerated.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisNotesIconComponentGenerated.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CategoryAxisNotesIconComponentGenerated.prototype, "visible", void 0);

/**
 * The icon of the notes.
 */
let CategoryAxisNotesIconComponent = class CategoryAxisNotesIconComponent extends CategoryAxisNotesIconComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
CategoryAxisNotesIconComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-category-axis-item-notes-icon',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], CategoryAxisNotesIconComponent);

/**
 * @hidden
 */
class CategoryAxisNotesLabelComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes.label', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisNotesLabelComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisNotesLabelComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisNotesLabelComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], CategoryAxisNotesLabelComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisNotesLabelComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisNotesLabelComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisNotesLabelComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CategoryAxisNotesLabelComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CategoryAxisNotesLabelComponentGenerated.prototype, "visible", void 0);

/**
 * The label of the notes.
 */
let CategoryAxisNotesLabelComponent = class CategoryAxisNotesLabelComponent extends CategoryAxisNotesLabelComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
CategoryAxisNotesLabelComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-category-axis-item-notes-label',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], CategoryAxisNotesLabelComponent);

/**
 * @hidden
 */
class CategoryAxisSelectComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('select', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisSelectComponentGenerated.prototype, "from", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisSelectComponentGenerated.prototype, "max", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisSelectComponentGenerated.prototype, "min", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisSelectComponentGenerated.prototype, "mousewheel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisSelectComponentGenerated.prototype, "to", void 0);

/**
 * The selected axis range. If set, the axis selection is enabled. The range is index-based and starts from zero.
 * Categories with indexes in the
 * ([`select.from`]({% slug api_charts_categoryaxisselectcomponent %}#toc-from)
 * &mdash;[`select.to`]({% slug api_charts_categoryaxisselectcomponent %}#toc-to)) range will be selected.
 * This means that the last category in the range will not be included in the selection.
 * If the categories are dates, the range has to be also specified with date values.
 */
let CategoryAxisSelectComponent = class CategoryAxisSelectComponent extends CategoryAxisSelectComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
CategoryAxisSelectComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-category-axis-item-select',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], CategoryAxisSelectComponent);

/**
 * @hidden
 */
class CategoryAxisTitleComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('title', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisTitleComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisTitleComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisTitleComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisTitleComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisTitleComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CategoryAxisTitleComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisTitleComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CategoryAxisTitleComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryAxisTitleComponentGenerated.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CategoryAxisTitleComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], CategoryAxisTitleComponentGenerated.prototype, "visual", void 0);

/**
 * The configuration of the category axis title.
 */
let CategoryAxisTitleComponent = class CategoryAxisTitleComponent extends CategoryAxisTitleComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
CategoryAxisTitleComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-category-axis-item-title',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], CategoryAxisTitleComponent);

/**
 * @hidden
 */
class ChartAreaComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('chartArea', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], ChartAreaComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartAreaComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ChartAreaComponentGenerated.prototype, "height", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartAreaComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ChartAreaComponentGenerated.prototype, "opacity", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ChartAreaComponentGenerated.prototype, "width", void 0);

/**
 * The configuration options of the Chart area.
 * Represents the entire visible area of the Chart
 * ([see example]({% slug chartarea_chart_charts %})).
 */
let ChartAreaComponent = class ChartAreaComponent extends ChartAreaComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
ChartAreaComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-area',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], ChartAreaComponent);

/**
 * @hidden
 */
class LegendComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('legend', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], LegendComponentGenerated.prototype, "align", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LegendComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LegendComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], LegendComponentGenerated.prototype, "height", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LegendComponentGenerated.prototype, "labels", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LegendComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], LegendComponentGenerated.prototype, "offsetX", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], LegendComponentGenerated.prototype, "offsetY", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LegendComponentGenerated.prototype, "orientation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LegendComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LegendComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], LegendComponentGenerated.prototype, "reverse", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], LegendComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], LegendComponentGenerated.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LegendComponentGenerated.prototype, "markers", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], LegendComponentGenerated.prototype, "spacing", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LegendComponentGenerated.prototype, "inactiveItems", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LegendComponentGenerated.prototype, "item", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LegendComponentGenerated.prototype, "title", void 0);

/**
 * The configuration options of the Chart legend
 * ([see example]({% slug legend_chart_charts %})).
 */
let LegendComponent = class LegendComponent extends LegendComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
LegendComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-legend',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], LegendComponent);

/**
 * @hidden
 */
class LegendInactiveItemsComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('legend.inactiveItems', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], LegendInactiveItemsComponentGenerated.prototype, "labels", void 0);

/**
 * The configuration of the inactive Chart legend items.
 *
 * @example
 *
 * ```html-no-run
 * <kendo-chart>
 *   <kendo-chart-legend>
 *      <kendo-chart-legend-inactive-items [labels]="{color: 'pink'}"></kendo-chart-legend-inactive-items>
 *   </kendo-chart-legend>
 * </kendo-chart>
 * ```
 */
let LegendInactiveItemsComponent = class LegendInactiveItemsComponent extends LegendInactiveItemsComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
LegendInactiveItemsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-legend-inactive-items',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], LegendInactiveItemsComponent);

/**
 * @hidden
 */
class LegendItemComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('legend.item', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], LegendItemComponentGenerated.prototype, "cursor", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], LegendItemComponentGenerated.prototype, "visual", void 0);

/**
 * The configuration of the Chart legend item.
 *
 * @example
 *
 * ```html-no-run
 * <kendo-chart>
 *   <kendo-chart-legend>
 *      <kendo-chart-legend-item cursor="crosshair"></kendo-chart-legend-item>
 *   </kendo-chart-legend>
 * </kendo-chart>
 * ```
 */
let LegendItemComponent = class LegendItemComponent extends LegendItemComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
LegendItemComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-legend-item',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], LegendItemComponent);

/**
 * @hidden
 */
class PaneComponentGenerated extends CollectionItemComponent {
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], PaneComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaneComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PaneComponentGenerated.prototype, "clip", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PaneComponentGenerated.prototype, "height", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaneComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PaneComponentGenerated.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaneComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaneComponentGenerated.prototype, "title", void 0);

/**
 * The configuration component for a Chart pane.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *       <kendo-chart>
 *         <kendo-chart-panes>
 *             <kendo-chart-pane name="top" background="pink" [border]="{ color: 'black', dashtype: 'dash', width: 2 }">
 *               <!--            ^^^^^^^^^^
 *                   Unique ID for the pane.
 *               -->
 *             </kendo-chart-pane>
 *             <kendo-chart-pane name="bottom" [height]="150" title="Bottom pane">
 *               <!--                          ^^^^^^^^^^^^^^
 *                   Note that the binding is required,
 *                   otherwise the property will be
 *                   bound to a '100' string.
 *               -->
 *             </kendo-chart-pane>
 *         </kendo-chart-panes>
 *
 *         <kendo-chart-value-axis>
 *             <kendo-chart-value-axis-item name="top">
 *               <!--                       ^^^^^^^^^^
 *                   Unique ID for the axis.
 *                   No need to set a pane as it will use the first,
 *                   'top' pane by default.
 *               -->
 *             </kendo-chart-value-axis-item>
 *             <kendo-chart-value-axis-item name="bottom"
 *                                          pane="bottom">
 *               <!--                       ^^^^^^^^^^^^^
 *                   Move the axis to the bottom pane.
 *               -->
 *             </kendo-chart-value-axis-item>
 *         </kendo-chart-value-axis>
 *         <kendo-chart-series>
 *           <kendo-chart-series-item [data]="seriesData[0]">
 *               <!-- Will use the first, 'top' value axis by default. -->
 *           </kendo-chart-series-item>
 *           <kendo-chart-series-item type="line" [data]="seriesData[1]" axis="bottom">
 *               <!-- Plot this series to the 'bottom' axis.              ^^^^^^^^^^^^^ -->
 *           </kendo-chart-series-item>
 *         </kendo-chart-series>
 *       </kendo-chart>
 *   `
 * })
 * export class AppComponent {
 *   public seriesData: number[][] = [[1, 2, 3, 5], [0, 1, 0, 1]];
 * }
 * ```
 */
let PaneComponent = class PaneComponent extends PaneComponentGenerated {
    // Place custom properties here
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
};
PaneComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [ConfigurationService],
        selector: 'kendo-chart-pane, kendo-chart-panes-item',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        CollectionService])
], PaneComponent);

/**
 * The default options for all chart panes,
 * ([see example]({% slug panes_chart_charts %}#toc-default-panes-configuration)).
 */
let PaneDefaultsComponent = class PaneDefaultsComponent extends SettingsComponent {
    constructor(configurationService) {
        super('paneDefaults', configurationService);
        this.configurationService = configurationService;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], PaneDefaultsComponent.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaneDefaultsComponent.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PaneDefaultsComponent.prototype, "clip", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PaneDefaultsComponent.prototype, "height", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaneDefaultsComponent.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaneDefaultsComponent.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaneDefaultsComponent.prototype, "title", void 0);
PaneDefaultsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-pane-defaults',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], PaneDefaultsComponent);

/**
 * The configuration of the pane default title.
 */
let PaneDefaultsTitleComponent = class PaneDefaultsTitleComponent extends SettingsComponent {
    constructor(configurationService) {
        super('paneDefaults.title', configurationService);
        this.configurationService = configurationService;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], PaneDefaultsTitleComponent.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaneDefaultsTitleComponent.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PaneDefaultsTitleComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PaneDefaultsTitleComponent.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaneDefaultsTitleComponent.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PaneDefaultsTitleComponent.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PaneDefaultsTitleComponent.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], PaneDefaultsTitleComponent.prototype, "visual", void 0);
PaneDefaultsTitleComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-pane-defaults-title',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], PaneDefaultsTitleComponent);

/**
 * @hidden
 */
class PanesComponentGenerated extends CollectionComponent {
    constructor(configurationService, collectionService) {
        super('panes', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
}
__decorate([
    ContentChildren(PaneComponent),
    __metadata("design:type", QueryList)
], PanesComponentGenerated.prototype, "children", void 0);

/**
 * A collection of one or more pane configuration components.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-panes>
 *         <kendo-chart-pane name="topPane">
 *         </kendo-chart-pane>
 *         <kendo-chart-pane name="bottomPane">
 *         </kendo-chart-pane>
 *       </kendo-chart-panes>
 *       <kendo-chart-value-axis>
 *         <kendo-chart-value-axis-item pane="topPane">
 *         </kendo-chart-value-axis-item>
 *         <kendo-chart-value-axis-item name="bottomAxis" pane="bottomPane">
 *         </kendo-chart-value-axis-item>
 *       </kendo-chart-value-axis>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item type="line" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *         <kendo-chart-series-item type="line" [data]="[1, 2, 3, 4]"
 *                                  axis="bottomAxis">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 * }
 *
 * ```
 */
let PanesComponent = class PanesComponent extends PanesComponentGenerated {
    // Place custom properties here
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
};
PanesComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CollectionService],
        selector: 'kendo-chart-panes',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        CollectionService])
], PanesComponent);

/**
 * @hidden
 */
class PanesTitleComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('title', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], PanesTitleComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PanesTitleComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PanesTitleComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PanesTitleComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PanesTitleComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PanesTitleComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PanesTitleComponentGenerated.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PanesTitleComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], PanesTitleComponentGenerated.prototype, "visual", void 0);

/**
 * The configuration of the Chart pane title.
 */
let PanesTitleComponent = class PanesTitleComponent extends PanesTitleComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
PanesTitleComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-pane-title',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], PanesTitleComponent);

/**
 * @hidden
 */
class PlotAreaComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('plotArea', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], PlotAreaComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PlotAreaComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PlotAreaComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PlotAreaComponentGenerated.prototype, "opacity", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PlotAreaComponentGenerated.prototype, "padding", void 0);

/**
 * The configuration options of the plot area
 * ([see example]({% slug plotarea_chart_charts %})).
 * The plot area is the area which displays the series.
 */
let PlotAreaComponent = class PlotAreaComponent extends PlotAreaComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
PlotAreaComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-plot-area',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], PlotAreaComponent);

/**
 * @hidden
 */
class SeriesComponentGenerated extends CollectionComponent {
    constructor(configurationService, collectionService) {
        super('series', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
}
__decorate([
    ContentChildren(SeriesItemComponent),
    __metadata("design:type", QueryList)
], SeriesComponentGenerated.prototype, "children", void 0);

/**
 * A collection of one or more series items.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item type="line" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 * }
 *
 * ```
 */
let SeriesComponent = class SeriesComponent extends SeriesComponentGenerated {
    // Place custom properties here
    constructor(configurationService, collectionService, tooltipTemplateService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
        this.tooltipTemplateService = tooltipTemplateService;
    }
    ngAfterContentChecked() {
        this.readTooltipTemplates();
    }
    readTooltipTemplates() {
        const templates = this.children.map((item) => item.seriesTooltipTemplateRef);
        this.tooltipTemplateService.setSeriesTemplates(templates);
    }
};
SeriesComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CollectionService],
        selector: 'kendo-chart-series',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        CollectionService,
        TooltipTemplateService])
], SeriesComponent);

/**
 * @hidden
 */
class SeriesDefaultsComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('seriesDefaults', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesDefaultsComponentGenerated.prototype, "gap", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsComponentGenerated.prototype, "highlight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsComponentGenerated.prototype, "overlay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesDefaultsComponentGenerated.prototype, "spacing", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsComponentGenerated.prototype, "stack", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsComponentGenerated.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesDefaultsComponentGenerated.prototype, "visual", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsComponentGenerated.prototype, "labels", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsComponentGenerated.prototype, "notes", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsComponentGenerated.prototype, "tooltip", void 0);

/**
 * The default options for all series
 * ([see example]({% slug series_chart_charts %}#toc-default-series-configuration)).
 */
let SeriesDefaultsComponent = class SeriesDefaultsComponent extends SeriesDefaultsComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
SeriesDefaultsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-defaults',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesDefaultsComponent);

/**
 * @hidden
 */
class SeriesDefaultsLabelsComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('seriesDefaults.labels', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsLabelsComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsLabelsComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsLabelsComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesDefaultsLabelsComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsLabelsComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsLabelsComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsLabelsComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsLabelsComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesDefaultsLabelsComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesDefaultsLabelsComponentGenerated.prototype, "visual", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsLabelsComponentGenerated.prototype, "from", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsLabelsComponentGenerated.prototype, "to", void 0);

/**
 * The configuration of the Chart series label.
 */
let SeriesDefaultsLabelsComponent = class SeriesDefaultsLabelsComponent extends SeriesDefaultsLabelsComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
SeriesDefaultsLabelsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-defaults-labels',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesDefaultsLabelsComponent);

/**
 * @hidden
 */
class SeriesDefaultsLabelsFromComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('seriesDefaults.labels.from', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsLabelsFromComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsLabelsFromComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsLabelsFromComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesDefaultsLabelsFromComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsLabelsFromComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsLabelsFromComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsLabelsFromComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsLabelsFromComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesDefaultsLabelsFromComponentGenerated.prototype, "visible", void 0);

/**
 * The `from` label configuration of the Chart series.
 */
let SeriesDefaultsLabelsFromComponent = class SeriesDefaultsLabelsFromComponent extends SeriesDefaultsLabelsFromComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
SeriesDefaultsLabelsFromComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-defaults-labels-from',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesDefaultsLabelsFromComponent);

/**
 * @hidden
 */
class SeriesDefaultsLabelsToComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('seriesDefaults.labels.to', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsLabelsToComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsLabelsToComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsLabelsToComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesDefaultsLabelsToComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsLabelsToComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsLabelsToComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsLabelsToComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsLabelsToComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesDefaultsLabelsToComponentGenerated.prototype, "visible", void 0);

/**
 * The `to` label configuration of the Chart series.
 */
let SeriesDefaultsLabelsToComponent = class SeriesDefaultsLabelsToComponent extends SeriesDefaultsLabelsToComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
SeriesDefaultsLabelsToComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-defaults-labels-to',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesDefaultsLabelsToComponent);

/**
 * @hidden
 */
class SeriesDefaultsNotesComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('seriesDefaults.notes', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsNotesComponentGenerated.prototype, "line", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesDefaultsNotesComponentGenerated.prototype, "visual", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsNotesComponentGenerated.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsNotesComponentGenerated.prototype, "label", void 0);

/**
 * The configuration of the [`seriesDefaults`]({% slug api_charts_seriesdefaultscomponent %}) notes.
 */
let SeriesDefaultsNotesComponent = class SeriesDefaultsNotesComponent extends SeriesDefaultsNotesComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
SeriesDefaultsNotesComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-defaults-notes',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesDefaultsNotesComponent);

/**
 * @hidden
 */
class SeriesDefaultsNotesIconComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('seriesDefaults.notes.icon', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsNotesIconComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsNotesIconComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesDefaultsNotesIconComponentGenerated.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsNotesIconComponentGenerated.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesDefaultsNotesIconComponentGenerated.prototype, "visible", void 0);

/**
 * The icon of the notes.
 */
let SeriesDefaultsNotesIconComponent = class SeriesDefaultsNotesIconComponent extends SeriesDefaultsNotesIconComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
SeriesDefaultsNotesIconComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-defaults-notes-icon',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesDefaultsNotesIconComponent);

/**
 * @hidden
 */
class SeriesDefaultsNotesLabelComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('seriesDefaults.notes.label', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "visible", void 0);

/**
 * The label of the notes.
 */
let SeriesDefaultsNotesLabelComponent = class SeriesDefaultsNotesLabelComponent extends SeriesDefaultsNotesLabelComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
SeriesDefaultsNotesLabelComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-defaults-notes-label',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesDefaultsNotesLabelComponent);

/**
 * @hidden
 */
class SeriesDefaultsTooltipComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('seriesDefaults.tooltip', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsTooltipComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsTooltipComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsTooltipComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsTooltipComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesDefaultsTooltipComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesDefaultsTooltipComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesDefaultsTooltipComponentGenerated.prototype, "visible", void 0);

/**
 * The configuration options of the Chart series tooltip.
 */
let SeriesDefaultsTooltipComponent = class SeriesDefaultsTooltipComponent extends SeriesDefaultsTooltipComponentGenerated {
    // Place custom properties here.
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
SeriesDefaultsTooltipComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-defaults-tooltip',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesDefaultsTooltipComponent);

/**
 * @hidden
 */
class SeriesErrorBarsComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('errorBars', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesErrorBarsComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesErrorBarsComponentGenerated.prototype, "endCaps", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesErrorBarsComponentGenerated.prototype, "line", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesErrorBarsComponentGenerated.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesErrorBarsComponentGenerated.prototype, "visual", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesErrorBarsComponentGenerated.prototype, "xValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesErrorBarsComponentGenerated.prototype, "yValue", void 0);

/**
 * The error bars of the Chart series
 * ([see example]({% slug errorbars_chart_charts %})).
 */
let SeriesErrorBarsComponent = class SeriesErrorBarsComponent extends SeriesErrorBarsComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
SeriesErrorBarsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-error-bars',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesErrorBarsComponent);

/**
 * @hidden
 */
class SeriesExtremesComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('extremes', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesExtremesComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesExtremesComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesExtremesComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesExtremesComponentGenerated.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesExtremesComponentGenerated.prototype, "type", void 0);

/**
 * The configuration of the Chart series extremes.
 * Applies to extreme outliers.
 * For more information, refer to [`series.outliers`]({% slug api_charts_seriesitemcomponent %}#toc-outliers).
 */
let SeriesExtremesComponent = class SeriesExtremesComponent extends SeriesExtremesComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
SeriesExtremesComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-extremes',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesExtremesComponent);

/**
 * @hidden
 */
class SeriesHighlightComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('highlight', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesHighlightComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesHighlightComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesHighlightComponentGenerated.prototype, "line", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesHighlightComponentGenerated.prototype, "markers", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesHighlightComponentGenerated.prototype, "opacity", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesHighlightComponentGenerated.prototype, "toggle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesHighlightComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesHighlightComponentGenerated.prototype, "visual", void 0);

/**
 * The Chart series highlighting configuration options.
 */
let SeriesHighlightComponent = class SeriesHighlightComponent extends SeriesHighlightComponentGenerated {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
SeriesHighlightComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-highlight',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesHighlightComponent);

/**
 * @hidden
 */
class SeriesLabelsComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('labels', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsComponentGenerated.prototype, "align", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesLabelsComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesLabelsComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesLabelsComponentGenerated.prototype, "distance", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesLabelsComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesLabelsComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesLabelsComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesLabelsComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesLabelsComponentGenerated.prototype, "visual", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesLabelsComponentGenerated.prototype, "from", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesLabelsComponentGenerated.prototype, "to", void 0);

/**
 * The configuration of the Chart series label
 * ([see example]({% slug labels_chart_charts %})).
 */
let SeriesLabelsComponent = class SeriesLabelsComponent extends SeriesLabelsComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
SeriesLabelsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-labels',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesLabelsComponent);

/**
 * @hidden
 */
class SeriesLabelsFromComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('labels.from', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsFromComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesLabelsFromComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsFromComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesLabelsFromComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsFromComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsFromComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesLabelsFromComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesLabelsFromComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsFromComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesLabelsFromComponentGenerated.prototype, "visible", void 0);

/**
 * The `from` label configuration of the Chart series.
 */
let SeriesLabelsFromComponent = class SeriesLabelsFromComponent extends SeriesLabelsFromComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
SeriesLabelsFromComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-labels-from',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesLabelsFromComponent);

/**
 * @hidden
 */
class SeriesLabelsToComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('labels.to', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsToComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesLabelsToComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsToComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesLabelsToComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsToComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsToComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesLabelsToComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesLabelsToComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesLabelsToComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesLabelsToComponentGenerated.prototype, "visible", void 0);

/**
 * The `to` label configuration of the Chart series.
 */
let SeriesLabelsToComponent = class SeriesLabelsToComponent extends SeriesLabelsToComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
SeriesLabelsToComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-labels-to',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesLabelsToComponent);

/**
 * @hidden
 */
class SeriesMarkersComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('markers', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesMarkersComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesMarkersComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesMarkersComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesMarkersComponentGenerated.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesMarkersComponentGenerated.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesMarkersComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesMarkersComponentGenerated.prototype, "visual", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesMarkersComponentGenerated.prototype, "from", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesMarkersComponentGenerated.prototype, "to", void 0);

/**
 * The configuration of the Chart series marker.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *       selector: 'my-app',
 *   template: `
 *       <kendo-chart [categoryAxis]="{ categories: categories }">
 *           <kendo-chart-title text="Gross domestic product growth /GDP annual %/"></kendo-chart-title>
 *           <kendo-chart-legend position="bottom" orientation="horizontal"></kendo-chart-legend>
 *           <kendo-chart-tooltip format="{0}%"></kendo-chart-tooltip>
 *           <kendo-chart-series>
 *               <kendo-chart-series-item *ngFor="let item of series"
 *                   type="line"
 *                   style="smooth"
 *                   [data]="item.data"
 *                   [name]="item.name"
 *                   [markers]="item.markers">
 *               </kendo-chart-series-item>
 *           </kendo-chart-series>
 *       </kendo-chart>
 *   `
 * })
 * export class AppComponent {
 * public series: any[] = [{
 *   name: "India",
 *   data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855],
 *   markers: {
 *     background: 'red',
 *     size: 20,
 *     type: 'circle'
 *   }
 * }, {
 *   name: "Russian Federation",
 *   data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3],
 *   markers: {
 *     background: 'yellow',
 *     size: 10,
 *     type: 'square',
 *     rotation: 45
 *   }
 * }, {
 *   name: "Germany",
 *   data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995],
 *   markers: {
 *     background: 'green',
 *     size: 20,
 *     type: 'triangle'
 *   }
 * },{
 *   name: "World",
 *   data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727],
 *   markers: {
 *     background: 'blue',
 *     size: 10,
 *     type: 'cross'
 *   }
 * }];
 * public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
 * }
 * ```
 */
let SeriesMarkersComponent = class SeriesMarkersComponent extends SeriesMarkersComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
SeriesMarkersComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-markers',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesMarkersComponent);

/**
 * @hidden
 */
class SeriesNotesComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesNotesComponentGenerated.prototype, "line", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesNotesComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesNotesComponentGenerated.prototype, "visual", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesNotesComponentGenerated.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesNotesComponentGenerated.prototype, "label", void 0);

/**
 * The series notes configuration
 * ([see example]({% slug notes_chart_charts %})).
 */
let SeriesNotesComponent = class SeriesNotesComponent extends SeriesNotesComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
SeriesNotesComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-notes',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesNotesComponent);

/**
 * @hidden
 */
class SeriesNotesIconComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes.icon', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesNotesIconComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesNotesIconComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesNotesIconComponentGenerated.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesNotesIconComponentGenerated.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesNotesIconComponentGenerated.prototype, "visible", void 0);

/**
 * The icon of the notes.
 */
let SeriesNotesIconComponent = class SeriesNotesIconComponent extends SeriesNotesIconComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
SeriesNotesIconComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-notes-icon',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesNotesIconComponent);

/**
 * @hidden
 */
class SeriesNotesLabelComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes.label', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesNotesLabelComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesNotesLabelComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesNotesLabelComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], SeriesNotesLabelComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesNotesLabelComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesNotesLabelComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesNotesLabelComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesNotesLabelComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SeriesNotesLabelComponentGenerated.prototype, "visible", void 0);

/**
 * The label of the notes.
 */
let SeriesNotesLabelComponent = class SeriesNotesLabelComponent extends SeriesNotesLabelComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
SeriesNotesLabelComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-notes-label',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesNotesLabelComponent);

/**
 * @hidden
 */
class SeriesOutliersComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('outliers', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesOutliersComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SeriesOutliersComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesOutliersComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SeriesOutliersComponentGenerated.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SeriesOutliersComponentGenerated.prototype, "type", void 0);

/**
 * The configuration of the Chart series outliers.
 * Applies to mild outliers.
 * For more information, refer to the [`series.extremes`]({% slug api_charts_seriesitemcomponent %}#toc-extremes) option.
 */
let SeriesOutliersComponent = class SeriesOutliersComponent extends SeriesOutliersComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
SeriesOutliersComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-outliers',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], SeriesOutliersComponent);

/**
 * @hidden
 */
class TitleComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('title', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], TitleComponentGenerated.prototype, "align", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TitleComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TitleComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TitleComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TitleComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TitleComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TitleComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TitleComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TitleComponentGenerated.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TitleComponentGenerated.prototype, "visible", void 0);

/**
 * The configuration options of the Chart title or text
 * ([see example]({% slug title_chart_charts %})).
 *
 * @example
 * ```ts-preview
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *    selector: 'my-app',
 *    template: `
 *        <kendo-chart [categoryAxis]="{ categories: categories }">
 *            <kendo-chart-title text="Gross domestic product growth /GDP annual %/"></kendo-chart-title>
 *            <kendo-chart-legend
 *              position="bottom"
 *              orientation="horizontal"
 *              align="end"
 *              background="rgba(255, 0, 0, 0.1)"
 *              [border]="borderOptions"
 *              [margin]="10"
 *              [padding]="10"
 *              [width]="150"
 *              [offsetX]="11"
 *              [offsetY]="-103"
 *              [reverse]="true"
 *              [visible]="isVisible"
 *              ></kendo-chart-legend>
 *            <kendo-chart-tooltip format="{0}%"></kendo-chart-tooltip>
 *            <kendo-chart-series>
 *                <kendo-chart-series-item *ngFor="let item of series"
 *                    type="line" style="smooth" [data]="item.data" [name]="item.name">
 *                </kendo-chart-series-item>
 *            </kendo-chart-series>
 *        </kendo-chart>
 *        <br /><br />
 *        <button class="k-button" (click)="isVisible=!isVisible">Toggle Legend</button>
 *    `
 * })
 * export class AppComponent {
 *  public isVisible = true;
 *  public borderOptions = {
 *    color: "rgba(255, 0, 0, 0.8)",
 *    dashType: 'dash',
 *    width: 2
 *  };
 *
 * public series: any[] = [{
 *   name: "India",
 *   data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
 * }, {
 *   name: "Russian Federation",
 *   data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
 * }, {
 *   name: "Germany",
 *   data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]
 * },{
 *   name: "World",
 *   data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
 * }];
 *  public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
 * }
 * ```
 */
let TitleComponent = class TitleComponent extends TitleComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
TitleComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-title',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], TitleComponent);

/**
 * @hidden
 */
class TooltipComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('tooltip', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TooltipComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TooltipComponentGenerated.prototype, "opacity", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TooltipComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TooltipComponentGenerated.prototype, "shared", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TooltipComponentGenerated.prototype, "visible", void 0);

/**
 * The configuration options of the Chart series tooltip
 * ([see example]({% slug tooltips_chart_charts %})).
 */
let TooltipComponent = class TooltipComponent extends TooltipComponentGenerated {
    constructor(configurationService, templateService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.templateService = templateService;
        this.markAsVisible();
    }
    ngAfterContentChecked() {
        this.templateService.setTemplate(this.seriesTooltipTemplate ? this.seriesTooltipTemplate.templateRef : null);
        this.templateService.setSharedTemplate(this.sharedTooltipTemplate ? this.sharedTooltipTemplate.templateRef : null);
    }
};
__decorate([
    ContentChild(SeriesTooltipTemplateDirective, { static: false }),
    __metadata("design:type", SeriesTooltipTemplateDirective)
], TooltipComponent.prototype, "seriesTooltipTemplate", void 0);
__decorate([
    ContentChild(SharedTooltipTemplateDirective, { static: false }),
    __metadata("design:type", SharedTooltipTemplateDirective)
], TooltipComponent.prototype, "sharedTooltipTemplate", void 0);
TooltipComponent = __decorate([
    Component({
        selector: 'kendo-chart-tooltip',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        TooltipTemplateService])
], TooltipComponent);

/**
 * @hidden
 */
class ValueAxisItemComponentGenerated extends CollectionItemComponent {
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisItemComponentGenerated.prototype, "axisCrossingValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisItemComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisItemComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisItemComponentGenerated.prototype, "line", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisItemComponentGenerated.prototype, "majorGridLines", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisItemComponentGenerated.prototype, "majorTicks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ValueAxisItemComponentGenerated.prototype, "majorUnit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisItemComponentGenerated.prototype, "max", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisItemComponentGenerated.prototype, "min", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisItemComponentGenerated.prototype, "minorGridLines", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisItemComponentGenerated.prototype, "minorTicks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ValueAxisItemComponentGenerated.prototype, "minorUnit", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisItemComponentGenerated.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ValueAxisItemComponentGenerated.prototype, "narrowRange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisItemComponentGenerated.prototype, "pane", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], ValueAxisItemComponentGenerated.prototype, "plotBands", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ValueAxisItemComponentGenerated.prototype, "reverse", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisItemComponentGenerated.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ValueAxisItemComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisItemComponentGenerated.prototype, "crosshair", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisItemComponentGenerated.prototype, "labels", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisItemComponentGenerated.prototype, "notes", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisItemComponentGenerated.prototype, "title", void 0);

/**
 * The configuration component for a value axis.
 */
let ValueAxisItemComponent = class ValueAxisItemComponent extends ValueAxisItemComponentGenerated {
    // Place custom properties here
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
};
ValueAxisItemComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [ConfigurationService],
        selector: 'kendo-chart-value-axis-item',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        CollectionService])
], ValueAxisItemComponent);

/**
 * @hidden
 */
class ValueAxisComponentGenerated extends CollectionComponent {
    constructor(configurationService, collectionService) {
        super('valueAxis', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
}
__decorate([
    ContentChildren(ValueAxisItemComponent),
    __metadata("design:type", QueryList)
], ValueAxisComponentGenerated.prototype, "children", void 0);

/**
 * A collection of one or more value axis configuration components.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-value-axis>
 *         <kendo-chart-value-axis-item>
 *         </kendo-chart-value-axis-item>
 *         <kendo-chart-value-axis-item name="secondAxis">
 *         </kendo-chart-value-axis-item>
 *       </kendo-chart-value-axis>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item type="line" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *         <kendo-chart-series-item type="line" [data]="[0.1, 0.2, 0.3]"
 *                                  axis="secondAxis">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 * }
 *
 * ```
 */
let ValueAxisComponent = class ValueAxisComponent extends ValueAxisComponentGenerated {
    // Place custom properties here
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
};
ValueAxisComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CollectionService],
        selector: 'kendo-chart-value-axis',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        CollectionService])
], ValueAxisComponent);

/**
 * @hidden
 */
class ValueAxisCrosshairComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('crosshair', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisCrosshairComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ValueAxisCrosshairComponentGenerated.prototype, "opacity", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ValueAxisCrosshairComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ValueAxisCrosshairComponentGenerated.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisCrosshairComponentGenerated.prototype, "tooltip", void 0);

/**
 * The crosshair configuration options ([see example]({% slug crosshairs_chart_charts %})).
 */
let ValueAxisCrosshairComponent = class ValueAxisCrosshairComponent extends ValueAxisCrosshairComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
ValueAxisCrosshairComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-value-axis-item-crosshair',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], ValueAxisCrosshairComponent);

/**
 * @hidden
 */
class ValueAxisCrosshairTooltipComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('crosshair.tooltip', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisCrosshairTooltipComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisCrosshairTooltipComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisCrosshairTooltipComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisCrosshairTooltipComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisCrosshairTooltipComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisCrosshairTooltipComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ValueAxisCrosshairTooltipComponentGenerated.prototype, "visible", void 0);

/**
 * The configuration options of the crosshair tooltip ([see example]({% slug crosshairs_chart_charts %})).
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
let ValueAxisCrosshairTooltipComponent = class ValueAxisCrosshairTooltipComponent extends ValueAxisCrosshairTooltipComponentGenerated {
    // Place custom properties here.
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
ValueAxisCrosshairTooltipComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-value-axis-item-crosshair-tooltip',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], ValueAxisCrosshairTooltipComponent);

/**
 * @hidden
 */
class ValueAxisLabelsComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('labels', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisLabelsComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisLabelsComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisLabelsComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], ValueAxisLabelsComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisLabelsComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisLabelsComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisLabelsComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ValueAxisLabelsComponentGenerated.prototype, "mirror", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisLabelsComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisLabelsComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisLabelsComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ValueAxisLabelsComponentGenerated.prototype, "skip", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ValueAxisLabelsComponentGenerated.prototype, "step", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ValueAxisLabelsComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], ValueAxisLabelsComponentGenerated.prototype, "visual", void 0);

/**
 * The axis labels configuration.
 */
let ValueAxisLabelsComponent = class ValueAxisLabelsComponent extends ValueAxisLabelsComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
ValueAxisLabelsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-value-axis-item-labels',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], ValueAxisLabelsComponent);

/**
 * @hidden
 */
class ValueAxisNotesComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", Array)
], ValueAxisNotesComponentGenerated.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisNotesComponentGenerated.prototype, "line", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisNotesComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], ValueAxisNotesComponentGenerated.prototype, "visual", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisNotesComponentGenerated.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisNotesComponentGenerated.prototype, "label", void 0);

/**
 * The configuration of the value axis notes ([see example]({% slug notes_chart_charts %}#toc-axis-notes)).
 */
let ValueAxisNotesComponent = class ValueAxisNotesComponent extends ValueAxisNotesComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
ValueAxisNotesComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-value-axis-item-notes',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], ValueAxisNotesComponent);

/**
 * @hidden
 */
class ValueAxisNotesIconComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes.icon', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisNotesIconComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisNotesIconComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ValueAxisNotesIconComponentGenerated.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisNotesIconComponentGenerated.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ValueAxisNotesIconComponentGenerated.prototype, "visible", void 0);

/**
 * The icon of the notes.
 */
let ValueAxisNotesIconComponent = class ValueAxisNotesIconComponent extends ValueAxisNotesIconComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
ValueAxisNotesIconComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-value-axis-item-notes-icon',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], ValueAxisNotesIconComponent);

/**
 * @hidden
 */
class ValueAxisNotesLabelComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes.label', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisNotesLabelComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisNotesLabelComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisNotesLabelComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], ValueAxisNotesLabelComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisNotesLabelComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisNotesLabelComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisNotesLabelComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ValueAxisNotesLabelComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ValueAxisNotesLabelComponentGenerated.prototype, "visible", void 0);

/**
 * The label of the notes.
 */
let ValueAxisNotesLabelComponent = class ValueAxisNotesLabelComponent extends ValueAxisNotesLabelComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
ValueAxisNotesLabelComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-value-axis-item-notes-label',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], ValueAxisNotesLabelComponent);

/**
 * @hidden
 */
class ValueAxisTitleComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('title', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisTitleComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisTitleComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisTitleComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisTitleComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisTitleComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ValueAxisTitleComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisTitleComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ValueAxisTitleComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ValueAxisTitleComponentGenerated.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ValueAxisTitleComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], ValueAxisTitleComponentGenerated.prototype, "visual", void 0);

/**
 * The title configuration of the value axis.
 */
let ValueAxisTitleComponent = class ValueAxisTitleComponent extends ValueAxisTitleComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
ValueAxisTitleComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-value-axis-item-title',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], ValueAxisTitleComponent);

/**
 * @hidden
 */
class XAxisItemComponentGenerated extends CollectionItemComponent {
    constructor(configurationService, collectionService, intl, localeId) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
        this.notifyChanges({ weekStartDay: intl.firstDay(localeId) });
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisItemComponentGenerated.prototype, "axisCrossingValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisItemComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisItemComponentGenerated.prototype, "baseUnit", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisItemComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisItemComponentGenerated.prototype, "line", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisItemComponentGenerated.prototype, "majorGridLines", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisItemComponentGenerated.prototype, "majorTicks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], XAxisItemComponentGenerated.prototype, "majorUnit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisItemComponentGenerated.prototype, "max", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisItemComponentGenerated.prototype, "min", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisItemComponentGenerated.prototype, "minorGridLines", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisItemComponentGenerated.prototype, "minorTicks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], XAxisItemComponentGenerated.prototype, "minorUnit", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisItemComponentGenerated.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], XAxisItemComponentGenerated.prototype, "narrowRange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisItemComponentGenerated.prototype, "pane", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], XAxisItemComponentGenerated.prototype, "plotBands", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], XAxisItemComponentGenerated.prototype, "reverse", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], XAxisItemComponentGenerated.prototype, "startAngle", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisItemComponentGenerated.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], XAxisItemComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], XAxisItemComponentGenerated.prototype, "weekStartDay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisItemComponentGenerated.prototype, "crosshair", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisItemComponentGenerated.prototype, "labels", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisItemComponentGenerated.prototype, "notes", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisItemComponentGenerated.prototype, "title", void 0);

/**
 * The configuration component for an X axis
 * ([see example]({% slug api_charts_xaxiscomponent %})).
 */
let XAxisItemComponent = class XAxisItemComponent extends XAxisItemComponentGenerated {
    constructor(configurationService, collectionService, intl, localeId) {
        super(configurationService, collectionService, intl, localeId);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
        this.intl = intl;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], XAxisItemComponent.prototype, "categories", void 0);
XAxisItemComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [ConfigurationService],
        selector: 'kendo-chart-x-axis-item',
        template: ''
    }),
    __param(3, Inject(LOCALE_ID)),
    __metadata("design:paramtypes", [ConfigurationService,
        CollectionService,
        IntlService, String])
], XAxisItemComponent);

/**
 * @hidden
 */
class XAxisComponentGenerated extends CollectionComponent {
    constructor(configurationService, collectionService) {
        super('xAxis', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
}
__decorate([
    ContentChildren(XAxisItemComponent),
    __metadata("design:type", QueryList)
], XAxisComponentGenerated.prototype, "children", void 0);

/**
 * A collection of one or more X-axis configuration components.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *  selector: 'my-app',
 * template: `
 *   <kendo-chart>
 *     <kendo-chart-x-axis>
 *       <kendo-chart-x-axis-item
 *         [background]="'rgba(100, 100, 100, 0.2)'"
 *         color="red"
 *         [notes]="notesConfig"
 *         [crosshair]="crosshairConfig">
 *       </kendo-chart-x-axis-item>
 *       <kendo-chart-x-axis-item name="secondAxis">
 *       </kendo-chart-x-axis-item>
 *     </kendo-chart-x-axis>
 *     <kendo-chart-series>
 *       <kendo-chart-series-item type="scatter" [data]="[[1, 2]]">
 *       </kendo-chart-series-item>
 *       <kendo-chart-series-item type="scatter" [data]="[[0.1, 0.2]]"
 *                                xAxis="secondAxis">
 *       </kendo-chart-series-item>
 *     </kendo-chart-series>
 *   </kendo-chart>
 * `
 * })
 * export class AppComponent {
 * public notesConfig = {
 *   data: [{
 *       value: 0.2,
 *       text: "foo"
 *     }, {
 *       value: 0.8,
 *       text: "bar"
 *     }],
 *   label: {
 *     content: (args: any) => args.dataItem.text,
 *     background: 'red',
 *     color: 'white'
 *   },
 *   line: {
 *     color: 'blue',
 *     dashType: 'dash',
 *     length: 150,
 *     width: 2
 *   },
 *   position: 'top'
 * };
 *
 * public crosshairConfig = {
 *   color: 'green',
 *   opacity: 0.8,
 *   visible: true,
 *   width: 3
 * };
 * }
 *
 * ```
 */
let XAxisComponent = class XAxisComponent extends XAxisComponentGenerated {
    // Place custom properties here
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
};
XAxisComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CollectionService],
        selector: 'kendo-chart-x-axis',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        CollectionService])
], XAxisComponent);

/**
 * @hidden
 */
class XAxisCrosshairComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('crosshair', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisCrosshairComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], XAxisCrosshairComponentGenerated.prototype, "opacity", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], XAxisCrosshairComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], XAxisCrosshairComponentGenerated.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisCrosshairComponentGenerated.prototype, "tooltip", void 0);

/**
 * The crosshair configuration options
 * ([see example]({% slug api_charts_xaxiscomponent %})).
 */
let XAxisCrosshairComponent = class XAxisCrosshairComponent extends XAxisCrosshairComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
XAxisCrosshairComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-x-axis-item-crosshair',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], XAxisCrosshairComponent);

/**
 * @hidden
 */
class XAxisCrosshairTooltipComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('crosshair.tooltip', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisCrosshairTooltipComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisCrosshairTooltipComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisCrosshairTooltipComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisCrosshairTooltipComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisCrosshairTooltipComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisCrosshairTooltipComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], XAxisCrosshairTooltipComponentGenerated.prototype, "visible", void 0);

/**
 * The configuration options of the crosshair tooltip.
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
let XAxisCrosshairTooltipComponent = class XAxisCrosshairTooltipComponent extends XAxisCrosshairTooltipComponentGenerated {
    // Place custom properties here.
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
XAxisCrosshairTooltipComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-x-axis-item-crosshair-tooltip',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], XAxisCrosshairTooltipComponent);

/**
 * @hidden
 */
class XAxisLabelsComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('labels', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisLabelsComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisLabelsComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisLabelsComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], XAxisLabelsComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisLabelsComponentGenerated.prototype, "culture", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisLabelsComponentGenerated.prototype, "dateFormats", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisLabelsComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisLabelsComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisLabelsComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], XAxisLabelsComponentGenerated.prototype, "mirror", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisLabelsComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisLabelsComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisLabelsComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], XAxisLabelsComponentGenerated.prototype, "skip", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], XAxisLabelsComponentGenerated.prototype, "step", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], XAxisLabelsComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], XAxisLabelsComponentGenerated.prototype, "visual", void 0);

/**
 * The axis labels configuration.
 */
let XAxisLabelsComponent = class XAxisLabelsComponent extends XAxisLabelsComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
XAxisLabelsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-x-axis-item-labels',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], XAxisLabelsComponent);

/**
 * @hidden
 */
class XAxisNotesComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", Array)
], XAxisNotesComponentGenerated.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisNotesComponentGenerated.prototype, "line", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisNotesComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], XAxisNotesComponentGenerated.prototype, "visual", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisNotesComponentGenerated.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisNotesComponentGenerated.prototype, "label", void 0);

/**
 * The configuration of the X-axis notes.
 * For an example on the basic usage of the XAxisNotesComponent,
 * refer to the [demo on the XAxisComponent]({% slug api_charts_xaxiscomponent %})
 * or to the documentation about the
 * [axis notes]({% slug notes_chart_charts %}#toc-axis-notes).
 */
let XAxisNotesComponent = class XAxisNotesComponent extends XAxisNotesComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
XAxisNotesComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-x-axis-item-notes',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], XAxisNotesComponent);

/**
 * @hidden
 */
class XAxisNotesIconComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes.icon', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisNotesIconComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisNotesIconComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], XAxisNotesIconComponentGenerated.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisNotesIconComponentGenerated.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], XAxisNotesIconComponentGenerated.prototype, "visible", void 0);

/**
 * The icon of the notes.
 */
let XAxisNotesIconComponent = class XAxisNotesIconComponent extends XAxisNotesIconComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
XAxisNotesIconComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-x-axis-item-notes-icon',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], XAxisNotesIconComponent);

/**
 * @hidden
 */
class XAxisNotesLabelComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes.label', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisNotesLabelComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisNotesLabelComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisNotesLabelComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], XAxisNotesLabelComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisNotesLabelComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisNotesLabelComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisNotesLabelComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], XAxisNotesLabelComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], XAxisNotesLabelComponentGenerated.prototype, "visible", void 0);

/**
 * The label of the notes.
 */
let XAxisNotesLabelComponent = class XAxisNotesLabelComponent extends XAxisNotesLabelComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
XAxisNotesLabelComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-x-axis-item-notes-label',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], XAxisNotesLabelComponent);

/**
 * @hidden
 */
class XAxisTitleComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('title', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisTitleComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisTitleComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisTitleComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisTitleComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisTitleComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], XAxisTitleComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisTitleComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], XAxisTitleComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], XAxisTitleComponentGenerated.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], XAxisTitleComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], XAxisTitleComponentGenerated.prototype, "visual", void 0);

/**
 * The title configuration of the Scatter Chart X axis.
 */
let XAxisTitleComponent = class XAxisTitleComponent extends XAxisTitleComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
XAxisTitleComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-x-axis-item-title',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], XAxisTitleComponent);

/**
 * @hidden
 */
class YAxisItemComponentGenerated extends CollectionItemComponent {
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisItemComponentGenerated.prototype, "axisCrossingValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisItemComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisItemComponentGenerated.prototype, "baseUnit", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisItemComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisItemComponentGenerated.prototype, "line", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisItemComponentGenerated.prototype, "majorGridLines", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisItemComponentGenerated.prototype, "majorTicks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], YAxisItemComponentGenerated.prototype, "majorUnit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisItemComponentGenerated.prototype, "max", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisItemComponentGenerated.prototype, "min", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisItemComponentGenerated.prototype, "minorGridLines", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisItemComponentGenerated.prototype, "minorTicks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], YAxisItemComponentGenerated.prototype, "minorUnit", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisItemComponentGenerated.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YAxisItemComponentGenerated.prototype, "narrowRange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisItemComponentGenerated.prototype, "pane", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], YAxisItemComponentGenerated.prototype, "plotBands", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YAxisItemComponentGenerated.prototype, "reverse", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisItemComponentGenerated.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YAxisItemComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisItemComponentGenerated.prototype, "crosshair", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisItemComponentGenerated.prototype, "labels", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisItemComponentGenerated.prototype, "notes", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisItemComponentGenerated.prototype, "title", void 0);

/**
 * The configuration component for the Y axis
 * ([see example]({% slug api_charts_yaxiscomponent %})).
 */
let YAxisItemComponent = class YAxisItemComponent extends YAxisItemComponentGenerated {
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], YAxisItemComponent.prototype, "categories", void 0);
YAxisItemComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [ConfigurationService],
        selector: 'kendo-chart-y-axis-item',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        CollectionService])
], YAxisItemComponent);

/**
 * @hidden
 */
class YAxisComponentGenerated extends CollectionComponent {
    constructor(configurationService, collectionService) {
        super('yAxis', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
}
__decorate([
    ContentChildren(YAxisItemComponent),
    __metadata("design:type", QueryList)
], YAxisComponentGenerated.prototype, "children", void 0);

/**
 * A collection of one or more Y-axis configuration components.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *  selector: 'my-app',
 *  template: `
 *    <kendo-chart>
 *     <kendo-chart-y-axis>
 *       <kendo-chart-y-axis-item
 *         [background]="'rgba(100, 100, 100, 0.2)'"
 *         color="red"
 *         [notes]="notesConfig"
 *         [crosshair]="crosshairConfig">
 *       </kendo-chart-y-axis-item>
 *       <kendo-chart-y-axis-item name="secondAxis">
 *       </kendo-chart-y-axis-item>
 *     </kendo-chart-y-axis>
 *     <kendo-chart-series>
 *       <kendo-chart-series-item type="scatter" [data]="[[1, 2]]">
 *       </kendo-chart-series-item>
 *       <kendo-chart-series-item type="scatter" [data]="[[0.1, 0.2]]"
 *                                yAxis="secondAxis">
 *       </kendo-chart-series-item>
 *     </kendo-chart-series>
 *   </kendo-chart>
 * `
 * })
 * export class AppComponent {
 * public notesConfig = {
 *   data: [{
 *       value: 0.2,
 *       text: "foo"
 *     }, {
 *       value: 0.8,
 *       text: "bar"
 *     }],
 *    label: {
 *     content: (args: any) => args.dataItem.text,
 *     background: 'red',
 *     color: 'white'
 *   },
 *   line: {
 *     color: 'blue',
 *     dashType: 'dash',
 *     length: 150,
 *     width: 2
 *   },
 *   position: 'top'
 * };
 *
 * public crosshairConfig = {
 *   color: 'green',
 *   opacity: 0.8,
 *   visible: true,
 *   width: 3
 * };
 * }
 *
 * ```
 */
let YAxisComponent = class YAxisComponent extends YAxisComponentGenerated {
    // Place custom properties here
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
};
YAxisComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CollectionService],
        selector: 'kendo-chart-y-axis',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        CollectionService])
], YAxisComponent);

/**
 * @hidden
 */
class YAxisCrosshairComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('crosshair', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisCrosshairComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], YAxisCrosshairComponentGenerated.prototype, "opacity", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YAxisCrosshairComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], YAxisCrosshairComponentGenerated.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisCrosshairComponentGenerated.prototype, "tooltip", void 0);

/**
 * The crosshair configuration options
 * ([see example]({% slug api_charts_yaxiscomponent %})).
 */
let YAxisCrosshairComponent = class YAxisCrosshairComponent extends YAxisCrosshairComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
YAxisCrosshairComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-y-axis-item-crosshair',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], YAxisCrosshairComponent);

/**
 * @hidden
 */
class YAxisCrosshairTooltipComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('crosshair.tooltip', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisCrosshairTooltipComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisCrosshairTooltipComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisCrosshairTooltipComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisCrosshairTooltipComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisCrosshairTooltipComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisCrosshairTooltipComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YAxisCrosshairTooltipComponentGenerated.prototype, "visible", void 0);

/**
 * The configuration options of the crosshair tooltip.
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
let YAxisCrosshairTooltipComponent = class YAxisCrosshairTooltipComponent extends YAxisCrosshairTooltipComponentGenerated {
    // Place custom properties here.
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
YAxisCrosshairTooltipComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-y-axis-item-crosshair-tooltip',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], YAxisCrosshairTooltipComponent);

/**
 * @hidden
 */
class YAxisLabelsComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('labels', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisLabelsComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisLabelsComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisLabelsComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], YAxisLabelsComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisLabelsComponentGenerated.prototype, "culture", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisLabelsComponentGenerated.prototype, "dateFormats", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisLabelsComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisLabelsComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisLabelsComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YAxisLabelsComponentGenerated.prototype, "mirror", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisLabelsComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisLabelsComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisLabelsComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], YAxisLabelsComponentGenerated.prototype, "skip", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], YAxisLabelsComponentGenerated.prototype, "step", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YAxisLabelsComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], YAxisLabelsComponentGenerated.prototype, "visual", void 0);

/**
 * The axis labels configuration.
 */
let YAxisLabelsComponent = class YAxisLabelsComponent extends YAxisLabelsComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
YAxisLabelsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-y-axis-item-labels',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], YAxisLabelsComponent);

/**
 * @hidden
 */
class YAxisNotesComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", Array)
], YAxisNotesComponentGenerated.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisNotesComponentGenerated.prototype, "line", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisNotesComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], YAxisNotesComponentGenerated.prototype, "visual", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisNotesComponentGenerated.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisNotesComponentGenerated.prototype, "label", void 0);

/**
 * The configuration of the Y axis notes
 * ([see example]({% slug api_charts_yaxiscomponent %})).
 */
let YAxisNotesComponent = class YAxisNotesComponent extends YAxisNotesComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
YAxisNotesComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-y-axis-item-notes',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], YAxisNotesComponent);

/**
 * @hidden
 */
class YAxisNotesIconComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes.icon', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisNotesIconComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisNotesIconComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], YAxisNotesIconComponentGenerated.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisNotesIconComponentGenerated.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YAxisNotesIconComponentGenerated.prototype, "visible", void 0);

/**
 * The icon of the notes.
 */
let YAxisNotesIconComponent = class YAxisNotesIconComponent extends YAxisNotesIconComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
YAxisNotesIconComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-y-axis-item-notes-icon',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], YAxisNotesIconComponent);

/**
 * @hidden
 */
class YAxisNotesLabelComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes.label', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisNotesLabelComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisNotesLabelComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisNotesLabelComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], YAxisNotesLabelComponentGenerated.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisNotesLabelComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisNotesLabelComponentGenerated.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisNotesLabelComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], YAxisNotesLabelComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YAxisNotesLabelComponentGenerated.prototype, "visible", void 0);

/**
 * The label of the notes.
 */
let YAxisNotesLabelComponent = class YAxisNotesLabelComponent extends YAxisNotesLabelComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
YAxisNotesLabelComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-y-axis-item-notes-label',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], YAxisNotesLabelComponent);

/**
 * @hidden
 */
class YAxisTitleComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('title', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisTitleComponentGenerated.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisTitleComponentGenerated.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisTitleComponentGenerated.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisTitleComponentGenerated.prototype, "font", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisTitleComponentGenerated.prototype, "margin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], YAxisTitleComponentGenerated.prototype, "padding", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisTitleComponentGenerated.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], YAxisTitleComponentGenerated.prototype, "rotation", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], YAxisTitleComponentGenerated.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], YAxisTitleComponentGenerated.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], YAxisTitleComponentGenerated.prototype, "visual", void 0);

/**
 * The title configuration of the Scatter Chart Y axis.
 */
let YAxisTitleComponent = class YAxisTitleComponent extends YAxisTitleComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
YAxisTitleComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-y-axis-item-title',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], YAxisTitleComponent);

/**
 * @hidden
 */
class ZoomableComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('zoomable', configurationService);
        this.configurationService = configurationService;
    }
}
__decorate([
    Input(),
    __metadata("design:type", Object)
], ZoomableComponentGenerated.prototype, "mousewheel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ZoomableComponentGenerated.prototype, "selection", void 0);

/**
 * Specifies if the Chart can be zoomed.
 *
 * @example
 *
 * ```html-no-run
 * <kendo-chart>
 *   <kendo-chart-zoomable [mousewheel]="false"></kendo-chart-zoomable>
 * </kendo-chart>
 * ```
 */
let ZoomableComponent = class ZoomableComponent extends ZoomableComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
ZoomableComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-zoomable',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], ZoomableComponent);

/**
 * @hidden
 */
const CHART_DIRECTIVES = [
    ChartComponent,
    TooltipPopupComponent,
    SeriesTooltipTemplateDirective,
    SharedTooltipTemplateDirective,
    CrosshairTooltipsContainerComponent,
    CrosshairTooltipComponent,
    DonutCenterTemplateDirective,
    AxisDefaultsComponent,
    AxisDefaultsCrosshairComponent,
    AxisDefaultsCrosshairTooltipComponent,
    AxisDefaultsLabelsComponent,
    AxisDefaultsTitleComponent,
    CategoryAxisComponent,
    CategoryAxisCrosshairComponent,
    CategoryAxisCrosshairTooltipComponent,
    CategoryAxisItemComponent,
    CategoryAxisLabelsComponent,
    CategoryAxisRangeLabelsComponent,
    CategoryAxisNotesComponent,
    CategoryAxisNotesIconComponent,
    CategoryAxisNotesLabelComponent,
    CategoryAxisSelectComponent,
    CategoryAxisTitleComponent,
    ChartAreaComponent,
    LegendComponent,
    LegendInactiveItemsComponent,
    LegendItemComponent,
    PaneComponent,
    PaneDefaultsComponent,
    PaneDefaultsTitleComponent,
    PanesComponent,
    PanesTitleComponent,
    PlotAreaComponent,
    SeriesComponent,
    SeriesDefaultsComponent,
    SeriesDefaultsLabelsComponent,
    SeriesDefaultsLabelsFromComponent,
    SeriesDefaultsLabelsToComponent,
    SeriesDefaultsNotesComponent,
    SeriesDefaultsNotesIconComponent,
    SeriesDefaultsNotesLabelComponent,
    SeriesDefaultsTooltipComponent,
    SeriesErrorBarsComponent,
    SeriesExtremesComponent,
    SeriesHighlightComponent,
    SeriesItemComponent,
    SeriesLabelsComponent,
    SeriesLabelsFromComponent,
    SeriesLabelsToComponent,
    SeriesMarkersComponent,
    SeriesNotesComponent,
    SeriesNotesIconComponent,
    SeriesNotesLabelComponent,
    SeriesOutliersComponent,
    SeriesTooltipComponent,
    TitleComponent,
    TooltipComponent,
    ValueAxisComponent,
    ValueAxisCrosshairComponent,
    ValueAxisCrosshairTooltipComponent,
    ValueAxisItemComponent,
    ValueAxisLabelsComponent,
    ValueAxisNotesComponent,
    ValueAxisNotesIconComponent,
    ValueAxisNotesLabelComponent,
    ValueAxisTitleComponent,
    XAxisComponent,
    XAxisCrosshairComponent,
    XAxisCrosshairTooltipComponent,
    XAxisItemComponent,
    XAxisLabelsComponent,
    XAxisNotesComponent,
    XAxisNotesIconComponent,
    XAxisNotesLabelComponent,
    XAxisTitleComponent,
    YAxisComponent,
    YAxisCrosshairComponent,
    YAxisCrosshairTooltipComponent,
    YAxisItemComponent,
    YAxisLabelsComponent,
    YAxisNotesComponent,
    YAxisNotesIconComponent,
    YAxisNotesLabelComponent,
    YAxisTitleComponent,
    ZoomableComponent
];

// Re-export event types

/**
 * The arguments for the `navigatorFilter` event.
 */
class NavigatorFilterEvent extends BaseEvent {
    /**
     * Constructs the event arguments from a raw object.
     */
    constructor(e, sender) {
        super(sender);
        this.from = e.from;
        this.to = e.to;
    }
}

// Re-export event types

/**
 * @hidden
 */
let RootConfigurationService = class RootConfigurationService extends ConfigurationService {
};
RootConfigurationService = __decorate([
    Injectable()
], RootConfigurationService);

const EVENT_MAP$1 = {
    navigatorFilter: NavigatorFilterEvent
};
/**
 * @hidden
 */
class StockInstanceEventService extends InstanceEventService {
    create(name, args, sender) {
        if (EVENT_MAP$1[name]) {
            return new EVENT_MAP$1[name](args, sender);
        }
        return super.create(name, args, sender);
    }
}

const NAVIGATOR_DEFAULTS = {
    autoBindElements: true,
    liveDrag: false,
    partialRedraw: true
};
/* tslint:disable:no-access-missing-member */
/**
 * The root StockChart component.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-stockchart>
 *         <kendo-chart-series>
 *             <kendo-chart-series-item type="line" [data]="data" field="value" categoryField="date">
 *             </kendo-chart-series-item>
 *         </kendo-chart-series>
 *         <kendo-chart-navigator>
 *             <kendo-chart-navigator-select to="2017/02/01">
 *             </kendo-chart-navigator-select>
 *             <kendo-chart-navigator-series>
 *                 <kendo-chart-navigator-series-item type="area" [data]="data" field="value" categoryField="date">
 *                 </kendo-chart-navigator-series-item>
 *             </kendo-chart-navigator-series>
 *         </kendo-chart-navigator>
 *     </kendo-stockchart>
 *   `
 * })
 * class AppComponent {
 *   public data: any[] = [];
 *
 *   constructor() {
 *      for (let idx = 0; idx < 100; idx++) {
 *          this.data.push({
 *              date: new Date(2017, 0, idx),
 *              value: Math.random() * 100
 *          });
 *      }
 *   }
 * }
 *
 * ```
 */
let StockChartComponent = class StockChartComponent extends ChartComponent {
    constructor(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer) {
        super(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer);
        this.configurationService = configurationService;
        this.themeService = themeService;
        this.element = element;
        this.intl = intl;
        this.localizationService = localizationService;
        this.ngZone = ngZone;
        this.instanceEventService = instanceEventService;
        this.changeDetector = changeDetector;
        this.renderer = renderer;
        /**
         * Fires when the navigator range is changed.
         */
        this.navigatorFilter = new EventEmitter();
        this.redrawSlaves = false;
        this.hostClasses = ['k-chart', 'k-stockchart'];
        validatePackage(packageMetadata);
    }
    /**
     * If called, the navigator pane is not redrawn the next time the StockChart options are updated.
     * The method is useful if you need to update only the main series data for the selected period.
     */
    skipNavigatorRedraw() {
        this.redrawSlaves = true;
    }
    createInstance(element, observer) {
        this.applyNavigatorDefaults();
        if (this.isDevMode() && (this.options.zoomable || this.options.pannable)) {
            throw new Error('The pannable and zoomable options are not supported by the StockChart component.');
        }
        this.instance = new StockChart(element, this.options, this.theme, {
            intlService: this.intl,
            observer: observer,
            rtl: this.rtl,
            sender: this
        });
    }
    updateOptions() {
        this.applyNavigatorDefaults();
        if (this.redrawSlaves) {
            this.instance.applyOptions(this.options);
            this.instance.bindCategories();
            this.instance.navigator.redrawSlaves();
        }
        else {
            this.instance.setOptions(this.options);
        }
        this.redrawSlaves = false;
    }
    applyNavigatorDefaults() {
        this.options.navigator = Object.assign({}, this.options.navigator, NAVIGATOR_DEFAULTS);
    }
    isDevMode() {
        return isDevMode();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], StockChartComponent.prototype, "navigator", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], StockChartComponent.prototype, "pannable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], StockChartComponent.prototype, "zoomable", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], StockChartComponent.prototype, "navigatorFilter", void 0);
StockChartComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        exportAs: 'kendoStockChart',
        providers: [
            ConfigurationService,
            TooltipTemplateService,
            { provide: RootConfigurationService, useExisting: ConfigurationService },
            StockInstanceEventService,
            LocalizationService,
            {
                provide: L10N_PREFIX,
                useValue: 'kendo.chart'
            }
        ],
        selector: 'kendo-stockchart',
        template: `
        <div #surface class="k-chart-surface"></div>
        <kendo-chart-crosshair-tooltips-container [popupSettings]="popupSettings">
        </kendo-chart-crosshair-tooltips-container>
        <kendo-chart-tooltip-popup (leave)="tooltipMouseleave($event)" [popupSettings]="popupSettings">
        </kendo-chart-tooltip-popup>
        <kendo-resize-sensor (resize)="onResize($event)"></kendo-resize-sensor>
    `
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        ThemeService,
        ElementRef,
        IntlService,
        LocalizationService,
        NgZone,
        StockInstanceEventService,
        ChangeDetectorRef,
        Renderer2])
], StockChartComponent);

/**
 * @hidden
 */
const PREFIX = new InjectionToken('configuration prefix');
/**
 * @hidden
 */
let PrefixConfigurationService = class PrefixConfigurationService extends ConfigurationService {
    constructor(rootService, prefix, ngZone) {
        super(ngZone);
        this.rootService = rootService;
        this.prefix = prefix;
    }
    push(store) {
        this.rootService.notify(new Change(this.prefix, store));
    }
    notify(change) {
        change.key = this.prefix + (change.key ? `.${change.key}` : '');
        this.rootService.notify(change);
    }
};
PrefixConfigurationService = __decorate([
    Injectable(),
    __param(0, Inject(RootConfigurationService)),
    __param(1, Inject(PREFIX)),
    __metadata("design:paramtypes", [RootConfigurationService, String, NgZone])
], PrefixConfigurationService);

/**
 * The configuration options of the navigator
 * ([see runnable example]({% slug overview_stockchart_charts %}#toc-navigator)).
 *
 * @example
 * ```ts-no-run
 * _@Component({
 *     selector: 'my-app',
 *       template: `
 *         <kendo-stockchart (navigatorFilter)="onNavigatorFilter($event)">
 *             <kendo-chart-series>
 *                <kendo-chart-series-item
 *                type="candlestick"
 *                 [data]="seriesData"
 *                 openField="Open"
 *                 closeField="Close"
 *                 lowField="Low"
 *                 highField="High"
 *                 categoryField="Date">
 *             </kendo-chart-series-item>
 *          </kendo-chart-series>
 *          <kendo-chart-navigator
 *            [categoryAxis]="categoryAxisOptions"
 *            [hint]="hintOptions"
 *            [pane]="paneOptions"
 *            [visible]="isVisible">
 *            <kendo-chart-navigator-select [from]="from" [to]="to">
 *            </kendo-chart-navigator-select>
 *            <kendo-chart-navigator-series>
 *              <kendo-chart-navigator-series-item type="area" [data]="navigatorData" field="Close" categoryField="Date">
 *              </kendo-chart-navigator-series-item>
 *           </kendo-chart-navigator-series>
 *          </kendo-chart-navigator>
 *        </kendo-stockchart>
 *        <br /><br />
 *        <button class="k-button" (click)="isVisible = !isVisible">Toggle Navigator</button>
 *    `
 * })
 * ```
 */
let NavigatorComponent = class NavigatorComponent extends SettingsComponent {
    constructor(configurationService) {
        super('', configurationService);
        this.configurationService = configurationService;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NavigatorComponent.prototype, "visible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NavigatorComponent.prototype, "categoryAxis", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NavigatorComponent.prototype, "hint", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NavigatorComponent.prototype, "pane", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NavigatorComponent.prototype, "select", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NavigatorComponent.prototype, "series", void 0);
NavigatorComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [{ provide: PREFIX, useValue: 'navigator' }, { provide: ConfigurationService, useClass: PrefixConfigurationService }],
        selector: 'kendo-chart-navigator',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorComponent);

/**
 * The configuration component of the navigator category axis.
 *
 * @example
 *
 * ```html-no-run
 * <kendo-stockchart>
 *   <kendo-chart-navigator>
 *     <kendo-chart-navigator-category-axis
 *       color="maroon"
 *       [labels]="{color: 'green'}">
 *     </kendo-chart-navigator-category-axis>
 *   </kendo-chart-navigator>
 * </kendo-stockchart>
 * ```
 */
let NavigatorCategoryAxisComponent = class NavigatorCategoryAxisComponent extends CategoryAxisItemComponent {
    constructor(configurationService, intl, localeId) {
        super(configurationService, null, intl, localeId);
        this.configurationService = configurationService;
    }
};
NavigatorCategoryAxisComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [{
                provide: PREFIX,
                useValue: 'navigator.categoryAxis'
            }, {
                provide: ConfigurationService,
                useClass: PrefixConfigurationService
            }],
        selector: 'kendo-chart-navigator-category-axis',
        template: ''
    }),
    __param(2, Inject(LOCALE_ID)),
    __metadata("design:paramtypes", [ConfigurationService,
        IntlService, String])
], NavigatorCategoryAxisComponent);

/**
 * The configuration options of the crosshair.
 */
let NavigatorCategoryAxisCrosshairComponent = class NavigatorCategoryAxisCrosshairComponent extends CategoryAxisCrosshairComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorCategoryAxisCrosshairComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-category-axis-crosshair',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorCategoryAxisCrosshairComponent);

/**
 * The configuration options of the crosshair tooltip.
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
let NavigatorCategoryAxisCrosshairTooltipComponent = class NavigatorCategoryAxisCrosshairTooltipComponent extends CategoryAxisCrosshairTooltipComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorCategoryAxisCrosshairTooltipComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-category-axis-crosshair-tooltip',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorCategoryAxisCrosshairTooltipComponent);

/**
 * The configuration of the axis labels.
 */
let NavigatorCategoryAxisLabelsComponent = class NavigatorCategoryAxisLabelsComponent extends CategoryAxisLabelsComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorCategoryAxisLabelsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-category-axis-labels',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorCategoryAxisLabelsComponent);

/**
 * The configuration of the category axis notes.
 */
let NavigatorCategoryAxisNotesComponent = class NavigatorCategoryAxisNotesComponent extends CategoryAxisNotesComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorCategoryAxisNotesComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-category-axis-notes',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorCategoryAxisNotesComponent);

/**
 * The icon of the notes.
 */
let NavigatorCategoryAxisNotesIconComponent = class NavigatorCategoryAxisNotesIconComponent extends CategoryAxisNotesIconComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorCategoryAxisNotesIconComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-category-axis-notes-icon',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorCategoryAxisNotesIconComponent);

/**
 * The label of the notes.
 */
let NavigatorCategoryAxisNotesLabelComponent = class NavigatorCategoryAxisNotesLabelComponent extends CategoryAxisNotesLabelComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorCategoryAxisNotesLabelComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-category-axis-notes-label',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorCategoryAxisNotesLabelComponent);

/**
 * The selected axis range. If set, the axis selection is enabled. The range is index-based and starts from zero.
 * Categories with indexes in the range (`select.from`, `select.to`) will be selected.
 * This means that the last category in the range will not be included in the selection.
 * If the categories are dates, the range has also to be specified with date values.
 */
let NavigatorCategoryAxisSelectComponent = class NavigatorCategoryAxisSelectComponent extends CategoryAxisSelectComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorCategoryAxisSelectComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-category-axis-select',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorCategoryAxisSelectComponent);

/**
 * The title configuration of the navigator category axis.
 */
let NavigatorCategoryAxisTitleComponent = class NavigatorCategoryAxisTitleComponent extends CategoryAxisTitleComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorCategoryAxisTitleComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-category-axis-title',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorCategoryAxisTitleComponent);

/**
 * The default options of the navigator hint
 * ([see example]({% slug overview_stockchart_charts %}#toc-navigator)).
 */
let NavigatorHintComponent = class NavigatorHintComponent extends SettingsComponent {
    constructor(configurationService) {
        super('hint', configurationService);
        this.configurationService = configurationService;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Function)
], NavigatorHintComponent.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NavigatorHintComponent.prototype, "format", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], NavigatorHintComponent.prototype, "visible", void 0);
NavigatorHintComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-hint',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorHintComponent);

/**
 * The configuration component of the navigator pane
 * ([see example]({% slug overview_stockchart_charts %}#toc-navigator)).
 */
let NavigatorPaneComponent = class NavigatorPaneComponent extends PaneComponentGenerated {
    constructor(configurationService) {
        super(configurationService, null);
        this.configurationService = configurationService;
    }
};
NavigatorPaneComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [{ provide: PREFIX, useValue: 'navigator.pane' }, { provide: ConfigurationService, useClass: PrefixConfigurationService }],
        selector: 'kendo-chart-navigator-pane',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorPaneComponent);

/**
 * The title configuration of the StockChart navigator pane.
 */
let NavigatorPaneTitleComponent = class NavigatorPaneTitleComponent extends PanesTitleComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorPaneTitleComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-pane-title',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorPaneTitleComponent);

/**
 * Specifies the initially selected range.
 * If no range is specified, the full range of values is rendered.
 */
let NavigatorSelectComponent = class NavigatorSelectComponent extends SettingsComponent {
    constructor(configurationService) {
        super('select', configurationService);
        this.configurationService = configurationService;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Date)
], NavigatorSelectComponent.prototype, "from", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], NavigatorSelectComponent.prototype, "to", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NavigatorSelectComponent.prototype, "mousewheel", void 0);
NavigatorSelectComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-select',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorSelectComponent);

/**
 * The configuration component of a navigator series item
 * ([see example]({% slug navigator_stockchart_charts %})).
 */
let NavigatorSeriesItemComponent = class NavigatorSeriesItemComponent extends SeriesItemComponent {
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
};
NavigatorSeriesItemComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [ConfigurationService],
        selector: 'kendo-chart-navigator-series-item',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        CollectionService])
], NavigatorSeriesItemComponent);

/**
 * A collection of one or more navigator series items.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-stockchart>
 *         <kendo-chart-navigator>
 *             <kendo-chart-navigator-series>
 *                 <kendo-chart-navigator-series-item type="area" [data]="data" field="value" categoryField="date">
 *                 </kendo-chart-navigator-series-item>
 *             </kendo-chart-navigator-series>
 *         </kendo-chart-navigator>
 *     </kendo-stockchart>
 *   `
 * })
 * class AppComponent {
 *   public data: any[] = [];
 *
 *   constructor() {
 *      for (let idx = 0; idx < 100; idx++) {
 *          this.data.push({
 *              date: new Date(2017, 0, idx),
 *              value: Math.random() * 100
 *          });
 *      }
 *   }
 * }
 *
 * ```
 */
let NavigatorSeriesComponent = class NavigatorSeriesComponent extends SeriesComponent {
    constructor(configurationService, collectionService, tooltipTemplateService) {
        super(configurationService, collectionService, tooltipTemplateService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
        this.tooltipTemplateService = tooltipTemplateService;
    }
    readTooltipTemplates() {
    }
};
__decorate([
    ContentChildren(NavigatorSeriesItemComponent),
    __metadata("design:type", QueryList)
], NavigatorSeriesComponent.prototype, "children", void 0);
NavigatorSeriesComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [CollectionService],
        selector: 'kendo-chart-navigator-series',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        CollectionService,
        TooltipTemplateService])
], NavigatorSeriesComponent);

/**
 * The error bars of the StockChart navigator series.
 */
let NavigatorSeriesErrorBarsComponent = class NavigatorSeriesErrorBarsComponent extends SeriesErrorBarsComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorSeriesErrorBarsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-error-bars',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesErrorBarsComponent);

/**
 * The extremes configuration of the StockChart navigator series. Applies to extreme outliers.
 */
let NavigatorSeriesExtremesComponent = class NavigatorSeriesExtremesComponent extends SeriesExtremesComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorSeriesExtremesComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-extremes',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesExtremesComponent);

/**
 * The configuration options of the StockChart series highlight.
 */
let NavigatorSeriesHighlightComponent = class NavigatorSeriesHighlightComponent extends SeriesHighlightComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorSeriesHighlightComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-highlight',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesHighlightComponent);

/**
 * The label configuration of the StockChart navigator series.
 */
let NavigatorSeriesLabelsComponent = class NavigatorSeriesLabelsComponent extends SeriesLabelsComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
NavigatorSeriesLabelsComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-labels',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesLabelsComponent);

/**
 * The `from` label configuration of the StockChart navigator series.
 */
let NavigatorSeriesLabelsFromComponent = class NavigatorSeriesLabelsFromComponent extends SeriesLabelsFromComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
NavigatorSeriesLabelsFromComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-labels-from',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesLabelsFromComponent);

/**
 * The `to` label configuration of the StockChart navigator series.
 */
let NavigatorSeriesLabelsToComponent = class NavigatorSeriesLabelsToComponent extends SeriesLabelsToComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
NavigatorSeriesLabelsToComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-labels-to',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesLabelsToComponent);

/**
 * The marker configuration of the StockChart navigator series.
 */
let NavigatorSeriesMarkersComponent = class NavigatorSeriesMarkersComponent extends SeriesMarkersComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorSeriesMarkersComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-markers',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesMarkersComponent);

/**
 * The notes configuration of the StockChart navigator series.
 */
let NavigatorSeriesNotesComponent = class NavigatorSeriesNotesComponent extends SeriesNotesComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorSeriesNotesComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-notes',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesNotesComponent);

/**
 * The icon of the notes.
 */
let NavigatorSeriesNotesIconComponent = class NavigatorSeriesNotesIconComponent extends SeriesNotesIconComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorSeriesNotesIconComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-notes-icon',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesNotesIconComponent);

/**
 * The label of the notes.
 */
let NavigatorSeriesNotesLabelComponent = class NavigatorSeriesNotesLabelComponent extends SeriesNotesLabelComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorSeriesNotesLabelComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-notes-label',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesNotesLabelComponent);

/**
 * The outliers configuration of the StockChart navigator series. Applies to mild outliers.
 */
let NavigatorSeriesOutliersComponent = class NavigatorSeriesOutliersComponent extends SeriesOutliersComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorSeriesOutliersComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-outliers',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesOutliersComponent);

/**
 * The tooltip configuration of the StockChart navigator series.
 * The StockChart navigator series tooltip is displayed when the `navigator.series.tooltip.visible` option is set to `true`.
 */
let NavigatorSeriesTooltipComponent = class NavigatorSeriesTooltipComponent extends SeriesTooltipComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorSeriesTooltipComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-tooltip',
        template: ''
    }),
    __metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesTooltipComponent);

/**
 * @hidden
 */
const STOCK_CHART_DIRECTIVES = [
    StockChartComponent,
    NavigatorComponent,
    NavigatorCategoryAxisComponent,
    NavigatorCategoryAxisCrosshairComponent,
    NavigatorCategoryAxisCrosshairTooltipComponent,
    NavigatorCategoryAxisLabelsComponent,
    NavigatorCategoryAxisNotesComponent,
    NavigatorCategoryAxisNotesIconComponent,
    NavigatorCategoryAxisNotesLabelComponent,
    NavigatorCategoryAxisSelectComponent,
    NavigatorCategoryAxisTitleComponent,
    NavigatorHintComponent,
    NavigatorPaneComponent,
    NavigatorPaneTitleComponent,
    NavigatorSelectComponent,
    NavigatorSeriesComponent,
    NavigatorSeriesItemComponent,
    NavigatorSeriesErrorBarsComponent,
    NavigatorSeriesExtremesComponent,
    NavigatorSeriesHighlightComponent,
    NavigatorSeriesLabelsComponent,
    NavigatorSeriesLabelsFromComponent,
    NavigatorSeriesLabelsToComponent,
    NavigatorSeriesMarkersComponent,
    NavigatorSeriesNotesComponent,
    NavigatorSeriesNotesIconComponent,
    NavigatorSeriesNotesLabelComponent,
    NavigatorSeriesOutliersComponent,
    NavigatorSeriesTooltipComponent
];

/* tslint:disable:no-access-missing-member */
/**
 * The root Chart component.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-sparkline [data]="data" type="column">
 *     </kendo-sparkline>
 *   `
 * })
 * class AppComponent {
 *   public data: any[] = [
 *     936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007,
 *     1004, 988, 990, 988, 987, 995, 946, 954, 991, 984,
 *     974, 956, 986, 936, 955, 1021, 1013, 1005, 958, 953,
 *     952, 940, 937, 980, 966, 965, 928, 916, 910, 980
 *   ];
 * }
 *
 * ```
 */
let SparklineComponent = class SparklineComponent extends ChartComponent {
    constructor(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer) {
        super(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer);
        this.configurationService = configurationService;
        this.themeService = themeService;
        this.element = element;
        this.intl = intl;
        this.localizationService = localizationService;
        this.ngZone = ngZone;
        this.instanceEventService = instanceEventService;
        this.changeDetector = changeDetector;
        this.renderer = renderer;
        /**
         * @hidden
         */
        this.tooltipWrapperClass = 'k-sparkline-tooltip-wrapper';
        /**
         * @hidden
         */
        this.tooltipContentClasses = {
            'k-sparkline-tooltip': true
        };
        this.hostClasses = ['k-sparkline', 'k-widget'];
        validatePackage(packageMetadata);
    }
    createInstance(element, observer) {
        this.instance = new Sparkline(element, Sparkline.normalizeOptions(this.options), this.theme, {
            intlService: this.intl,
            observer: observer,
            rtl: this.rtl,
            sender: this
        });
    }
    updateOptions() {
        this.instance.setOptions(Sparkline.normalizeOptions(this.options));
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], SparklineComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], SparklineComponent.prototype, "data", void 0);
SparklineComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        exportAs: 'kendoSparkline',
        providers: [
            ConfigurationService,
            TooltipTemplateService,
            InstanceEventService,
            LocalizationService,
            {
                provide: L10N_PREFIX,
                useValue: 'kendo.chart'
            }
        ],
        selector: 'kendo-sparkline',
        template: `
        <span #surface class="k-chart-surface"></span>
        <kendo-chart-crosshair-tooltips-container [popupSettings]="popupSettings">
        </kendo-chart-crosshair-tooltips-container>
        <kendo-chart-tooltip-popup [animate]="false" [wrapperClass]="tooltipWrapperClass"
            [classNames]="tooltipContentClasses" (leave)="tooltipMouseleave($event)" [popupSettings]="popupSettings">
        </kendo-chart-tooltip-popup>
        <kendo-resize-sensor (resize)="onResize($event)"></kendo-resize-sensor>
    `
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        ThemeService,
        ElementRef,
        IntlService,
        LocalizationService,
        NgZone,
        InstanceEventService,
        ChangeDetectorRef,
        Renderer2])
], SparklineComponent);

/**
 * @hidden
 */
const SPARKLINE_DIRECTIVES = [
    SparklineComponent
];

/**
 * A [module]({{ site.data.urls.angular['ngmoduleapi'] }}) that includes the Chart component and directives.
 *
 * Imports the ChartModule into your application
 * [root module]({{ site.data.url.angular['ngmodules'] }}#angular-modularity) or any other sub-module
 * that will use the Chart component.
 *
 * @example
 * ```ts-no-run
 * import { NgModule } from '@angular/core';
 * import { BrowserModule } from '@angular/platform-browser';
 * import { ChartModule } from '@progress/kendo-angular-charts';
 * import { AppComponent } from './app.component';
 *
 * _@NgModule({
 *     bootstrap:    [AppComponent],
 *     declarations: [AppComponent],
 *     imports:      [BrowserModule, ChartModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
let ChartModule = class ChartModule {
};
ChartModule = __decorate([
    NgModule({
        declarations: [CHART_DIRECTIVES],
        exports: [CHART_DIRECTIVES],
        imports: [CommonModule, PopupModule, ResizeSensorModule],
        providers: [
            ThemeService
        ]
    })
], ChartModule);

/**
 * A [module]({{ site.data.urls.angular['ngmoduleapi'] }}) that includes the StockChart component and directives.
 *
 * Imports the StockChartModule into your application
 * [root module]({{ site.data.urls.angular['ngmodules'] }}#angular-modularity) or any other sub-module
 * that will use the StockChart component.
 *
 * @example
 * ```ts-no-run
 * import { NgModule } from '@angular/core';
 * import { BrowserModule } from '@angular/platform-browser';
 * import { StockChartModule } from '@progress/kendo-angular-charts';
 * import { AppComponent } from './app.component';
 *
 * _@NgModule({
 *     bootstrap:    [AppComponent],
 *     declarations: [AppComponent],
 *     imports:      [BrowserModule, StockChartModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
let StockChartModule = class StockChartModule {
};
StockChartModule = __decorate([
    NgModule({
        declarations: [STOCK_CHART_DIRECTIVES],
        exports: [STOCK_CHART_DIRECTIVES, ChartModule],
        imports: [ChartModule, CommonModule, PopupModule, ResizeSensorModule]
    })
], StockChartModule);

/**
 * A [module]({{ site.data.urls.angular['ngmoduleapi'] }}) that includes the Sparkline component and directives.
 *
 * Imports the SparklineModule into your application
 * [root module]({{ site.data.urls.angular['ngmodules'] }}#angular-modularity) or any other sub-module
 * that will use the Sparkline component.
 *
 * @example
 * ```ts-no-run
 * import { NgModule } from '@angular/core';
 * import { BrowserModule } from '@angular/platform-browser';
 * import { SparklineModule } from '@progress/kendo-angular-charts';
 * import { AppComponent } from './app.component';
 *
 * _@NgModule({
 *     bootstrap:    [AppComponent],
 *     declarations: [AppComponent],
 *     imports:      [BrowserModule, SparklineModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
let SparklineModule = class SparklineModule {
};
SparklineModule = __decorate([
    NgModule({
        declarations: [SPARKLINE_DIRECTIVES],
        exports: [SPARKLINE_DIRECTIVES, ChartModule],
        imports: [ChartModule, CommonModule, PopupModule, ResizeSensorModule]
    })
], SparklineModule);

/**
 * A [module]({{ site.data.urls.angular['ngmoduleapi'] }}) that includes all Chart components and directives.
 *
 * Imports the ChartsModule into your application
 * [root module]({{ site.data.urls.angular['ngmodules'] }}#angular-modularity) or any other sub-module
 * that will use the Charts components.
 *
 * @example
 * ```ts-no-run
 * import { NgModule } from '@angular/core';
 * import { BrowserModule } from '@angular/platform-browser';
 * import { ChartsModule } from '@progress/kendo-angular-charts';
 * import { AppComponent } from './app.component';
 *
 * _@NgModule({
 *     bootstrap:    [AppComponent],
 *     declarations: [AppComponent],
 *     imports:      [BrowserModule, ChartsModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
let ChartsModule = class ChartsModule {
};
ChartsModule = __decorate([
    NgModule({
        exports: [ChartModule, SparklineModule, StockChartModule]
    })
], ChartsModule);

/**
 * Generated bundle index. Do not edit.
 */

export { ChartComponentGenerated, AxisDefaultsComponentGenerated, AxisDefaultsCrosshairComponentGenerated, AxisDefaultsCrosshairTooltipComponentGenerated, AxisDefaultsLabelsComponentGenerated, AxisDefaultsTitleComponentGenerated, CategoryAxisItemComponentGenerated, CategoryAxisCrosshairComponentGenerated, CategoryAxisCrosshairTooltipComponentGenerated, CategoryAxisNotesComponentGenerated, CategoryAxisNotesIconComponentGenerated, CategoryAxisNotesLabelComponentGenerated, CategoryAxisSelectComponentGenerated, CategoryAxisTitleComponentGenerated, CategoryAxisComponentGenerated, ChartAreaComponentGenerated, DonutCenterTemplateDirective, LegendComponentGenerated, LegendInactiveItemsComponentGenerated, LegendItemComponentGenerated, PaneComponentGenerated, PanesTitleComponentGenerated, PanesComponentGenerated, PlotAreaComponentGenerated, SeriesDefaultsComponentGenerated, SeriesDefaultsLabelsComponentGenerated, SeriesDefaultsLabelsFromComponentGenerated, SeriesDefaultsLabelsToComponentGenerated, SeriesDefaultsNotesComponentGenerated, SeriesDefaultsNotesIconComponentGenerated, SeriesDefaultsNotesLabelComponentGenerated, SeriesDefaultsTooltipComponentGenerated, SeriesItemComponentGenerated, SeriesErrorBarsComponentGenerated, SeriesExtremesComponentGenerated, SeriesHighlightComponentGenerated, SeriesLabelsComponentGenerated, SeriesLabelsFromComponentGenerated, SeriesLabelsToComponentGenerated, SeriesMarkersComponentGenerated, SeriesNotesComponentGenerated, SeriesNotesIconComponentGenerated, SeriesNotesLabelComponentGenerated, SeriesOutliersComponentGenerated, SeriesTooltipComponentGenerated, SeriesComponentGenerated, TitleComponentGenerated, TooltipComponentGenerated, BaseTooltip, bodyFactory, CrosshairTooltipComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, ValueAxisItemComponentGenerated, ValueAxisCrosshairComponentGenerated, ValueAxisCrosshairTooltipComponentGenerated, ValueAxisLabelsComponentGenerated, ValueAxisNotesComponentGenerated, ValueAxisNotesIconComponentGenerated, ValueAxisNotesLabelComponentGenerated, ValueAxisTitleComponentGenerated, ValueAxisComponentGenerated, XAxisItemComponentGenerated, XAxisCrosshairComponentGenerated, XAxisCrosshairTooltipComponentGenerated, XAxisLabelsComponentGenerated, XAxisNotesComponentGenerated, XAxisNotesIconComponentGenerated, XAxisNotesLabelComponentGenerated, XAxisTitleComponentGenerated, XAxisComponentGenerated, YAxisItemComponentGenerated, YAxisCrosshairComponentGenerated, YAxisCrosshairTooltipComponentGenerated, YAxisLabelsComponentGenerated, YAxisNotesComponentGenerated, YAxisNotesIconComponentGenerated, YAxisNotesLabelComponentGenerated, YAxisTitleComponentGenerated, YAxisComponentGenerated, ZoomableComponentGenerated, CollectionItemComponent, CollectionComponent, CollectionService, ConfigurationService, PREFIX, PrefixConfigurationService, RootConfigurationService, SettingsComponent, ThemeService, TooltipTemplateService, BaseEvent, InstanceEventService, LegendEvent, NoteEvent, PreventableEvent, SeriesEvent, StockInstanceEventService, NavigatorComponent, NavigatorCategoryAxisComponent, NavigatorCategoryAxisCrosshairComponent, NavigatorCategoryAxisCrosshairTooltipComponent, NavigatorCategoryAxisLabelsComponent, NavigatorCategoryAxisNotesComponent, NavigatorCategoryAxisNotesIconComponent, NavigatorCategoryAxisNotesLabelComponent, NavigatorCategoryAxisSelectComponent, NavigatorCategoryAxisTitleComponent, NavigatorHintComponent, NavigatorPaneComponent, NavigatorPaneTitleComponent, NavigatorSelectComponent, NavigatorSeriesItemComponent, NavigatorSeriesErrorBarsComponent, NavigatorSeriesExtremesComponent, NavigatorSeriesHighlightComponent, NavigatorSeriesLabelsComponent, NavigatorSeriesLabelsFromComponent, NavigatorSeriesLabelsToComponent, NavigatorSeriesMarkersComponent, NavigatorSeriesNotesComponent, NavigatorSeriesNotesIconComponent, NavigatorSeriesNotesLabelComponent, NavigatorSeriesOutliersComponent, NavigatorSeriesTooltipComponent, NavigatorSeriesComponent, ChartModule, StockChartModule, SparklineModule, ChartsModule, TooltipPopupComponent, CrosshairTooltipsContainerComponent, ChartComponent, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent, XAxisComponent, XAxisCrosshairComponent, XAxisCrosshairTooltipComponent, XAxisItemComponent, XAxisLabelsComponent, XAxisNotesComponent, XAxisNotesIconComponent, XAxisNotesLabelComponent, XAxisTitleComponent, YAxisComponent, YAxisCrosshairComponent, YAxisCrosshairTooltipComponent, YAxisItemComponent, YAxisLabelsComponent, YAxisNotesComponent, YAxisNotesIconComponent, YAxisNotesLabelComponent, YAxisTitleComponent, ZoomableComponent, CHART_DIRECTIVES, AxisLabelClickEvent, DragEndEvent, DragEvent, DragStartEvent, LegendItemClickEvent, LegendItemHoverEvent, NoteClickEvent, NoteHoverEvent, PaneRenderEvent, PlotAreaClickEvent, PlotAreaHoverEvent, RenderEvent, SelectEndEvent, SelectEvent, SelectStartEvent, SeriesClickEvent, SeriesHoverEvent, ZoomEndEvent, ZoomEvent, ZoomStartEvent, WeekStartDay, NavigatorFilterEvent, StockChartComponent, STOCK_CHART_DIRECTIVES, SparklineComponent, SPARKLINE_DIRECTIVES };
