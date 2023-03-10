/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CollectionService } from '../../common/collection.service';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesItemComponent } from '../../chart/series-item.component';
/**
 * The configuration component of a navigator series item
 * ([see example]({% slug navigator_stockchart_charts %})).
 */
var NavigatorSeriesItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorSeriesItemComponent, _super);
    function NavigatorSeriesItemComponent(configurationService, collectionService) {
        var _this = _super.call(this, configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    NavigatorSeriesItemComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [ConfigurationService],
            selector: 'kendo-chart-navigator-series-item',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService,
            CollectionService])
    ], NavigatorSeriesItemComponent);
    return NavigatorSeriesItemComponent;
}(SeriesItemComponent));
export { NavigatorSeriesItemComponent };
