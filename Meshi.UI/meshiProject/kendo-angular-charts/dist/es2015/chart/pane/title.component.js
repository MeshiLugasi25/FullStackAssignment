/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { PanesTitleComponentGenerated } from '../pane/title.component.generated';
/**
 * The configuration of the Chart pane title.
 */
let PanesTitleComponent = class PanesTitleComponent extends PanesTitleComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
PanesTitleComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-pane-title',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], PanesTitleComponent);
export { PanesTitleComponent };
