/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../common/configuration.service';
import { CollectionService } from '../common/collection.service';
import { PanesComponentGenerated } from './panes.component.generated';
/**
 * A collection of one or more pane configuration components.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-panes>
 *         <kendo-chart-pane name="topPane">
 *         </kendo-chart-pane>
 *         <kendo-chart-pane name="bottomPane">
 *         </kendo-chart-pane>
 *       </kendo-chart-panes>
 *       <kendo-chart-value-axis>
 *         <kendo-chart-value-axis-item pane="topPane">
 *         </kendo-chart-value-axis-item>
 *         <kendo-chart-value-axis-item name="bottomAxis" pane="bottomPane">
 *         </kendo-chart-value-axis-item>
 *       </kendo-chart-value-axis>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item type="line" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *         <kendo-chart-series-item type="line" [data]="[1, 2, 3, 4]"
 *                                  axis="bottomAxis">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 * }
 *
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class PanesComponent extends PanesComponentGenerated {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    constructor(configurationService: ConfigurationService, collectionService: CollectionService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PanesComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PanesComponent, "kendo-chart-panes", never, {}, {}, never, never>;
}

//# sourceMappingURL=panes.component.d.ts.map