/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ChartModule } from './chart.module';
import { CommonModule } from '@angular/common';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ResizeSensorModule } from '@progress/kendo-angular-common';
import { STOCK_CHART_DIRECTIVES } from './stock-chart.directives';
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
StockChartModule = tslib_1.__decorate([
    NgModule({
        declarations: [STOCK_CHART_DIRECTIVES],
        exports: [STOCK_CHART_DIRECTIVES, ChartModule],
        imports: [ChartModule, CommonModule, PopupModule, ResizeSensorModule]
    })
], StockChartModule);
export { StockChartModule };
