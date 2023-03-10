/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisLabelsComponent } from './labels.component';
/**
 * The configuration of the axis date range labels ([see example]({% slug labels_chart_charts %})).
 */
let CategoryAxisRangeLabelsComponent = class CategoryAxisRangeLabelsComponent extends CategoryAxisLabelsComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.configKey = 'rangeLabels';
        this.markAsVisible();
    }
};
CategoryAxisRangeLabelsComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-category-axis-item-range-labels',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], CategoryAxisRangeLabelsComponent);
export { CategoryAxisRangeLabelsComponent };
