/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesNotesLabelComponent } from '../../../chart/series-item/notes.label.component';
/**
 * The label of the notes.
 */
let NavigatorSeriesNotesLabelComponent = class NavigatorSeriesNotesLabelComponent extends SeriesNotesLabelComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorSeriesNotesLabelComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-notes-label',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesNotesLabelComponent);
export { NavigatorSeriesNotesLabelComponent };
