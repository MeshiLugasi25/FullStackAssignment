/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisCrosshairTooltipComponentGenerated } from '../category-axis-item/crosshair.tooltip.component.generated';
/**
 * The options of the crosshair tooltip ([see example]({% slug crosshairs_chart_charts %})).
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
let CategoryAxisCrosshairTooltipComponent = class CategoryAxisCrosshairTooltipComponent extends CategoryAxisCrosshairTooltipComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
CategoryAxisCrosshairTooltipComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-category-axis-item-crosshair-tooltip',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], CategoryAxisCrosshairTooltipComponent);
export { CategoryAxisCrosshairTooltipComponent };
