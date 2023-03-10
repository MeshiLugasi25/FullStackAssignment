/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { YAxisNotesIconComponentGenerated } from '../y-axis-item/notes.icon.component.generated';
/**
 * The icon of the notes.
 */
var YAxisNotesIconComponent = /** @class */ (function (_super) {
    tslib_1.__extends(YAxisNotesIconComponent, _super);
    // Place custom properties here
    function YAxisNotesIconComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    YAxisNotesIconComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-y-axis-item-notes-icon',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], YAxisNotesIconComponent);
    return YAxisNotesIconComponent;
}(YAxisNotesIconComponentGenerated));
export { YAxisNotesIconComponent };
