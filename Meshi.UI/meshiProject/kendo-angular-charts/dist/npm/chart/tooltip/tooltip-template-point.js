/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The point that is passed to the tooltip template.
 */
var TooltipTemplatePoint = /** @class */ (function () {
    /**
     * @hidden
     */
    function TooltipTemplatePoint(point, format, template) {
        this.value = point.value;
        this.category = point.category;
        this.categoryIndex = point.categoryIx;
        this.series = point.series;
        this.dataItem = point.dataItem;
        this.percentage = point.percentage;
        this.runningTotal = point.runningTotal;
        this.total = point.total;
        this.low = point.low;
        this.high = point.high;
        this.xLow = point.xLow;
        this.xHigh = point.xHigh;
        this.yLow = point.yLow;
        this.yHigh = point.yHigh;
        this.template = template;
        this.point = point;
        this.format = format;
    }
    Object.defineProperty(TooltipTemplatePoint.prototype, "formattedValue", {
        /**
         * @hidden
         */
        get: function () {
            return this.format ? this.point.formatValue(this.format) : String(this.value);
        },
        enumerable: true,
        configurable: true
    });
    return TooltipTemplatePoint;
}());
exports.TooltipTemplatePoint = TooltipTemplatePoint;
