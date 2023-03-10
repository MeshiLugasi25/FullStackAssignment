/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * The position of the axis labels.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 * import { AxisLabelsPosition } from '@progress/kendo-angular-charts';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-category-axis>
 *         <kendo-chart-category-axis-item>
 *           <kendo-chart-category-axis-item-labels [position]="position">
 *           </kendo-chart-category-axis-item-labels>
 *         </kendo-chart-category-axis-item>
 *       </kendo-chart-category-axis>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 *   public position: AxisLabelsPosition = "end";
 * }
 *
 * ```
 */
export declare type AxisLabelsPosition = 'start' | 'end' | 'onAxis' | '';
