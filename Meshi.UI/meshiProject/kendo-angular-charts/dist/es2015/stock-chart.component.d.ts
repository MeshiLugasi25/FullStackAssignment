/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { NgZone, ElementRef, EventEmitter, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { ConfigurationService } from './common/configuration.service';
import { ChartComponent } from './chart.component';
import { ChartInstanceObserver } from './common/chart-instance-observer';
import { ThemeService } from './common/theme.service';
import { IntlService } from '@progress/kendo-angular-intl';
import { DragAction, Zoomable } from './common/property-types';
import { NavigatorFilterEvent } from './stock-chart/events/navigator-filter-event';
import { StockInstanceEventService } from './stock-chart/events/instance-event.service';
import { Navigator as StockNavigator } from './stock-chart/option-types';
import { LocalizationService } from '@progress/kendo-angular-l10n';
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
import * as ɵngcc0 from '@angular/core';
export declare class StockChartComponent extends ChartComponent {
    configurationService: ConfigurationService;
    themeService: ThemeService;
    protected element: ElementRef;
    protected intl: IntlService;
    protected localizationService: LocalizationService;
    protected ngZone: NgZone;
    protected instanceEventService: StockInstanceEventService;
    protected changeDetector: ChangeDetectorRef;
    protected renderer: Renderer2;
    /**
     * The configuration options for the data navigator.
     */
    navigator: StockNavigator;
    /**
     * @hidden
     */
    pannable: boolean | DragAction;
    /**
     * @hidden
     */
    zoomable: boolean | Zoomable;
    /**
     * Fires when the navigator range is changed.
     */
    navigatorFilter: EventEmitter<NavigatorFilterEvent>;
    protected redrawSlaves: boolean;
    protected hostClasses: string[];
    constructor(configurationService: ConfigurationService, themeService: ThemeService, element: ElementRef, intl: IntlService, localizationService: LocalizationService, ngZone: NgZone, instanceEventService: StockInstanceEventService, changeDetector: ChangeDetectorRef, renderer: Renderer2);
    /**
     * If called, the navigator pane is not redrawn the next time the StockChart options are updated.
     * The method is useful if you need to update only the main series data for the selected period.
     */
    skipNavigatorRedraw(): void;
    protected createInstance(element: any, observer: ChartInstanceObserver): void;
    protected updateOptions(): void;
    private applyNavigatorDefaults;
    private isDevMode;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StockChartComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StockChartComponent, "kendo-stockchart", ["kendoStockChart"], { "navigator": "navigator"; "pannable": "pannable"; "zoomable": "zoomable"; }, { "navigatorFilter": "navigatorFilter"; }, never, never>;
}

//# sourceMappingURL=stock-chart.component.d.ts.map