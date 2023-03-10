/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
/**
 * @hidden
 */
let TooltipTemplateService = class TooltipTemplateService {
    setTemplate(template) {
        this.template = template;
    }
    getTemplate(seriesIndex) {
        if (this.seriesTemplates && this.seriesTemplates[seriesIndex]) {
            return this.seriesTemplates[seriesIndex];
        }
        return this.template;
    }
    setSeriesTemplates(seriesTemplates) {
        this.seriesTemplates = seriesTemplates;
    }
    setSharedTemplate(sharedTemplate) {
        this.sharedTemplate = sharedTemplate;
    }
    getSharedTemplate() {
        return this.sharedTemplate;
    }
};
TooltipTemplateService = tslib_1.__decorate([
    Injectable()
], TooltipTemplateService);
export { TooltipTemplateService };
