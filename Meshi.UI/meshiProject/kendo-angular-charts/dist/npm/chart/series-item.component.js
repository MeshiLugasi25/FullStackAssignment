/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var collection_service_1 = require("../common/collection.service");
var configuration_service_1 = require("../common/configuration.service");
var series_item_component_generated_1 = require("./series-item.component.generated");
var tooltip_component_1 = require("./series-item/tooltip.component");
var toggle = function (flag) { return flag === undefined ? false : !flag; };
var ɵ0 = toggle;
exports.ɵ0 = ɵ0;
/**
 * The configuration component for a series item.
 */
var SeriesItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesItemComponent, _super);
    function SeriesItemComponent(configurationService, collectionService) {
        var _this = _super.call(this, configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    /**
     * Toggles the series visibility and updates the parent Chart
     * without animated transitions.
     */
    SeriesItemComponent.prototype.toggleVisibility = function () {
        this.options.visible = toggle(this.options.visible);
        this.notify();
    };
    /**
     * Toggles the visibility of a point with the given index.
     * Applicable for the Pie, Donut, and Funnel series.
     *
     * @param pointIndex - The zero-based index of the point to toggle.
     */
    SeriesItemComponent.prototype.togglePointVisibility = function (pointIndex) {
        var pv = this.options.pointVisibility = this.options.pointVisibility || {};
        pv[pointIndex] = toggle(pv[pointIndex]);
        this.notify();
    };
    Object.defineProperty(SeriesItemComponent.prototype, "seriesTooltipTemplateRef", {
        get: function () {
            if (this.seriesTooltip) {
                return this.seriesTooltip.seriesTooltipTemplateRef;
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.ContentChild(tooltip_component_1.SeriesTooltipComponent, { static: false }),
        tslib_1.__metadata("design:type", tooltip_component_1.SeriesTooltipComponent)
    ], SeriesItemComponent.prototype, "seriesTooltip", void 0);
    SeriesItemComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [configuration_service_1.ConfigurationService],
            selector: 'kendo-chart-series-item',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService,
            collection_service_1.CollectionService])
    ], SeriesItemComponent);
    return SeriesItemComponent;
}(series_item_component_generated_1.SeriesItemComponentGenerated));
exports.SeriesItemComponent = SeriesItemComponent;
