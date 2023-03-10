/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { CategoryAxisNotesIconComponent } from '../../../chart/category-axis-item/notes.icon.component';
/**
 * The icon of the notes.
 */
let NavigatorCategoryAxisNotesIconComponent = class NavigatorCategoryAxisNotesIconComponent extends CategoryAxisNotesIconComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorCategoryAxisNotesIconComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-category-axis-notes-icon',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], NavigatorCategoryAxisNotesIconComponent);
export { NavigatorCategoryAxisNotesIconComponent };
