/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesLabelsFromComponentGenerated } from '../series-item/labels.from.component.generated';
/**
 * The `from` label configuration of the Chart series.
 */
let SeriesLabelsFromComponent = class SeriesLabelsFromComponent extends SeriesLabelsFromComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
SeriesLabelsFromComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-labels-from',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], SeriesLabelsFromComponent);
export { SeriesLabelsFromComponent };
