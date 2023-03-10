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
var SHARED_TOOLTIP_CLASS = 'k-chart-shared-tooltip';
var TOOLTIP_CLASS = "k-chart-tooltip";
var ɵ0 = bodyFactory;
// Codelyzer 2.0.0-beta2 doesn't handle inherited members
/* tslint:disable:no-access-missing-member */
/**
 * @hidden
 */
var TooltipPopupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TooltipPopupComponent, _super);
    function TooltipPopupComponent(popupService, templateService, localizationService, ngZone) {
        var _this = _super.call(this, popupService, localizationService) || this;
        _this.popupService = popupService;
        _this.templateService = templateService;
        _this.localizationService = localizationService;
        _this.ngZone = ngZone;
        _this.seriesTooltipContext = {};
        _this.seriesSharedTooltipContext = {};
        _this.animate = true;
        _this.wrapperClass = 'k-chart-tooltip-wrapper';
        _this.leave = new EventEmitter();
        _this.popupClasses = {};
        return _this;
    }
    TooltipPopupComponent.prototype.show = function (e) {
        var _a;
        this.shared = e.shared;
        this.popupClasses = Object.assign((_a = {},
            _a[SHARED_TOOLTIP_CLASS] = e.shared,
            _a[TOOLTIP_CLASS] = true,
            _a[e.className] = !!e.className,
            _a), this.classNames);
        if (!e.shared) {
            this.seriesTooltipContext = new TooltipTemplatePoint(e.point, e.format);
            this.seriesTooltipTemplateRef = this.pointTemplateRef(e.point);
        }
        else {
            this.seriesSharedTooltipTemplateRef = this.templateService.getSharedTemplate()
                || this.defaultSharedTooltipTemplate.templateRef;
            this.seriesSharedTooltipContext = this.sharedTemplateContext(e);
        }
        _super.prototype.show.call(this, e);
    };
    TooltipPopupComponent.prototype.containsElement = function (element) {
        if (this.popupRef) {
            return hasParent(element, this.popupRef.popupElement);
        }
    };
    TooltipPopupComponent.prototype.sharedTemplateContext = function (e) {
        var points = e.points;
        var nameColumn = points.filter(function (point) { return typeof point.series.name !== 'undefined'; }).length > 0;
        var colorMarker = e.series.length > 1;
        var colspan = 1;
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
    };
    TooltipPopupComponent.prototype.pointTemplateRef = function (point) {
        return this.templateService.getTemplate(point.series.index) || this.defaultSeriesTooltipTemplate.templateRef;
    };
    TooltipPopupComponent.prototype.wrapPoints = function (points, format) {
        var result = [];
        for (var idx = 0; idx < points.length; idx++) {
            var point = points[idx];
            var template = this.pointTemplateRef(point);
            var pointFormat = ((point.options || {}).tooltip || {}).format || format;
            result.push(new TooltipTemplatePoint(point, pointFormat, template));
        }
        return result;
    };
    TooltipPopupComponent.prototype.onInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.mouseleaveSubscription = _this.popupRef.popupElement.addEventListener('mouseleave', function (args) {
                _this.leave.emit(args);
            });
        });
        this.popupRef.popupElement.className += " " + this.wrapperClass;
    };
    TooltipPopupComponent.prototype.hide = function () {
        if (this.mouseleaveSubscription) {
            this.mouseleaveSubscription();
            this.mouseleaveSubscription = null;
        }
        _super.prototype.hide.call(this);
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
            template: "\n    <ng-template #content>\n        <div [ngClass]=\"popupClasses\" [ngStyle]=\"style\">\n          <ng-template [ngTemplateOutlet]=\"seriesTooltipTemplateRef\" *ngIf=\"!shared\"\n                    [ngTemplateOutletContext]=\"seriesTooltipContext\">\n          </ng-template>\n          <ng-template [ngTemplateOutlet]=\"seriesSharedTooltipTemplateRef\" *ngIf=\"shared\"\n                    [ngTemplateOutletContext]=\"seriesSharedTooltipContext\">\n          </ng-template>\n        </div>\n    </ng-template>\n\n    <ng-template kendoChartSeriesTooltipTemplate let-formattedValue=\"formattedValue\">\n        <span [innerHTML]=\"formattedValue\"></span>\n    </ng-template>\n    <ng-template kendoChartSharedTooltipTemplate let-points=\"points\" let-categoryText=\"categoryText\" let-colspan=\"colspan\" let-colorMarker=\"colorMarker\" let-nameColumn=\"nameColumn\" >\n        <table>\n            <tr><th [attr.colspan]='colspan'> {{ categoryText }} </th></tr>\n            <tr *ngFor=\"let point of points\">\n                <td *ngIf=\"colorMarker\"><span class='k-chart-shared-tooltip-marker' [style.background-color]='point.series.color'></span></td>\n                <td *ngIf=\"nameColumn\">\n                    <ng-container *ngIf=\"point.series.name !== undefined\">{{ point.series.name }}</ng-container>\n                    <ng-container *ngIf=\"point.series.name === undefined\">&nbsp;</ng-container>\n                </td>\n                <td>\n                  <ng-template [ngTemplateOutlet]=\"point.template\"\n                            [ngTemplateOutletContext]=\"point\">\n                  </ng-template>\n                </td>\n            </tr>\n        </table>\n    </ng-template>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [PopupService,
            TooltipTemplateService,
            LocalizationService,
            NgZone])
    ], TooltipPopupComponent);
    return TooltipPopupComponent;
}(BaseTooltip));
export { TooltipPopupComponent };
export { ɵ0 };
