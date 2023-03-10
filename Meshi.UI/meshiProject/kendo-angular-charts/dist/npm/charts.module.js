/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var chart_module_1 = require("./chart.module");
var stock_chart_module_1 = require("./stock-chart.module");
var sparkline_module_1 = require("./sparkline.module");
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
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = tslib_1.__decorate([
        core_1.NgModule({
            exports: [chart_module_1.ChartModule, sparkline_module_1.SparklineModule, stock_chart_module_1.StockChartModule]
        })
    ], ChartsModule);
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;
