/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * The position of a note label.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 * import { NoteLabelPosition } from '@progress/kendo-angular-charts';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-value-axis>
 *         <kendo-chart-value-axis-item>
 *             <kendo-chart-value-axis-item-notes [data]="[{value: 1, label: { text: 'Foo' }}]">
 *               <kendo-chart-value-axis-item-notes-label [position]="position">
 *               </kendo-chart-value-axis-item-notes-label>
 *             </kendo-chart-value-axis-item-notes>
 *         </kendo-chart-value-axis-item>
 *       </kendo-chart-value-axis>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 *   public position: NoteLabelPosition = "outside";
 * }
 *
 * ```
 */
export declare type NoteLabelPosition = 'inside' | 'outside';
