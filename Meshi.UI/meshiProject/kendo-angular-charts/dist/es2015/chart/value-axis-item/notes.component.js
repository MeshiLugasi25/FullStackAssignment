/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { ValueAxisNotesComponentGenerated } from '../value-axis-item/notes.component.generated';
/**
 * The configuration of the value axis notes ([see example]({% slug notes_chart_charts %}#toc-axis-notes)).
 */
let ValueAxisNotesComponent = class ValueAxisNotesComponent extends ValueAxisNotesComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
ValueAxisNotesComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-value-axis-item-notes',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], ValueAxisNotesComponent);
export { ValueAxisNotesComponent };
