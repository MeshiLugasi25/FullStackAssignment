/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Component, ViewChildren, QueryList, Input } from '@angular/core';
import { CrosshairTooltipComponent } from './crosshair-tooltip.component';
var AXES = ["categoryAxis", "valueAxis", "xAxis", "yAxis"];
/**
 * @hidden
 */
var CrosshairTooltipsContainerComponent = /** @class */ (function () {
    function CrosshairTooltipsContainerComponent() {
        this.tooltipKeys = [];
        this.tooltipsMap = {};
    }
    CrosshairTooltipsContainerComponent.prototype.show = function (e) {
        var tooltipComponents = this.crossahirTooltipComponents.toArray();
        var axisName = e.axisName;
        var axisIndex = e.axisIndex;
        for (var idx = 0; idx < tooltipComponents.length; idx++) {
            if (tooltipComponents[idx].key === axisName + axisIndex) {
                tooltipComponents[idx].show(e);
                break;
            }
        }
    };
    CrosshairTooltipsContainerComponent.prototype.hide = function () {
        var tooltipComponents = this.crossahirTooltipComponents.toArray();
        for (var idx = 0; idx < tooltipComponents.length; idx++) {
            tooltipComponents[idx].hide();
        }
    };
    Object.defineProperty(CrosshairTooltipsContainerComponent.prototype, "active", {
        get: function () {
            return this.tooltipKeys.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    CrosshairTooltipsContainerComponent.prototype.createCrosshairTooltips = function (options) {
        var newMap = this.mapTooltips(options);
        var map = this.tooltipsMap;
        for (var key in map) {
            if (!newMap[key]) {
                this.removeTooltip(key);
                delete map[key];
            }
        }
        for (var key in newMap) {
            if (!map[key]) {
                map[key] = newMap[key];
                this.tooltipKeys.push(key);
            }
        }
    };
    CrosshairTooltipsContainerComponent.prototype.removeTooltip = function (key) {
        var keys = this.tooltipKeys;
        for (var idx = 0; idx < keys.length; idx++) {
            if (keys[idx] === key) {
                keys.splice(idx, 1);
                break;
            }
        }
    };
    CrosshairTooltipsContainerComponent.prototype.mapTooltips = function (options) {
        var map = {};
        for (var idx = 0; idx < AXES.length; idx++) {
            var tooltips = this.axesCrosshairTooltipOptions(options, AXES[idx]);
            for (var tooltipIdx = 0; tooltipIdx < tooltips.length; tooltipIdx++) {
                var tooltip = tooltips[tooltipIdx];
                map[tooltip.name + tooltip.index] = tooltip;
            }
        }
        return map;
    };
    CrosshairTooltipsContainerComponent.prototype.axesCrosshairTooltipOptions = function (options, name) {
        var result = [];
        if (options[name]) {
            var axes = [].concat(options[name]);
            for (var idx = 0; idx < axes.length; idx++) {
                var tooltip = (axes[idx].crosshair || {}).tooltip;
                if (tooltip && tooltip.visible) {
                    result.push({
                        index: idx,
                        name: name
                    });
                }
            }
        }
        return result;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CrosshairTooltipsContainerComponent.prototype, "popupSettings", void 0);
    tslib_1.__decorate([
        ViewChildren(CrosshairTooltipComponent),
        tslib_1.__metadata("design:type", QueryList)
    ], CrosshairTooltipsContainerComponent.prototype, "crossahirTooltipComponents", void 0);
    CrosshairTooltipsContainerComponent = tslib_1.__decorate([
        Component({
            selector: 'kendo-chart-crosshair-tooltips-container',
            template: "\n        <kendo-chart-crosshair-tooltip *ngFor=\"let key of tooltipKeys\" [key]=\"key\" [popupSettings]=\"popupSettings\">\n        </kendo-chart-crosshair-tooltip>\n    "
        })
    ], CrosshairTooltipsContainerComponent);
    return CrosshairTooltipsContainerComponent;
}());
export { CrosshairTooltipsContainerComponent };
