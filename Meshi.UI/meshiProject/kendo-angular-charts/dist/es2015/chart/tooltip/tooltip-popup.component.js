/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Component, TemplateRef, ViewChild, Input, NgZone, Output, EventEmitter } from '@angular/core';
import { SeriesTooltipTemplateDirective } from './series-tooltip-template.directive';
import { SharedTooltipTemplateDirective } from './shared-tooltip-template.directive';
import { TooltipTemplatePoint } from './tooltip-template-point';
import { BaseTooltip } from './base-tooltip';
import { hasParent } from '../../common/has-parent';
import { TooltipTemplateService } from '../../common/tooltip-template.service';
import { PopupService, POPUP_CONTAINER } from '@progress/kendo-angular-popup';
import { bodyFactory } from './body-factory';
import { LocalizationService } from '@progress/kendo-angular-l10n';
const SHARED_TOOLTIP_CLASS = 'k-chart-shared-tooltip';
const TOOLTIP_CLASS = "k-chart-tooltip";
const ɵ0 = bodyFactory;
// Codelyzer 2.0.0-beta2 doesn't handle inherited members
/* tslint:disable:no-access-missing-member */
/**
 * @hidden
 */
let TooltipPopupComponent = class TooltipPopupComponent extends BaseTooltip {
    constructor(popupService, templateService, localizationService, ngZone) {
        super(popupService, localizationService);
        this.popupService = popupService;
        this.templateService = templateService;
        this.localizationService = localizationService;
        this.ngZone = ngZone;
        this.seriesTooltipContext = {};
        this.seriesSharedTooltipContext = {};
        this.animate = true;
        this.wrapperClass = 'k-chart-tooltip-wrapper';
        this.leave = new EventEmitter();
        this.popupClasses = {};
    }
    show(e) {
        this.shared = e.shared;
        this.popupClasses = Object.assign({
            [SHARED_TOOLTIP_CLASS]: e.shared,
            [TOOLTIP_CLASS]: true,
            [e.className]: !!e.className
        }, this.classNames);
        if (!e.shared) {
            this.seriesTooltipContext = new TooltipTemplatePoint(e.point, e.format);
            this.seriesTooltipTemplateRef = this.pointTemplateRef(e.point);
        }
        else {
            this.seriesSharedTooltipTemplateRef = this.templateService.getSharedTemplate()
                || this.defaultSharedTooltipTemplate.templateRef;
            this.seriesSharedTooltipContext = this.sharedTemplateContext(e);
        }
        super.show(e);
    }
    containsElement(element) {
        if (this.popupRef) {
            return hasParent(element, this.popupRef.popupElement);
        }
    }
    sharedTemplateContext(e) {
        const points = e.points;
        const nameColumn = points.filter((point) => typeof point.series.name !== 'undefined').length > 0;
        const colorMarker = e.series.length > 1;
        let colspan = 1;
        if (nameColumn) {
            colspan++;
        }
        if (colorMarker) {
            colspan++;
        }
        return {
            category: e.category,
            categoryText: e.categoryText,
            colorMarker: colorMarker,
            colspan: colspan,
            nameColumn: nameColumn,
            points: this.wrapPoints(e.points, e.format)
        };
    }
    pointTemplateRef(point) {
        return this.templateService.getTemplate(point.series.index) || this.defaultSeriesTooltipTemplate.templateRef;
    }
    wrapPoints(points, format) {
        const result = [];
        for (let idx = 0; idx < points.length; idx++) {
            const point = points[idx];
            const template = this.pointTemplateRef(point);
            const pointFormat = ((point.options || {}).tooltip || {}).format || format;
            result.push(new TooltipTemplatePoint(point, pointFormat, template));
        }
        return result;
    }
    onInit() {
        this.ngZone.runOutsideAngular(() => {
            this.mouseleaveSubscription = this.popupRef.popupElement.addEventListener('mouseleave', (args) => {
                this.leave.emit(args);
            });
        });
        this.popupRef.popupElement.className += ` ${this.wrapperClass}`;
    }
    hide() {
        if (this.mouseleaveSubscription) {
            this.mouseleaveSubscription();
            this.mouseleaveSubscription = null;
        }
        super.hide();
    }
};
tslib_1.__decorate([
    ViewChild(SeriesTooltipTemplateDirective, { static: false }),
    tslib_1.__metadata("design:type", SeriesTooltipTemplateDirective)
], TooltipPopupComponent.prototype, "defaultSeriesTooltipTemplate", void 0);
tslib_1.__decorate([
    ViewChild(SharedTooltipTemplateDirective, { static: false }),
    tslib_1.__metadata("design:type", SharedTooltipTemplateDirective)
], TooltipPopupComponent.prototype, "defaultSharedTooltipTemplate", void 0);
tslib_1.__decorate([
    ViewChild('content', { static: true }),
    tslib_1.__metadata("design:type", TemplateRef)
], TooltipPopupComponent.prototype, "templateRef", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], TooltipPopupComponent.prototype, "animate", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], TooltipPopupComponent.prototype, "classNames", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], TooltipPopupComponent.prototype, "popupSettings", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], TooltipPopupComponent.prototype, "wrapperClass", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], TooltipPopupComponent.prototype, "leave", void 0);
TooltipPopupComponent = tslib_1.__decorate([
    Component({
        providers: [PopupService, {
                provide: POPUP_CONTAINER,
                useFactory: ɵ0
            }],
        selector: 'kendo-chart-tooltip-popup',
        template: `
    <ng-template #content>
        <div [ngClass]="popupClasses" [ngStyle]="style">
          <ng-template [ngTemplateOutlet]="seriesTooltipTemplateRef" *ngIf="!shared"
                    [ngTemplateOutletContext]="seriesTooltipContext">
          </ng-template>
          <ng-template [ngTemplateOutlet]="seriesSharedTooltipTemplateRef" *ngIf="shared"
                    [ngTemplateOutletContext]="seriesSharedTooltipContext">
          </ng-template>
        </div>
    </ng-template>

    <ng-template kendoChartSeriesTooltipTemplate let-formattedValue="formattedValue">
        <span [innerHTML]="formattedValue"></span>
    </ng-template>
    <ng-template kendoChartSharedTooltipTemplate let-points="points" let-categoryText="categoryText" let-colspan="colspan" let-colorMarker="colorMarker" let-nameColumn="nameColumn" >
        <table>
            <tr><th [attr.colspan]='colspan'> {{ categoryText }} </th></tr>
            <tr *ngFor="let point of points">
                <td *ngIf="colorMarker"><span class='k-chart-shared-tooltip-marker' [style.background-color]='point.series.color'></span></td>
                <td *ngIf="nameColumn">
                    <ng-container *ngIf="point.series.name !== undefined">{{ point.series.name }}</ng-container>
                    <ng-container *ngIf="point.series.name === undefined">&nbsp;</ng-container>
                </td>
                <td>
                  <ng-template [ngTemplateOutlet]="point.template"
                            [ngTemplateOutletContext]="point">
                  </ng-template>
                </td>
            </tr>
        </table>
    </ng-template>
    `
    }),
    tslib_1.__metadata("design:paramtypes", [PopupService,
        TooltipTemplateService,
        LocalizationService,
        NgZone])
], TooltipPopupComponent);
export { TooltipPopupComponent };
export { ɵ0 };
