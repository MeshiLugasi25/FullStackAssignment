/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './sparkline.component';
import * as ɵngcc2 from './chart.module';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@progress/kendo-angular-popup';
import * as ɵngcc5 from '@progress/kendo-angular-common';
export declare class SparklineModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<SparklineModule, [typeof ɵngcc1.SparklineComponent], [typeof ɵngcc2.ChartModule, typeof ɵngcc3.CommonModule, typeof ɵngcc4.PopupModule, typeof ɵngcc5.ResizeSensorModule], [typeof ɵngcc1.SparklineComponent, typeof ɵngcc2.ChartModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<SparklineModule>;
}

//# sourceMappingURL=sparkline.module.d.ts.map