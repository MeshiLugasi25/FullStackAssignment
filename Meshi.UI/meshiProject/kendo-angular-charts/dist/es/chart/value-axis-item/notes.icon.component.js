/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { ValueAxisNotesIconComponentGenerated } from '../value-axis-item/notes.icon.component.generated';
/**
 * The icon of the notes.
 */
var ValueAxisNotesIconComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ValueAxisNotesIconComponent, _super);
    // Place custom properties here
    function ValueAxisNotesIconComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    ValueAxisNotesIconComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-value-axis-item-notes-icon',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], ValueAxisNotesIconComponent);
    return ValueAxisNotesIconComponent;
}(ValueAxisNotesIconComponentGenerated));
export { ValueAxisNotesIconComponent };
