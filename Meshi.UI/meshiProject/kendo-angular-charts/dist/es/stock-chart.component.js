/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Input, Component, NgZone, ElementRef, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy, Renderer2 } from '@angular/core';
import { isDevMode } from '@angular/core';
import { ConfigurationService } from './common/configuration.service';
import { RootConfigurationService } from './common/root-configuration.service';
import { TooltipTemplateService } from './common/tooltip-template.service';
import { ChartComponent } from './chart.component';
import { ThemeService } from './common/theme.service';
import { IntlService } from '@progress/kendo-angular-intl';
import { StockInstanceEventService } from './stock-chart/events/instance-event.service';
import { StockChart } from '@progress/kendo-charts';
import { LocalizationService, L10N_PREFIX } from '@progress/kendo-angular-l10n';
import { validatePackage } from '@progress/kendo-licensing';
import { packageMetadata } from './package-metadata';
var NAVIGATOR_DEFAULTS = {
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
var StockChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StockChartComponent, _super);
    function StockChartComponent(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer) {
        var _this = _super.call(this, configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer) || this;
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
         * Fires when the navigator range is changed.
         */
        _this.navigatorFilter = new EventEmitter();
        _this.redrawSlaves = false;
        _this.hostClasses = ['k-chart', 'k-stockchart'];
        validatePackage(packageMetadata);
        return _this;
    }
    /**
     * If called, the navigator pane is not redrawn the next time the StockChart options are updated.
     * The method is useful if you need to update only the main series data for the selected period.
     */
    StockChartComponent.prototype.skipNavigatorRedraw = function () {
        this.redrawSlaves = true;
    };
    StockChartComponent.prototype.createInstance = function (element, observer) {
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
    };
    StockChartComponent.prototype.updateOptions = function () {
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
    };
    StockChartComponent.prototype.applyNavigatorDefaults = function () {
        this.options.navigator = Object.assign({}, this.options.navigator, NAVIGATOR_DEFAULTS);
    };
    StockChartComponent.prototype.isDevMode = function () {
        return isDevMode();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], StockChartComponent.prototype, "navigator", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], StockChartComponent.prototype, "pannable", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], StockChartComponent.prototype, "zoomable", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], StockChartComponent.prototype, "navigatorFilter", void 0);
    StockChartComponent = tslib_1.__decorate([
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
            template: "\n        <div #surface class=\"k-chart-surface\"></div>\n        <kendo-chart-crosshair-tooltips-container [popupSettings]=\"popupSettings\">\n        </kendo-chart-crosshair-tooltips-container>\n        <kendo-chart-tooltip-popup (leave)=\"tooltipMouseleave($event)\" [popupSettings]=\"popupSettings\">\n        </kendo-chart-tooltip-popup>\n        <kendo-resize-sensor (resize)=\"onResize($event)\"></kendo-resize-sensor>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService,
            ThemeService,
            ElementRef,
            IntlService,
            LocalizationService,
            NgZone,
            StockInstanceEventService,
            ChangeDetectorRef,
            Renderer2])
    ], StockChartComponent);
    return StockChartComponent;
}(ChartComponent));
export { StockChartComponent };
