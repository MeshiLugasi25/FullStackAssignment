/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { AxisDefaultsCrosshairTooltipComponentGenerated } from '../axis-defaults/crosshair.tooltip.component.generated';
/**
 * The options of the crosshair tooltip ([see example]({% slug crosshairs_chart_charts %})).
 * The crosshair tooltip is displayed when the [`axisDefaults.crosshair.tooltip.visible`]({% slug api_charts_axisdefaultscrosshairtooltipcomponent %}#toc-visible)
 * option is set to `true`.
 */
let AxisDefaultsCrosshairTooltipComponent = class AxisDefaultsCrosshairTooltipComponent extends AxisDefaultsCrosshairTooltipComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
AxisDefaultsCrosshairTooltipComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-axis-defaults-crosshair-tooltip',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], AxisDefaultsCrosshairTooltipComponent);
export { AxisDefaultsCrosshairTooltipComponent };
