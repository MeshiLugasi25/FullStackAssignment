/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../common/configuration.service");
var collection_service_1 = require("../common/collection.service");
var panes_component_generated_1 = require("./panes.component.generated");
/**
 * A collection of one or more pane configuration components.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-panes>
 *         <kendo-chart-pane name="topPane">
 *         </kendo-chart-pane>
 *         <kendo-chart-pane name="bottomPane">
 *         </kendo-chart-pane>
 *       </kendo-chart-panes>
 *       <kendo-chart-value-axis>
 *         <kendo-chart-value-axis-item pane="topPane">
 *         </kendo-chart-value-axis-item>
 *         <kendo-chart-value-axis-item name="bottomAxis" pane="bottomPane">
 *         </kendo-chart-value-axis-item>
 *       </kendo-chart-value-axis>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item type="line" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *         <kendo-chart-series-item type="line" [data]="[1, 2, 3, 4]"
 *                                  axis="bottomAxis">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 * }
 *
 * ```
 */
var PanesComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PanesComponent, _super);
    // Place custom properties here
    function PanesComponent(configurationService, collectionService) {
        var _this = _super.call(this, configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    PanesComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [collection_service_1.CollectionService],
            selector: 'kendo-chart-panes',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService,
            collection_service_1.CollectionService])
    ], PanesComponent);
    return PanesComponent;
}(panes_component_generated_1.PanesComponentGenerated));
exports.PanesComponent = PanesComponent;
