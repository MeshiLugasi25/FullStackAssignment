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
var y_axis_component_generated_1 = require("./y-axis.component.generated");
/**
 * A collection of one or more Y-axis configuration components.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *  selector: 'my-app',
 *  template: `
 *    <kendo-chart>
 *     <kendo-chart-y-axis>
 *       <kendo-chart-y-axis-item
 *         [background]="'rgba(100, 100, 100, 0.2)'"
 *         color="red"
 *         [notes]="notesConfig"
 *         [crosshair]="crosshairConfig">
 *       </kendo-chart-y-axis-item>
 *       <kendo-chart-y-axis-item name="secondAxis">
 *       </kendo-chart-y-axis-item>
 *     </kendo-chart-y-axis>
 *     <kendo-chart-series>
 *       <kendo-chart-series-item type="scatter" [data]="[[1, 2]]">
 *       </kendo-chart-series-item>
 *       <kendo-chart-series-item type="scatter" [data]="[[0.1, 0.2]]"
 *                                yAxis="secondAxis">
 *       </kendo-chart-series-item>
 *     </kendo-chart-series>
 *   </kendo-chart>
 * `
 * })
 * export class AppComponent {
 * public notesConfig = {
 *   data: [{
 *       value: 0.2,
 *       text: "foo"
 *     }, {
 *       value: 0.8,
 *       text: "bar"
 *     }],
 *    label: {
 *     content: (args: any) => args.dataItem.text,
 *     background: 'red',
 *     color: 'white'
 *   },
 *   line: {
 *     color: 'blue',
 *     dashType: 'dash',
 *     length: 150,
 *     width: 2
 *   },
 *   position: 'top'
 * };
 *
 * public crosshairConfig = {
 *   color: 'green',
 *   opacity: 0.8,
 *   visible: true,
 *   width: 3
 * };
 * }
 *
 * ```
 */
var YAxisComponent = /** @class */ (function (_super) {
    tslib_1.__extends(YAxisComponent, _super);
    // Place custom properties here
    function YAxisComponent(configurationService, collectionService) {
        var _this = _super.call(this, configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    YAxisComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [collection_service_1.CollectionService],
            selector: 'kendo-chart-y-axis',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService,
            collection_service_1.CollectionService])
    ], YAxisComponent);
    return YAxisComponent;
}(y_axis_component_generated_1.YAxisComponentGenerated));
exports.YAxisComponent = YAxisComponent;
