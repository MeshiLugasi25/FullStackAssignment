/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { YAxisNotesComponentGenerated } from '../y-axis-item/notes.component.generated';
/**
 * The configuration of the Y axis notes
 * ([see example]({% slug api_charts_yaxiscomponent %})).
 */
let YAxisNotesComponent = class YAxisNotesComponent extends YAxisNotesComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
YAxisNotesComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-y-axis-item-notes',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], YAxisNotesComponent);
export { YAxisNotesComponent };
