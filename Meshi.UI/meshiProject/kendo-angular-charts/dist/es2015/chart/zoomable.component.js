/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
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
let ZoomableComponent = class ZoomableComponent extends ZoomableComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
ZoomableComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-zoomable',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], ZoomableComponent);
export { ZoomableComponent };
