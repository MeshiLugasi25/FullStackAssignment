/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../common/configuration.service';
import { CollectionService } from '../common/collection.service';
import { ValueAxisComponentGenerated } from './value-axis.component.generated';
/**
 * A collection of one or more value axis configuration components.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-value-axis>
 *         <kendo-chart-value-axis-item>
 *         </kendo-chart-value-axis-item>
 *         <kendo-chart-value-axis-item name="secondAxis">
 *         </kendo-chart-value-axis-item>
 *       </kendo-chart-value-axis>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item type="line" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *         <kendo-chart-series-item type="line" [data]="[0.1, 0.2, 0.3]"
 *                                  axis="secondAxis">
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
export declare class ValueAxisComponent extends ValueAxisComponentGenerated {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    constructor(configurationService: ConfigurationService, collectionService: CollectionService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ValueAxisComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ValueAxisComponent, "kendo-chart-value-axis", never, {}, {}, never, never>;
}

//# sourceMappingURL=value-axis.component.d.ts.map