/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { TemplateRef } from '@angular/core';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare class TooltipTemplateService {
    private seriesTemplates;
    private template;
    private sharedTemplate;
    setTemplate(template: TemplateRef<any>): void;
    getTemplate(seriesIndex: number): TemplateRef<any>;
    setSeriesTemplates(seriesTemplates: Array<TemplateRef<any>>): void;
    setSharedTemplate(sharedTemplate: TemplateRef<any>): void;
    getSharedTemplate(): TemplateRef<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TooltipTemplateService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<TooltipTemplateService>;
}

//# sourceMappingURL=tooltip-template.service.d.ts.map