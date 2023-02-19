/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ConfigurationService } from '../common/configuration.service';
import { ZoomableComponentGenerated } from './zoomable.component.generated';
/**
 * Specifies if the Chart can be zoomed.
 *
 * @example
 *
 * ```html-no-run
 * <kendo-chart>
 *   <kendo-chart-zoomable [mousewheel]="false"></kendo-chart-zoomable>
 * </kendo-chart>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class ZoomableComponent extends ZoomableComponentGenerated {
    configurationService: ConfigurationService;
    constructor(configurationService: ConfigurationService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ZoomableComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ZoomableComponent, "kendo-chart-zoomable", never, {}, {}, never, never>;
}

//# sourceMappingURL=zoomable.component.d.ts.map