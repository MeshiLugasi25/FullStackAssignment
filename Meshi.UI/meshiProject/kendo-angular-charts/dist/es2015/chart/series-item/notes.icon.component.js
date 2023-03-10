/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesNotesIconComponentGenerated } from '../series-item/notes.icon.component.generated';
/**
 * The icon of the notes.
 */
let SeriesNotesIconComponent = class SeriesNotesIconComponent extends SeriesNotesIconComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
SeriesNotesIconComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-notes-icon',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], SeriesNotesIconComponent);
export { SeriesNotesIconComponent };
