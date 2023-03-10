/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './chart.component';
import * as ɵngcc2 from './chart/tooltip/tooltip-popup.component';
import * as ɵngcc3 from './chart/tooltip/series-tooltip-template.directive';
import * as ɵngcc4 from './chart/tooltip/shared-tooltip-template.directive';
import * as ɵngcc5 from './chart/tooltip/crosshair-tooltips-container.component';
import * as ɵngcc6 from './chart/tooltip/crosshair-tooltip.component';
import * as ɵngcc7 from './chart/donut-center-template.directive';
import * as ɵngcc8 from './chart/axis-defaults.component';
import * as ɵngcc9 from './chart/axis-defaults/crosshair.component';
import * as ɵngcc10 from './chart/axis-defaults/crosshair.tooltip.component';
import * as ɵngcc11 from './chart/axis-defaults/labels.component';
import * as ɵngcc12 from './chart/axis-defaults/title.component';
import * as ɵngcc13 from './chart/category-axis.component';
import * as ɵngcc14 from './chart/category-axis-item/crosshair.component';
import * as ɵngcc15 from './chart/category-axis-item/crosshair.tooltip.component';
import * as ɵngcc16 from './chart/category-axis-item.component';
import * as ɵngcc17 from './chart/category-axis-item/labels.component';
import * as ɵngcc18 from './chart/category-axis-item/range-labels.component';
import * as ɵngcc19 from './chart/category-axis-item/notes.component';
import * as ɵngcc20 from './chart/category-axis-item/notes.icon.component';
import * as ɵngcc21 from './chart/category-axis-item/notes.label.component';
import * as ɵngcc22 from './chart/category-axis-item/select.component';
import * as ɵngcc23 from './chart/category-axis-item/title.component';
import * as ɵngcc24 from './chart/chart-area.component';
import * as ɵngcc25 from './chart/legend.component';
import * as ɵngcc26 from './chart/legend/inactive-items.component';
import * as ɵngcc27 from './chart/legend/item.component';
import * as ɵngcc28 from './chart/pane.component';
import * as ɵngcc29 from './chart/pane-defaults.component';
import * as ɵngcc30 from './chart/pane-defaults/title.component';
import * as ɵngcc31 from './chart/panes.component';
import * as ɵngcc32 from './chart/pane/title.component';
import * as ɵngcc33 from './chart/plot-area.component';
import * as ɵngcc34 from './chart/series.component';
import * as ɵngcc35 from './chart/series-defaults.component';
import * as ɵngcc36 from './chart/series-defaults/labels.component';
import * as ɵngcc37 from './chart/series-defaults/labels.from.component';
import * as ɵngcc38 from './chart/series-defaults/labels.to.component';
import * as ɵngcc39 from './chart/series-defaults/notes.component';
import * as ɵngcc40 from './chart/series-defaults/notes.icon.component';
import * as ɵngcc41 from './chart/series-defaults/notes.label.component';
import * as ɵngcc42 from './chart/series-defaults/tooltip.component';
import * as ɵngcc43 from './chart/series-item/error-bars.component';
import * as ɵngcc44 from './chart/series-item/extremes.component';
import * as ɵngcc45 from './chart/series-item/highlight.component';
import * as ɵngcc46 from './chart/series-item.component';
import * as ɵngcc47 from './chart/series-item/labels.component';
import * as ɵngcc48 from './chart/series-item/labels.from.component';
import * as ɵngcc49 from './chart/series-item/labels.to.component';
import * as ɵngcc50 from './chart/series-item/markers.component';
import * as ɵngcc51 from './chart/series-item/notes.component';
import * as ɵngcc52 from './chart/series-item/notes.icon.component';
import * as ɵngcc53 from './chart/series-item/notes.label.component';
import * as ɵngcc54 from './chart/series-item/outliers.component';
import * as ɵngcc55 from './chart/series-item/tooltip.component';
import * as ɵngcc56 from './chart/title.component';
import * as ɵngcc57 from './chart/tooltip.component';
import * as ɵngcc58 from './chart/value-axis.component';
import * as ɵngcc59 from './chart/value-axis-item/crosshair.component';
import * as ɵngcc60 from './chart/value-axis-item/crosshair.tooltip.component';
import * as ɵngcc61 from './chart/value-axis-item.component';
import * as ɵngcc62 from './chart/value-axis-item/labels.component';
import * as ɵngcc63 from './chart/value-axis-item/notes.component';
import * as ɵngcc64 from './chart/value-axis-item/notes.icon.component';
import * as ɵngcc65 from './chart/value-axis-item/notes.label.component';
import * as ɵngcc66 from './chart/value-axis-item/title.component';
import * as ɵngcc67 from './chart/x-axis.component';
import * as ɵngcc68 from './chart/x-axis-item/crosshair.component';
import * as ɵngcc69 from './chart/x-axis-item/crosshair.tooltip.component';
import * as ɵngcc70 from './chart/x-axis-item.component';
import * as ɵngcc71 from './chart/x-axis-item/labels.component';
import * as ɵngcc72 from './chart/x-axis-item/notes.component';
import * as ɵngcc73 from './chart/x-axis-item/notes.icon.component';
import * as ɵngcc74 from './chart/x-axis-item/notes.label.component';
import * as ɵngcc75 from './chart/x-axis-item/title.component';
import * as ɵngcc76 from './chart/y-axis.component';
import * as ɵngcc77 from './chart/y-axis-item/crosshair.component';
import * as ɵngcc78 from './chart/y-axis-item/crosshair.tooltip.component';
import * as ɵngcc79 from './chart/y-axis-item.component';
import * as ɵngcc80 from './chart/y-axis-item/labels.component';
import * as ɵngcc81 from './chart/y-axis-item/notes.component';
import * as ɵngcc82 from './chart/y-axis-item/notes.icon.component';
import * as ɵngcc83 from './chart/y-axis-item/notes.label.component';
import * as ɵngcc84 from './chart/y-axis-item/title.component';
import * as ɵngcc85 from './chart/zoomable.component';
import * as ɵngcc86 from '@angular/common';
import * as ɵngcc87 from '@progress/kendo-angular-popup';
import * as ɵngcc88 from '@progress/kendo-angular-common';
export declare class ChartModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ChartModule, [typeof ɵngcc1.ChartComponent, typeof ɵngcc2.TooltipPopupComponent, typeof ɵngcc3.SeriesTooltipTemplateDirective, typeof ɵngcc4.SharedTooltipTemplateDirective, typeof ɵngcc5.CrosshairTooltipsContainerComponent, typeof ɵngcc6.CrosshairTooltipComponent, typeof ɵngcc7.DonutCenterTemplateDirective, typeof ɵngcc8.AxisDefaultsComponent, typeof ɵngcc9.AxisDefaultsCrosshairComponent, typeof ɵngcc10.AxisDefaultsCrosshairTooltipComponent, typeof ɵngcc11.AxisDefaultsLabelsComponent, typeof ɵngcc12.AxisDefaultsTitleComponent, typeof ɵngcc13.CategoryAxisComponent, typeof ɵngcc14.CategoryAxisCrosshairComponent, typeof ɵngcc15.CategoryAxisCrosshairTooltipComponent, typeof ɵngcc16.CategoryAxisItemComponent, typeof ɵngcc17.CategoryAxisLabelsComponent, typeof ɵngcc18.CategoryAxisRangeLabelsComponent, typeof ɵngcc19.CategoryAxisNotesComponent, typeof ɵngcc20.CategoryAxisNotesIconComponent, typeof ɵngcc21.CategoryAxisNotesLabelComponent, typeof ɵngcc22.CategoryAxisSelectComponent, typeof ɵngcc23.CategoryAxisTitleComponent, typeof ɵngcc24.ChartAreaComponent, typeof ɵngcc25.LegendComponent, typeof ɵngcc26.LegendInactiveItemsComponent, typeof ɵngcc27.LegendItemComponent, typeof ɵngcc28.PaneComponent, typeof ɵngcc29.PaneDefaultsComponent, typeof ɵngcc30.PaneDefaultsTitleComponent, typeof ɵngcc31.PanesComponent, typeof ɵngcc32.PanesTitleComponent, typeof ɵngcc33.PlotAreaComponent, typeof ɵngcc34.SeriesComponent, typeof ɵngcc35.SeriesDefaultsComponent, typeof ɵngcc36.SeriesDefaultsLabelsComponent, typeof ɵngcc37.SeriesDefaultsLabelsFromComponent, typeof ɵngcc38.SeriesDefaultsLabelsToComponent, typeof ɵngcc39.SeriesDefaultsNotesComponent, typeof ɵngcc40.SeriesDefaultsNotesIconComponent, typeof ɵngcc41.SeriesDefaultsNotesLabelComponent, typeof ɵngcc42.SeriesDefaultsTooltipComponent, typeof ɵngcc43.SeriesErrorBarsComponent, typeof ɵngcc44.SeriesExtremesComponent, typeof ɵngcc45.SeriesHighlightComponent, typeof ɵngcc46.SeriesItemComponent, typeof ɵngcc47.SeriesLabelsComponent, typeof ɵngcc48.SeriesLabelsFromComponent, typeof ɵngcc49.SeriesLabelsToComponent, typeof ɵngcc50.SeriesMarkersComponent, typeof ɵngcc51.SeriesNotesComponent, typeof ɵngcc52.SeriesNotesIconComponent, typeof ɵngcc53.SeriesNotesLabelComponent, typeof ɵngcc54.SeriesOutliersComponent, typeof ɵngcc55.SeriesTooltipComponent, typeof ɵngcc56.TitleComponent, typeof ɵngcc57.TooltipComponent, typeof ɵngcc58.ValueAxisComponent, typeof ɵngcc59.ValueAxisCrosshairComponent, typeof ɵngcc60.ValueAxisCrosshairTooltipComponent, typeof ɵngcc61.ValueAxisItemComponent, typeof ɵngcc62.ValueAxisLabelsComponent, typeof ɵngcc63.ValueAxisNotesComponent, typeof ɵngcc64.ValueAxisNotesIconComponent, typeof ɵngcc65.ValueAxisNotesLabelComponent, typeof ɵngcc66.ValueAxisTitleComponent, typeof ɵngcc67.XAxisComponent, typeof ɵngcc68.XAxisCrosshairComponent, typeof ɵngcc69.XAxisCrosshairTooltipComponent, typeof ɵngcc70.XAxisItemComponent, typeof ɵngcc71.XAxisLabelsComponent, typeof ɵngcc72.XAxisNotesComponent, typeof ɵngcc73.XAxisNotesIconComponent, typeof ɵngcc74.XAxisNotesLabelComponent, typeof ɵngcc75.XAxisTitleComponent, typeof ɵngcc76.YAxisComponent, typeof ɵngcc77.YAxisCrosshairComponent, typeof ɵngcc78.YAxisCrosshairTooltipComponent, typeof ɵngcc79.YAxisItemComponent, typeof ɵngcc80.YAxisLabelsComponent, typeof ɵngcc81.YAxisNotesComponent, typeof ɵngcc82.YAxisNotesIconComponent, typeof ɵngcc83.YAxisNotesLabelComponent, typeof ɵngcc84.YAxisTitleComponent, typeof ɵngcc85.ZoomableComponent], [typeof ɵngcc86.CommonModule, typeof ɵngcc87.PopupModule, typeof ɵngcc88.ResizeSensorModule], [typeof ɵngcc1.ChartComponent, typeof ɵngcc2.TooltipPopupComponent, typeof ɵngcc3.SeriesTooltipTemplateDirective, typeof ɵngcc4.SharedTooltipTemplateDirective, typeof ɵngcc5.CrosshairTooltipsContainerComponent, typeof ɵngcc6.CrosshairTooltipComponent, typeof ɵngcc7.DonutCenterTemplateDirective, typeof ɵngcc8.AxisDefaultsComponent, typeof ɵngcc9.AxisDefaultsCrosshairComponent, typeof ɵngcc10.AxisDefaultsCrosshairTooltipComponent, typeof ɵngcc11.AxisDefaultsLabelsComponent, typeof ɵngcc12.AxisDefaultsTitleComponent, typeof ɵngcc13.CategoryAxisComponent, typeof ɵngcc14.CategoryAxisCrosshairComponent, typeof ɵngcc15.CategoryAxisCrosshairTooltipComponent, typeof ɵngcc16.CategoryAxisItemComponent, typeof ɵngcc17.CategoryAxisLabelsComponent, typeof ɵngcc18.CategoryAxisRangeLabelsComponent, typeof ɵngcc19.CategoryAxisNotesComponent, typeof ɵngcc20.CategoryAxisNotesIconComponent, typeof ɵngcc21.CategoryAxisNotesLabelComponent, typeof ɵngcc22.CategoryAxisSelectComponent, typeof ɵngcc23.CategoryAxisTitleComponent, typeof ɵngcc24.ChartAreaComponent, typeof ɵngcc25.LegendComponent, typeof ɵngcc26.LegendInactiveItemsComponent, typeof ɵngcc27.LegendItemComponent, typeof ɵngcc28.PaneComponent, typeof ɵngcc29.PaneDefaultsComponent, typeof ɵngcc30.PaneDefaultsTitleComponent, typeof ɵngcc31.PanesComponent, typeof ɵngcc32.PanesTitleComponent, typeof ɵngcc33.PlotAreaComponent, typeof ɵngcc34.SeriesComponent, typeof ɵngcc35.SeriesDefaultsComponent, typeof ɵngcc36.SeriesDefaultsLabelsComponent, typeof ɵngcc37.SeriesDefaultsLabelsFromComponent, typeof ɵngcc38.SeriesDefaultsLabelsToComponent, typeof ɵngcc39.SeriesDefaultsNotesComponent, typeof ɵngcc40.SeriesDefaultsNotesIconComponent, typeof ɵngcc41.SeriesDefaultsNotesLabelComponent, typeof ɵngcc42.SeriesDefaultsTooltipComponent, typeof ɵngcc43.SeriesErrorBarsComponent, typeof ɵngcc44.SeriesExtremesComponent, typeof ɵngcc45.SeriesHighlightComponent, typeof ɵngcc46.SeriesItemComponent, typeof ɵngcc47.SeriesLabelsComponent, typeof ɵngcc48.SeriesLabelsFromComponent, typeof ɵngcc49.SeriesLabelsToComponent, typeof ɵngcc50.SeriesMarkersComponent, typeof ɵngcc51.SeriesNotesComponent, typeof ɵngcc52.SeriesNotesIconComponent, typeof ɵngcc53.SeriesNotesLabelComponent, typeof ɵngcc54.SeriesOutliersComponent, typeof ɵngcc55.SeriesTooltipComponent, typeof ɵngcc56.TitleComponent, typeof ɵngcc57.TooltipComponent, typeof ɵngcc58.ValueAxisComponent, typeof ɵngcc59.ValueAxisCrosshairComponent, typeof ɵngcc60.ValueAxisCrosshairTooltipComponent, typeof ɵngcc61.ValueAxisItemComponent, typeof ɵngcc62.ValueAxisLabelsComponent, typeof ɵngcc63.ValueAxisNotesComponent, typeof ɵngcc64.ValueAxisNotesIconComponent, typeof ɵngcc65.ValueAxisNotesLabelComponent, typeof ɵngcc66.ValueAxisTitleComponent, typeof ɵngcc67.XAxisComponent, typeof ɵngcc68.XAxisCrosshairComponent, typeof ɵngcc69.XAxisCrosshairTooltipComponent, typeof ɵngcc70.XAxisItemComponent, typeof ɵngcc71.XAxisLabelsComponent, typeof ɵngcc72.XAxisNotesComponent, typeof ɵngcc73.XAxisNotesIconComponent, typeof ɵngcc74.XAxisNotesLabelComponent, typeof ɵngcc75.XAxisTitleComponent, typeof ɵngcc76.YAxisComponent, typeof ɵngcc77.YAxisCrosshairComponent, typeof ɵngcc78.YAxisCrosshairTooltipComponent, typeof ɵngcc79.YAxisItemComponent, typeof ɵngcc80.YAxisLabelsComponent, typeof ɵngcc81.YAxisNotesComponent, typeof ɵngcc82.YAxisNotesIconComponent, typeof ɵngcc83.YAxisNotesLabelComponent, typeof ɵngcc84.YAxisTitleComponent, typeof ɵngcc85.ZoomableComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ChartModule>;
}

//# sourceMappingURL=chart.module.d.ts.map