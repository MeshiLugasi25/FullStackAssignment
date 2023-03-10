/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisNotesComponentGenerated } from '../category-axis-item/notes.component.generated';
/**
 * The configuration of the category axis notes ([see example]({% slug notes_chart_charts %}#toc-axis-notes)).
 */
var CategoryAxisNotesComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryAxisNotesComponent, _super);
    // Place custom properties here
    function CategoryAxisNotesComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    CategoryAxisNotesComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-category-axis-item-notes',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], CategoryAxisNotesComponent);
    return CategoryAxisNotesComponent;
}(CategoryAxisNotesComponentGenerated));
export { CategoryAxisNotesComponent };
