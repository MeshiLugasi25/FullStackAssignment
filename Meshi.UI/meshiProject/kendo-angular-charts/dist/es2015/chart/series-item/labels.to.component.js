/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesLabelsToComponentGenerated } from '../series-item/labels.to.component.generated';
/**
 * The `to` label configuration of the Chart series.
 */
let SeriesLabelsToComponent = class SeriesLabelsToComponent extends SeriesLabelsToComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
SeriesLabelsToComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-labels-to',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], SeriesLabelsToComponent);
export { SeriesLabelsToComponent };
