/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { XAxisNotesLabelComponentGenerated } from '../x-axis-item/notes.label.component.generated';
/**
 * The label of the notes.
 */
var XAxisNotesLabelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(XAxisNotesLabelComponent, _super);
    // Place custom properties here
    function XAxisNotesLabelComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    XAxisNotesLabelComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-x-axis-item-notes-label',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], XAxisNotesLabelComponent);
    return XAxisNotesLabelComponent;
}(XAxisNotesLabelComponentGenerated));
export { XAxisNotesLabelComponent };
