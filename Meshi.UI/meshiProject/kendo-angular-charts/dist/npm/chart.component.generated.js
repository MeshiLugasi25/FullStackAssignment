/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
/**
 * @hidden
 */
var ChartComponentGenerated = /** @class */ (function () {
    function ChartComponentGenerated(configurationService) {
        this.configurationService = configurationService;
        /**
         * Fires when the user clicks an axis label ([see example]({% slug overview_chart_charts %}#toc-events)).
         */
        this.axisLabelClick = new core_2.EventEmitter();
        /**
         * Fires as long as the user is dragging the Chart with the mouse or through swipe gestures.
         */
        this.drag = new core_2.EventEmitter();
        /**
         * Fires when the user stops dragging the Chart.
         */
        this.dragEnd = new core_2.EventEmitter();
        /**
         * Fires when the user starts dragging the Chart.
         */
        this.dragStart = new core_2.EventEmitter();
        /**
         * Fires when the user hovers over a legend item ([see example]({% slug overview_chart_charts %}#toc-events)).
         */
        this.legendItemHover = new core_2.EventEmitter();
        /**
         * Fires when the cursor leaves a legend item.
         */
        this.legendItemLeave = new core_2.EventEmitter();
        /**
         * Fires when the user clicks a note.
         */
        this.noteClick = new core_2.EventEmitter();
        /**
         * Fires when the user hovers over a note.
         */
        this.noteHover = new core_2.EventEmitter();
        /**
         * Fires when the cursor leaves a note.
         */
        this.noteLeave = new core_2.EventEmitter();
        /**
         * Fires when a pane is rendered because the Chart:
         * * Is rendered.
         * * Performs panning or zooming.
         * * Is exported with different options.
         * The event is used to render custom visuals in the panes.
         */
        this.paneRender = new core_2.EventEmitter();
        /**
         * Fires when the user clicks the plot area ([see example]({% slug overview_chart_charts %}#toc-events)).
         * The `click` event is triggered by the `tap` and `contextmenu` events.
         * To distinguish between the original events, inspect the `e.originalEvent.type` field.
         */
        this.plotAreaClick = new core_2.EventEmitter();
        /**
         * Fires when the user hovers the plot area ([see example]({% slug overview_chart_charts %}#toc-events)).
         */
        this.plotAreaHover = new core_2.EventEmitter();
        /**
         * Fires when the cursor leaves the plot area.
         */
        this.plotAreaLeave = new core_2.EventEmitter();
        /**
         * Fires when the Chart is ready to render on screen ([see example]({% slug overview_chart_charts %}#toc-events)).
         * For example, you can use it to remove loading indicators.
         * Any changes made to the options are ignored.
         */
        this.render = new core_2.EventEmitter();
        /**
         * Fires when the user modifies the selection.
         *
         * The range units are:
         * - Generic axis&mdash;Category index (0-based).
         * - Date axis&mdash;Date instance.
         */
        this.select = new core_2.EventEmitter();
        /**
         * Fires when the user completes the modification of the selection.
         *
         * The range units are:
         * - Generic axis&mdash;Category index (0-based).
         * - Date axis&mdash;Date instance.
         */
        this.selectEnd = new core_2.EventEmitter();
        /**
         * Fires when the user starts modifying the axis selection.
         *
         * The range units are:
         * - Generic axis&mdash;Category index (0-based).
         * - Date axis&mdash;Date instance.
         */
        this.selectStart = new core_2.EventEmitter();
        /**
         * Fires when the user clicks the Chart series.
         *
         * The `click` event will be triggered by the `tap` and `contextmenu` events ([see example]({% slug overview_chart_charts %}#toc-events)).
         * To distinguish between the original events, inspect the `e.originalEvent.type` field.
         */
        this.seriesClick = new core_2.EventEmitter();
        /**
         * Fires when the user hovers the Chart series ([see example]({% slug overview_chart_charts %}#toc-events)).
         */
        this.seriesHover = new core_2.EventEmitter();
        /**
         * Fires when the cursor enters a series.
         */
        this.seriesOver = new core_2.EventEmitter();
        /**
         * Fires when the cursor leaves a series.
         */
        this.seriesLeave = new core_2.EventEmitter();
        /**
         * Fires as long as the user is zooming the Chart by using the mousewheel operation.
         */
        this.zoom = new core_2.EventEmitter();
        /**
         * Fires when the user stops zooming the Chart.
         */
        this.zoomEnd = new core_2.EventEmitter();
        /**
         * Fires when the user uses the mousewheel to zoom the Chart.
         */
        this.zoomStart = new core_2.EventEmitter();
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponentGenerated.prototype, "pannable", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ChartComponentGenerated.prototype, "renderAs", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], ChartComponentGenerated.prototype, "seriesColors", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponentGenerated.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ChartComponentGenerated.prototype, "transitions", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponentGenerated.prototype, "zoomable", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponentGenerated.prototype, "axisDefaults", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponentGenerated.prototype, "categoryAxis", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponentGenerated.prototype, "chartArea", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponentGenerated.prototype, "legend", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], ChartComponentGenerated.prototype, "panes", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponentGenerated.prototype, "paneDefaults", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponentGenerated.prototype, "plotArea", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], ChartComponentGenerated.prototype, "series", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponentGenerated.prototype, "seriesDefaults", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponentGenerated.prototype, "tooltip", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponentGenerated.prototype, "valueAxis", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponentGenerated.prototype, "xAxis", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponentGenerated.prototype, "yAxis", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "axisLabelClick", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "drag", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "dragEnd", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "dragStart", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "legendItemHover", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "legendItemLeave", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "noteClick", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "noteHover", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "noteLeave", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "paneRender", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "plotAreaClick", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "plotAreaHover", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "plotAreaLeave", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "render", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "select", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "selectEnd", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "selectStart", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "seriesClick", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "seriesHover", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "seriesOver", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "seriesLeave", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "zoom", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "zoomEnd", void 0);
    tslib_1.__decorate([
        core_2.Output(),
        tslib_1.__metadata("design:type", core_2.EventEmitter)
    ], ChartComponentGenerated.prototype, "zoomStart", void 0);
    return ChartComponentGenerated;
}());
exports.ChartComponentGenerated = ChartComponentGenerated;
