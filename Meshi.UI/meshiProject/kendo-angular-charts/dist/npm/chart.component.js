/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var core_4 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var kendo_licensing_1 = require("@progress/kendo-licensing");
var package_metadata_1 = require("./package-metadata");
var chart_component_generated_1 = require("./chart.component.generated");
var configuration_service_1 = require("./common/configuration.service");
var legend_item_click_event_1 = require("./events/legend-item-click-event");
var instance_event_service_1 = require("./events/instance-event.service");
var donut_center_template_directive_1 = require("./chart/donut-center-template.directive");
var series_item_component_1 = require("./chart/series-item.component");
var theme_service_1 = require("./common/theme.service");
var chart_instance_observer_1 = require("./common/chart-instance-observer");
var tooltip_template_service_1 = require("./common/tooltip-template.service");
var tooltip_popup_component_1 = require("./chart/tooltip/tooltip-popup.component");
var crosshair_tooltips_container_component_1 = require("./chart/tooltip/crosshair-tooltips-container.component");
var has_parent_1 = require("./common/has-parent");
var render_event_1 = require("./events/render-event");
var kendo_angular_intl_1 = require("@progress/kendo-angular-intl");
var kendo_charts_1 = require("@progress/kendo-charts");
var kendo_drawing_1 = require("@progress/kendo-drawing");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
var kendo_angular_common_1 = require("@progress/kendo-angular-common");
var copy_changes_1 = require("./common/copy-changes");
require("./chart-defaults");
var to_simple_changes_1 = require("./common/to-simple-changes");
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
var ChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ChartComponent, _super);
    function ChartComponent(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.themeService = themeService;
        _this.element = element;
        _this.intl = intl;
        _this.localizationService = localizationService;
        _this.ngZone = ngZone;
        _this.instanceEventService = instanceEventService;
        _this.changeDetector = changeDetector;
        _this.renderer = renderer;
        /**
         * Fires when a legend item is clicked before the selected series visibility is toggled.
         * Can be prevented.
         */
        _this.legendItemClick = new core_4.EventEmitter();
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
        _this.resizeRateLimit = 10;
        _this.theme = null;
        _this.suppressTransitions = false;
        _this.rtl = false;
        _this.hostClasses = ['k-chart', 'k-widget'];
        kendo_licensing_1.validatePackage(package_metadata_1.packageMetadata);
        _this.themeService.loadTheme();
        _this.refreshWait();
        return _this;
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.element) {
            this.hostClasses.forEach(function (name) {
                _this.renderer.addClass(_this.element.nativeElement, name);
            });
            this.renderer.setStyle(this.element.nativeElement, 'position', 'relative');
        }
    };
    ChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.canRender) {
            this.ngZone.runOutsideAngular(function () {
                var chartMouseleave = _this.renderer.listen(_this.surfaceElement.nativeElement, 'mouseleave', _this.chartMouseleave.bind(_this));
                _this.domSubscriptions = function () {
                    chartMouseleave();
                };
            });
        }
        this.setDirection();
        this.subscriptions = this.intl.changes.subscribe(this.intlChange.bind(this));
        this.subscriptions.add(this.localizationService.changes.subscribe(this.rtlChange.bind(this)));
    };
    ChartComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.instance && this.autoResize) {
            this.ngZone.runOutsideAngular(function () {
                clearTimeout(_this.resizeTimeout);
                _this.resizeTimeout = setTimeout(function () {
                    _this.resize();
                }, 0);
            });
        }
    };
    ChartComponent.prototype.ngOnChanges = function (changes) {
        var store = this.configurationService.store;
        copy_changes_1.copyChanges(changes, store);
        store.popupSettings = null;
        this.configurationService.push(store);
    };
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
    ChartComponent.prototype.notifyChanges = function (changes) {
        this.ngOnChanges(to_simple_changes_1.toSimpleChanges(changes));
    };
    ChartComponent.prototype.ngOnDestroy = function () {
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
    };
    ChartComponent.prototype.createInstance = function (element, observer) {
        this.instance = new kendo_charts_1.Chart(element, this.options, this.theme, {
            intlService: this.intl,
            observer: observer,
            rtl: this.rtl,
            sender: this
        });
    };
    /**
     * Exports the Chart as an image. The export operation is asynchronous and returns a promise.
     *
     * @param {ImageExportOptions} options - The parameters for the exported image.
     * @returns {Promise<string>} - A promise that will be resolved with a PNG image encoded as a Data URI.
     */
    ChartComponent.prototype.exportImage = function (options) {
        if (options === void 0) { options = {}; }
        return kendo_drawing_1.exportImage(this.exportVisual(options), options);
    };
    /**
     * Exports the Chart as an SVG document. The export operation is asynchronous and returns a promise.
     *
     * @param options - The parameters for the exported file.
     * @returns - A promise that will be resolved with an SVG document that is encoded as a Data URI.
     */
    ChartComponent.prototype.exportSVG = function (options) {
        if (options === void 0) { options = {}; }
        return kendo_drawing_1.exportSVG(this.exportVisual(options), options);
    };
    /**
     * Exports the Chart as a Drawing `Scene`.
     *
     * @param options - The parameters for the export operation.
     * @returns - The root Group of the scene.
     */
    ChartComponent.prototype.exportVisual = function (options) {
        if (options === void 0) { options = {}; }
        return this.instance.exportVisual(options);
    };
    /**
     * Returns the axis with the specified name.
     *
     * @param {string} name - The axis name.
     * @returns {ChartAxis} - The axis with a corresponding name.
     */
    ChartComponent.prototype.findAxisByName = function (name) {
        if (this.instance) {
            return this.instance.findAxisByName(name);
        }
    };
    /**
     * Returns the pane at the specified index.
     *
     * @param {number} index - The pane index.
     * @returns {ChartPane} - The pane at the specified index.
     */
    ChartComponent.prototype.findPaneByIndex = function (index) {
        if (this.instance) {
            return this.instance.findPaneByIndex(index);
        }
    };
    /**
     * Returns the pane with the specified name.
     *
     * @param {string} name - The name of the pane.
     * @returns {ChartPane} - The pane with the provided name.
     */
    ChartComponent.prototype.findPaneByName = function (name) {
        if (this.instance) {
            return this.instance.findPaneByName(name);
        }
    };
    /**
     * Returns the plot area of the Chart.
     * @returns {ChartPlotArea} - The plot area of the Chart.
     */
    ChartComponent.prototype.getPlotArea = function () {
        if (this.instance) {
            return this.instance.plotArea();
        }
    };
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
    ChartComponent.prototype.toggleHighlight = function (show, filter) {
        if (this.instance) {
            this.instance.toggleHighlight(show, filter);
        }
    };
    /**
     * Hides the tooltip of the Chart.
     */
    ChartComponent.prototype.hideTooltip = function () {
        if (this.instance) {
            this.instance.hideTooltip();
        }
    };
    /**
     * Shows the Chart tooltip of a specific point or the shared tooltip of a specific category.
     *
     * @param filter - The category for a shared tooltip or a function which will be called for each point until the function returns `true`.
     */
    ChartComponent.prototype.showTooltip = function (filter) {
        if (this.instance) {
            this.instance.showTooltip(filter);
        }
    };
    ChartComponent.prototype.init = function () {
        if (!this.canRender) {
            return;
        }
        var element = this.surfaceElement.nativeElement;
        var instanceObserver = new chart_instance_observer_1.ChartInstanceObserver(this);
        this.createInstance(element, instanceObserver);
    };
    /**
     * Detects the size of the container and redraws the Chart.
     * Resizing is automatic unless you set the `resizeRateLimit` option to `0`.
     */
    ChartComponent.prototype.resize = function () {
        if (this.instance) {
            this.instance.resize();
        }
    };
    /**
     * @hidden
     */
    ChartComponent.prototype.onResize = function (_event) {
        if (this.autoResize) {
            this.resize();
        }
    };
    ChartComponent.prototype.onLegendItemClick = function (e) {
        var _this = this;
        this.run(function () {
            var args = new legend_item_click_event_1.LegendItemClickEvent(e, _this);
            _this.legendItemClick.emit(args);
            if (!args.isDefaultPrevented()) {
                var series = _this.seriesComponents.toArray()[e.series.index];
                if (!series) {
                    return;
                }
                if (e.pointIndex === undefined) {
                    series.toggleVisibility();
                }
                else {
                    series.togglePointVisibility(e.pointIndex);
                }
                _this.suppressTransitions = true;
            }
        }, hasObservers(this.legendItemClick), this.seriesComponents.length > 0);
    };
    ChartComponent.prototype.onInit = function (e) {
        this.instance = e.sender;
    };
    ChartComponent.prototype.onRender = function (e) {
        var _this = this;
        var donutCenterStyle = this.getDonutCenterStyle();
        this.run(function () {
            var args = new render_event_1.RenderEvent(e, _this);
            _this.surface = e.sender.surface;
            _this.render.emit(args);
            _this.donutCenterStyle = donutCenterStyle;
        }, hasObservers(this.render), this.donutCenterStyle !== donutCenterStyle);
    };
    ChartComponent.prototype.onShowTooltip = function (e) {
        var _this = this;
        this.run(function () {
            if (!e.crosshair) {
                _this.tooltipInstance.show(e);
            }
            else {
                _this.crossahirTooltips.show(e);
            }
        }, !e.crosshair, true);
    };
    ChartComponent.prototype.onHideTooltip = function (e) {
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
    };
    ChartComponent.prototype.trigger = function (name, e) {
        if (name === 'resize') {
            return;
        }
        var emitter = this.activeEmitter(name);
        if (emitter) {
            var args_1 = this.instanceEventService.create(name, e, this);
            this.run(function () {
                emitter.emit(args_1);
            });
            return args_1.isDefaultPrevented && args_1.isDefaultPrevented();
        }
    };
    ChartComponent.prototype.requiresHandlers = function (names) {
        for (var idx = 0; idx < names.length; idx++) {
            if (this.activeEmitter(names[idx])) {
                return true;
            }
        }
        return false;
    };
    ChartComponent.prototype.refresh = function () {
        clearTimeout(this.redrawTimeout);
        this.updateDirection();
        this.crossahirTooltips.createCrosshairTooltips(this.options);
        this.setChartAreaSize();
        if (!this.instance) {
            this.init();
            return;
        }
        var transitions = this.options.transitions;
        if (this.suppressTransitions) {
            this.options.transitions = false;
        }
        this.updateOptions();
        if (this.suppressTransitions) {
            this.options.transitions = transitions;
            this.suppressTransitions = false;
        }
    };
    ChartComponent.prototype.setChartAreaSize = function () {
        if (!this.element) {
            return;
        }
        var element = this.element.nativeElement;
        var chartArea = this.options.chartArea || {};
        if (chartArea.width) {
            element.style.width = chartArea.width + "px";
        }
        if (chartArea.height) {
            element.style.height = chartArea.height + "px";
        }
    };
    ChartComponent.prototype.updateOptions = function () {
        this.instance.setOptions(this.options);
    };
    /**
     * @hidden
     */
    ChartComponent.prototype.tooltipMouseleave = function (e) {
        var relatedTarget = e.relatedTarget;
        var chartElement = this.element.nativeElement;
        if (this.instance && (!relatedTarget || !has_parent_1.hasParent(relatedTarget, chartElement))) {
            this.instance.hideElements();
        }
    };
    /**
     * @hidden
     */
    ChartComponent.prototype.chartMouseleave = function (e) {
        var relatedTarget = e.relatedTarget;
        var chartElement = this.element.nativeElement;
        if (this.instance && (!relatedTarget || !(this.tooltipInstance.containsElement(relatedTarget) || has_parent_1.hasParent(relatedTarget, chartElement))) &&
            !this.instance.handlingTap) {
            this.instance.hideElements();
        }
    };
    Object.defineProperty(ChartComponent.prototype, "canRender", {
        get: function () {
            return kendo_angular_common_1.isDocumentAvailable() && Boolean(this.surfaceElement);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "autoResize", {
        get: function () {
            return this.resizeRateLimit > 0;
        },
        enumerable: true,
        configurable: true
    });
    ChartComponent.prototype.activeEmitter = function (name) {
        var emitter = this[name];
        if (emitter && emitter.emit && hasObservers(emitter)) {
            return emitter;
        }
    };
    ChartComponent.prototype.getDonutCenterStyle = function () {
        if (!this.instance || !this.options || !this.options.series) {
            return;
        }
        var firstSeries = this.options.series[0];
        var charts = this.instance._plotArea.charts;
        if (!firstSeries || firstSeries.type !== 'donut' || !charts || charts[0].points.length === 0) {
            return;
        }
        var firstPoint = charts[0].points[0];
        var center = firstPoint.box.center();
        var radius = firstPoint.sector.innerRadius;
        var top = center.y - radius;
        var left = center.x - radius;
        var size = radius * 2;
        return {
            height: size + 'px',
            left: left + 'px',
            top: top + 'px',
            width: size + 'px'
        };
    };
    ChartComponent.prototype.refreshWait = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.subscription = rxjs_1.combineLatest(_this.configurationService.onChange$, _this.themeService.onChange$).pipe(operators_1.tap(function (result) {
                _this.options = result[0];
                _this.theme = result[1];
            }), operators_1.auditTime(configuration_service_1.THROTTLE_MS))
                .subscribe(function () {
                _this.refresh();
            });
        });
    };
    ChartComponent.prototype.run = function (callback, inZone, detectChanges) {
        if (inZone === void 0) { inZone = true; }
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
    };
    ChartComponent.prototype.detectChanges = function () {
        if (!this.destroyed) {
            this.changeDetector.detectChanges();
        }
    };
    ChartComponent.prototype.intlChange = function () {
        if (this.instance) {
            this.deferredRedraw();
        }
    };
    ChartComponent.prototype.rtlChange = function () {
        if (this.instance && this.rtl !== this.isRTL) {
            this.deferredRedraw();
        }
    };
    ChartComponent.prototype.deferredRedraw = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            clearTimeout(_this.redrawTimeout);
            _this.redrawTimeout = setTimeout(function () {
                _this.updateDirection();
                _this.instance.noTransitionsRedraw();
            }, 0);
        });
    };
    ChartComponent.prototype.updateDirection = function () {
        var current = this.isRTL;
        if (this.rtl !== current) {
            this.setDirection();
            if (this.instance) {
                this.instance.setDirection(current);
            }
        }
    };
    ChartComponent.prototype.setDirection = function () {
        this.rtl = this.isRTL;
        if (this.element) {
            this.renderer.setAttribute(this.element.nativeElement, 'dir', this.rtl ? 'rtl' : 'ltr');
        }
    };
    Object.defineProperty(ChartComponent.prototype, "isRTL", {
        get: function () {
            return Boolean(this.localizationService.rtl);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_4.Output(),
        tslib_1.__metadata("design:type", core_4.EventEmitter)
    ], ChartComponent.prototype, "legendItemClick", void 0);
    tslib_1.__decorate([
        core_4.Input(),
        tslib_1.__metadata("design:type", Number)
    ], ChartComponent.prototype, "resizeRateLimit", void 0);
    tslib_1.__decorate([
        core_4.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ChartComponent.prototype, "popupSettings", void 0);
    tslib_1.__decorate([
        core_2.ContentChildren(series_item_component_1.SeriesItemComponent, { descendants: true }),
        tslib_1.__metadata("design:type", core_2.QueryList)
    ], ChartComponent.prototype, "seriesComponents", void 0);
    tslib_1.__decorate([
        core_1.ContentChild(donut_center_template_directive_1.DonutCenterTemplateDirective, { static: false }),
        tslib_1.__metadata("design:type", donut_center_template_directive_1.DonutCenterTemplateDirective)
    ], ChartComponent.prototype, "donutCenterTemplate", void 0);
    tslib_1.__decorate([
        core_2.ViewChild(tooltip_popup_component_1.TooltipPopupComponent, { static: true }),
        tslib_1.__metadata("design:type", tooltip_popup_component_1.TooltipPopupComponent)
    ], ChartComponent.prototype, "tooltipInstance", void 0);
    tslib_1.__decorate([
        core_2.ViewChild(crosshair_tooltips_container_component_1.CrosshairTooltipsContainerComponent, { static: true }),
        tslib_1.__metadata("design:type", crosshair_tooltips_container_component_1.CrosshairTooltipsContainerComponent)
    ], ChartComponent.prototype, "crossahirTooltips", void 0);
    tslib_1.__decorate([
        core_2.ViewChild('surface', { static: true }),
        tslib_1.__metadata("design:type", core_3.ElementRef)
    ], ChartComponent.prototype, "surfaceElement", void 0);
    ChartComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            exportAs: 'kendoChart',
            providers: [
                configuration_service_1.ConfigurationService,
                tooltip_template_service_1.TooltipTemplateService,
                instance_event_service_1.InstanceEventService,
                kendo_angular_l10n_1.LocalizationService,
                {
                    provide: kendo_angular_l10n_1.L10N_PREFIX,
                    useValue: 'kendo.chart'
                }
            ],
            selector: 'kendo-chart',
            template: "\n    <div #surface class=\"k-chart-surface\"></div>\n    <kendo-chart-crosshair-tooltips-container [popupSettings]=\"popupSettings\">\n    </kendo-chart-crosshair-tooltips-container>\n    <kendo-chart-tooltip-popup (leave)=\"tooltipMouseleave($event)\" [popupSettings]=\"popupSettings\">\n    </kendo-chart-tooltip-popup>\n    <kendo-resize-sensor (resize)=\"onResize($event)\" [rateLimit]=\"resizeRateLimit\"></kendo-resize-sensor>\n    <div class=\"k-chart-donut-center\" [ngStyle]=\"donutCenterStyle\" *ngIf=\"donutCenterStyle && donutCenterTemplate\">\n      <ng-template [ngTemplateOutlet]=\"donutCenterTemplate.templateRef\"></ng-template>\n    </div>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService,
            theme_service_1.ThemeService,
            core_3.ElementRef,
            kendo_angular_intl_1.IntlService,
            kendo_angular_l10n_1.LocalizationService,
            core_1.NgZone,
            instance_event_service_1.InstanceEventService,
            core_1.ChangeDetectorRef,
            core_1.Renderer2])
    ], ChartComponent);
    return ChartComponent;
}(chart_component_generated_1.ChartComponentGenerated));
exports.ChartComponent = ChartComponent;
