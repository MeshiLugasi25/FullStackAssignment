/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { YAxisLabelsComponentGenerated } from '../y-axis-item/labels.component.generated';
/**
 * The axis labels configuration.
 */
let YAxisLabelsComponent = class YAxisLabelsComponent extends YAxisLabelsComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
YAxisLabelsComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-y-axis-item-labels',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], YAxisLabelsComponent);
export { YAxisLabelsComponent };
