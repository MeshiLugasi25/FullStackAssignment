/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { CategoryAxisNotesComponent } from '../../../chart/category-axis-item/notes.component';
/**
 * The configuration of the category axis notes.
 */
let NavigatorCategoryAxisNotesComponent = class NavigatorCategoryAxisNotesComponent extends CategoryAxisNotesComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorCategoryAxisNotesComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-category-axis-notes',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], NavigatorCategoryAxisNotesComponent);
export { NavigatorCategoryAxisNotesComponent };
