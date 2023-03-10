/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
/**
 * @hidden
 */
var TooltipTemplateService = /** @class */ (function () {
    function TooltipTemplateService() {
    }
    TooltipTemplateService.prototype.setTemplate = function (template) {
        this.template = template;
    };
    TooltipTemplateService.prototype.getTemplate = function (seriesIndex) {
        if (this.seriesTemplates && this.seriesTemplates[seriesIndex]) {
            return this.seriesTemplates[seriesIndex];
        }
        return this.template;
    };
    TooltipTemplateService.prototype.setSeriesTemplates = function (seriesTemplates) {
        this.seriesTemplates = seriesTemplates;
    };
    TooltipTemplateService.prototype.setSharedTemplate = function (sharedTemplate) {
        this.sharedTemplate = sharedTemplate;
    };
    TooltipTemplateService.prototype.getSharedTemplate = function () {
        return this.sharedTemplate;
    };
    TooltipTemplateService = tslib_1.__decorate([
        Injectable()
    ], TooltipTemplateService);
    return TooltipTemplateService;
}());
export { TooltipTemplateService };
