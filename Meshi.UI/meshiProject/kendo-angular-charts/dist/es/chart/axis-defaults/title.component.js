/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { AxisDefaultsTitleComponentGenerated } from '../axis-defaults/title.component.generated';
/**
 * The configuration of the axis title ([see example]({% slug api_charts_axisdefaultscomponent %})).
 */
var AxisDefaultsTitleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AxisDefaultsTitleComponent, _super);
    // Place custom properties here
    function AxisDefaultsTitleComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    AxisDefaultsTitleComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-axis-defaults-title',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], AxisDefaultsTitleComponent);
    return AxisDefaultsTitleComponent;
}(AxisDefaultsTitleComponentGenerated));
export { AxisDefaultsTitleComponent };
