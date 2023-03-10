/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var chart_module_1 = require("./chart.module");
var common_1 = require("@angular/common");
var kendo_angular_popup_1 = require("@progress/kendo-angular-popup");
var kendo_angular_common_1 = require("@progress/kendo-angular-common");
var stock_chart_directives_1 = require("./stock-chart.directives");
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
var StockChartModule = /** @class */ (function () {
    function StockChartModule() {
    }
    StockChartModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [stock_chart_directives_1.STOCK_CHART_DIRECTIVES],
            exports: [stock_chart_directives_1.STOCK_CHART_DIRECTIVES, chart_module_1.ChartModule],
            imports: [chart_module_1.ChartModule, common_1.CommonModule, kendo_angular_popup_1.PopupModule, kendo_angular_common_1.ResizeSensorModule]
        })
    ], StockChartModule);
    return StockChartModule;
}());
exports.StockChartModule = StockChartModule;
