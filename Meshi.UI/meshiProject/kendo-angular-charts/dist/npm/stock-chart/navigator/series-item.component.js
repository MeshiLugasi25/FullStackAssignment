/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var collection_service_1 = require("../../common/collection.service");
var configuration_service_1 = require("../../common/configuration.service");
var series_item_component_1 = require("../../chart/series-item.component");
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
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [configuration_service_1.ConfigurationService],
            selector: 'kendo-chart-navigator-series-item',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService,
            collection_service_1.CollectionService])
    ], NavigatorSeriesItemComponent);
    return NavigatorSeriesItemComponent;
}(series_item_component_1.SeriesItemComponent));
exports.NavigatorSeriesItemComponent = NavigatorSeriesItemComponent;
