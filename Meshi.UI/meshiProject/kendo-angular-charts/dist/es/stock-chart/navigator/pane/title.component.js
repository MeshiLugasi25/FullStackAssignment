/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { PanesTitleComponent } from '../../../chart/pane/title.component';
/**
 * The title configuration of the StockChart navigator pane.
 */
var NavigatorPaneTitleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorPaneTitleComponent, _super);
    function NavigatorPaneTitleComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    NavigatorPaneTitleComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-navigator-pane-title',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], NavigatorPaneTitleComponent);
    return NavigatorPaneTitleComponent;
}(PanesTitleComponent));
export { NavigatorPaneTitleComponent };
