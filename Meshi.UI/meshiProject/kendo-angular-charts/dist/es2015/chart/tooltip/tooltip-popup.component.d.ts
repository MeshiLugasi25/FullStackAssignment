/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { TemplateRef, NgZone, EventEmitter } from '@angular/core';
import { SeriesTooltipTemplateDirective } from './series-tooltip-template.directive';
import { SharedTooltipTemplateDirective } from './shared-tooltip-template.directive';
import { TooltipTemplatePoint } from './tooltip-template-point';
import { BaseTooltip } from './base-tooltip';
import { TooltipTemplateService } from '../../common/tooltip-template.service';
import { PopupService } from '@progress/kendo-angular-popup';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { PopupSettings } from './popup-settings.interface';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare class TooltipPopupComponent extends BaseTooltip {
    protected popupService: PopupService;
    protected templateService: TooltipTemplateService;
    protected localizationService: LocalizationService;
    protected ngZone: NgZone;
    seriesTooltipTemplateRef: TemplateRef<any>;
    seriesSharedTooltipTemplateRef: TemplateRef<any>;
    seriesTooltipContext: any;
    seriesSharedTooltipContext: any;
    shared: boolean;
    defaultSeriesTooltipTemplate: SeriesTooltipTemplateDirective;
    defaultSharedTooltipTemplate: SharedTooltipTemplateDirective;
    templateRef: TemplateRef<any>;
    animate: boolean;
    classNames: any;
    popupSettings: PopupSettings;
    wrapperClass: string;
    leave: EventEmitter<any>;
    popupClasses: any;
    private mouseleaveSubscription;
    constructor(popupService: PopupService, templateService: TooltipTemplateService, localizationService: LocalizationService, ngZone: NgZone);
    show(e: any): void;
    containsElement(element: any): boolean;
    protected sharedTemplateContext(e: any): any;
    protected pointTemplateRef(point: any): TemplateRef<any>;
    protected wrapPoints(points: Array<any>, format?: string): Array<TooltipTemplatePoint>;
    protected onInit(): void;
    hide(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TooltipPopupComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TooltipPopupComponent, "kendo-chart-tooltip-popup", never, { "animate": "animate"; "wrapperClass": "wrapperClass"; "classNames": "classNames"; "popupSettings": "popupSettings"; }, { "leave": "leave"; }, never, never>;
}

//# sourceMappingURL=tooltip-popup.component.d.ts.map