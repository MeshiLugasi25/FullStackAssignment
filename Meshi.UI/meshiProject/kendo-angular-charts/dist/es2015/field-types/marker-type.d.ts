/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * Specifies the marker type.
 *
 * > Note that `"rect"` is an alias for `"square"`.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 * import { MarkerType } from '@progress/kendo-angular-charts';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item type="line" [data]="[1, 2, 3]">
 *           <kendo-chart-series-item-markers [type]="markerType">
 *           </kendo-chart-series-item-markers>
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 *   public markerType: MarkerType = "cross";
 * }
 *
 * ```
 */
export declare type MarkerType = 'square' | 'circle' | 'triangle' | 'cross' | 'rect' | 'roundedRect';
