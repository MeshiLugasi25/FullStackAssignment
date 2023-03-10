/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisNotesIconComponentGenerated } from '../category-axis-item/notes.icon.component.generated';
/**
 * The icon of the notes.
 */
var CategoryAxisNotesIconComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryAxisNotesIconComponent, _super);
    // Place custom properties here
    function CategoryAxisNotesIconComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    CategoryAxisNotesIconComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-category-axis-item-notes-icon',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], CategoryAxisNotesIconComponent);
    return CategoryAxisNotesIconComponent;
}(CategoryAxisNotesIconComponentGenerated));
export { CategoryAxisNotesIconComponent };
