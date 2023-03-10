/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesDefaultsTooltipComponentGenerated } from '../series-defaults/tooltip.component.generated';
/**
 * The configuration options of the Chart series tooltip.
 */
let SeriesDefaultsTooltipComponent = class SeriesDefaultsTooltipComponent extends SeriesDefaultsTooltipComponentGenerated {
    // Place custom properties here.
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
SeriesDefaultsTooltipComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-defaults-tooltip',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], SeriesDefaultsTooltipComponent);
export { SeriesDefaultsTooltipComponent };
