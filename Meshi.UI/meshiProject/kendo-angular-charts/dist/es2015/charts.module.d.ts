/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './chart.module';
import * as ɵngcc2 from './sparkline.module';
import * as ɵngcc3 from './stock-chart.module';
export declare class ChartsModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ChartsModule, never, never, [typeof ɵngcc1.ChartModule, typeof ɵngcc2.SparklineModule, typeof ɵngcc3.StockChartModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ChartsModule>;
}

//# sourceMappingURL=charts.module.d.ts.map