/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { PrefixConfigurationService, PREFIX } from '../../common/prefix-configuration.service';
import { PaneComponentGenerated } from '../../chart/pane.component.generated';
/**
 * The configuration component of the navigator pane
 * ([see example]({% slug overview_stockchart_charts %}#toc-navigator)).
 */
var NavigatorPaneComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorPaneComponent, _super);
    function NavigatorPaneComponent(configurationService) {
        var _this = _super.call(this, configurationService, null) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    NavigatorPaneComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [{ provide: PREFIX, useValue: 'navigator.pane' }, { provide: ConfigurationService, useClass: PrefixConfigurationService }],
            selector: 'kendo-chart-navigator-pane',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], NavigatorPaneComponent);
    return NavigatorPaneComponent;
}(PaneComponentGenerated));
export { NavigatorPaneComponent };
