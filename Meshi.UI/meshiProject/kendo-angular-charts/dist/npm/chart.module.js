/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var kendo_angular_popup_1 = require("@progress/kendo-angular-popup");
var kendo_angular_common_1 = require("@progress/kendo-angular-common");
var theme_service_1 = require("./common/theme.service");
var chart_directives_1 = require("./chart.directives");
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
var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    ChartModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [chart_directives_1.CHART_DIRECTIVES],
            exports: [chart_directives_1.CHART_DIRECTIVES],
            imports: [common_1.CommonModule, kendo_angular_popup_1.PopupModule, kendo_angular_common_1.ResizeSensorModule],
            providers: [
                theme_service_1.ThemeService
            ]
        })
    ], ChartModule);
    return ChartModule;
}());
exports.ChartModule = ChartModule;
