/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ChartModule } from './chart.module';
import { SPARKLINE_DIRECTIVES } from './sparkline.directives';
import { CommonModule } from '@angular/common';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ResizeSensorModule } from '@progress/kendo-angular-common';
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
var SparklineModule = /** @class */ (function () {
    function SparklineModule() {
    }
    SparklineModule = tslib_1.__decorate([
        NgModule({
            declarations: [SPARKLINE_DIRECTIVES],
            exports: [SPARKLINE_DIRECTIVES, ChartModule],
            imports: [ChartModule, CommonModule, PopupModule, ResizeSensorModule]
        })
    ], SparklineModule);
    return SparklineModule;
}());
export { SparklineModule };
