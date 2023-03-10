/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Component, ContentChild } from '@angular/core';
import { ConfigurationService } from '../common/configuration.service';
import { TooltipComponentGenerated } from './tooltip.component.generated';
import { SeriesTooltipTemplateDirective } from './tooltip/series-tooltip-template.directive';
import { SharedTooltipTemplateDirective } from './tooltip/shared-tooltip-template.directive';
import { TooltipTemplateService } from '../common/tooltip-template.service';
/**
 * The configuration options of the Chart series tooltip
 * ([see example]({% slug tooltips_chart_charts %})).
 */
let TooltipComponent = class TooltipComponent extends TooltipComponentGenerated {
    constructor(configurationService, templateService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.templateService = templateService;
        this.markAsVisible();
    }
    ngAfterContentChecked() {
        this.templateService.setTemplate(this.seriesTooltipTemplate ? this.seriesTooltipTemplate.templateRef : null);
        this.templateService.setSharedTemplate(this.sharedTooltipTemplate ? this.sharedTooltipTemplate.templateRef : null);
    }
};
tslib_1.__decorate([
    ContentChild(SeriesTooltipTemplateDirective, { static: false }),
    tslib_1.__metadata("design:type", SeriesTooltipTemplateDirective)
], TooltipComponent.prototype, "seriesTooltipTemplate", void 0);
tslib_1.__decorate([
    ContentChild(SharedTooltipTemplateDirective, { static: false }),
    tslib_1.__metadata("design:type", SharedTooltipTemplateDirective)
], TooltipComponent.prototype, "sharedTooltipTemplate", void 0);
TooltipComponent = tslib_1.__decorate([
    Component({
        selector: 'kendo-chart-tooltip',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService,
        TooltipTemplateService])
], TooltipComponent);
export { TooltipComponent };
