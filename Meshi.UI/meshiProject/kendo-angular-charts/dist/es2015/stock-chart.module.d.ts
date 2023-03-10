/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './stock-chart.component';
import * as ɵngcc2 from './stock-chart/navigator.component';
import * as ɵngcc3 from './stock-chart/navigator/category-axis.component';
import * as ɵngcc4 from './stock-chart/navigator/category-axis/crosshair.component';
import * as ɵngcc5 from './stock-chart/navigator/category-axis/crosshair.tooltip.component';
import * as ɵngcc6 from './stock-chart/navigator/category-axis/labels.component';
import * as ɵngcc7 from './stock-chart/navigator/category-axis/notes.component';
import * as ɵngcc8 from './stock-chart/navigator/category-axis/notes.icon.component';
import * as ɵngcc9 from './stock-chart/navigator/category-axis/notes.label.component';
import * as ɵngcc10 from './stock-chart/navigator/category-axis/select.component';
import * as ɵngcc11 from './stock-chart/navigator/category-axis/title.component';
import * as ɵngcc12 from './stock-chart/navigator/hint.component';
import * as ɵngcc13 from './stock-chart/navigator/pane.component';
import * as ɵngcc14 from './stock-chart/navigator/pane/title.component';
import * as ɵngcc15 from './stock-chart/navigator/select.component';
import * as ɵngcc16 from './stock-chart/navigator/series.component';
import * as ɵngcc17 from './stock-chart/navigator/series-item.component';
import * as ɵngcc18 from './stock-chart/navigator/series-item/error-bars.component';
import * as ɵngcc19 from './stock-chart/navigator/series-item/extremes.component';
import * as ɵngcc20 from './stock-chart/navigator/series-item/highlight.component';
import * as ɵngcc21 from './stock-chart/navigator/series-item/labels.component';
import * as ɵngcc22 from './stock-chart/navigator/series-item/labels.from.component';
import * as ɵngcc23 from './stock-chart/navigator/series-item/labels.to.component';
import * as ɵngcc24 from './stock-chart/navigator/series-item/markers.component';
import * as ɵngcc25 from './stock-chart/navigator/series-item/notes.component';
import * as ɵngcc26 from './stock-chart/navigator/series-item/notes.icon.component';
import * as ɵngcc27 from './stock-chart/navigator/series-item/notes.label.component';
import * as ɵngcc28 from './stock-chart/navigator/series-item/outliers.component';
import * as ɵngcc29 from './stock-chart/navigator/series-item/tooltip.component';
import * as ɵngcc30 from './chart.module';
import * as ɵngcc31 from '@angular/common';
import * as ɵngcc32 from '@progress/kendo-angular-popup';
import * as ɵngcc33 from '@progress/kendo-angular-common';
export declare class StockChartModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<StockChartModule, [typeof ɵngcc1.StockChartComponent, typeof ɵngcc2.NavigatorComponent, typeof ɵngcc3.NavigatorCategoryAxisComponent, typeof ɵngcc4.NavigatorCategoryAxisCrosshairComponent, typeof ɵngcc5.NavigatorCategoryAxisCrosshairTooltipComponent, typeof ɵngcc6.NavigatorCategoryAxisLabelsComponent, typeof ɵngcc7.NavigatorCategoryAxisNotesComponent, typeof ɵngcc8.NavigatorCategoryAxisNotesIconComponent, typeof ɵngcc9.NavigatorCategoryAxisNotesLabelComponent, typeof ɵngcc10.NavigatorCategoryAxisSelectComponent, typeof ɵngcc11.NavigatorCategoryAxisTitleComponent, typeof ɵngcc12.NavigatorHintComponent, typeof ɵngcc13.NavigatorPaneComponent, typeof ɵngcc14.NavigatorPaneTitleComponent, typeof ɵngcc15.NavigatorSelectComponent, typeof ɵngcc16.NavigatorSeriesComponent, typeof ɵngcc17.NavigatorSeriesItemComponent, typeof ɵngcc18.NavigatorSeriesErrorBarsComponent, typeof ɵngcc19.NavigatorSeriesExtremesComponent, typeof ɵngcc20.NavigatorSeriesHighlightComponent, typeof ɵngcc21.NavigatorSeriesLabelsComponent, typeof ɵngcc22.NavigatorSeriesLabelsFromComponent, typeof ɵngcc23.NavigatorSeriesLabelsToComponent, typeof ɵngcc24.NavigatorSeriesMarkersComponent, typeof ɵngcc25.NavigatorSeriesNotesComponent, typeof ɵngcc26.NavigatorSeriesNotesIconComponent, typeof ɵngcc27.NavigatorSeriesNotesLabelComponent, typeof ɵngcc28.NavigatorSeriesOutliersComponent, typeof ɵngcc29.NavigatorSeriesTooltipComponent], [typeof ɵngcc30.ChartModule, typeof ɵngcc31.CommonModule, typeof ɵngcc32.PopupModule, typeof ɵngcc33.ResizeSensorModule], [typeof ɵngcc1.StockChartComponent, typeof ɵngcc2.NavigatorComponent, typeof ɵngcc3.NavigatorCategoryAxisComponent, typeof ɵngcc4.NavigatorCategoryAxisCrosshairComponent, typeof ɵngcc5.NavigatorCategoryAxisCrosshairTooltipComponent, typeof ɵngcc6.NavigatorCategoryAxisLabelsComponent, typeof ɵngcc7.NavigatorCategoryAxisNotesComponent, typeof ɵngcc8.NavigatorCategoryAxisNotesIconComponent, typeof ɵngcc9.NavigatorCategoryAxisNotesLabelComponent, typeof ɵngcc10.NavigatorCategoryAxisSelectComponent, typeof ɵngcc11.NavigatorCategoryAxisTitleComponent, typeof ɵngcc12.NavigatorHintComponent, typeof ɵngcc13.NavigatorPaneComponent, typeof ɵngcc14.NavigatorPaneTitleComponent, typeof ɵngcc15.NavigatorSelectComponent, typeof ɵngcc16.NavigatorSeriesComponent, typeof ɵngcc17.NavigatorSeriesItemComponent, typeof ɵngcc18.NavigatorSeriesErrorBarsComponent, typeof ɵngcc19.NavigatorSeriesExtremesComponent, typeof ɵngcc20.NavigatorSeriesHighlightComponent, typeof ɵngcc21.NavigatorSeriesLabelsComponent, typeof ɵngcc22.NavigatorSeriesLabelsFromComponent, typeof ɵngcc23.NavigatorSeriesLabelsToComponent, typeof ɵngcc24.NavigatorSeriesMarkersComponent, typeof ɵngcc25.NavigatorSeriesNotesComponent, typeof ɵngcc26.NavigatorSeriesNotesIconComponent, typeof ɵngcc27.NavigatorSeriesNotesLabelComponent, typeof ɵngcc28.NavigatorSeriesOutliersComponent, typeof ɵngcc29.NavigatorSeriesTooltipComponent, typeof ɵngcc30.ChartModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<StockChartModule>;
}

//# sourceMappingURL=stock-chart.module.d.ts.map