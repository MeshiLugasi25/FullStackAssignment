/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("./common/configuration.service");
var tooltip_template_service_1 = require("./common/tooltip-template.service");
var instance_event_service_1 = require("./events/instance-event.service");
var chart_component_1 = require("./chart.component");
var theme_service_1 = require("./common/theme.service");
var kendo_angular_intl_1 = require("@progress/kendo-angular-intl");
var kendo_charts_1 = require("@progress/kendo-charts");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
var kendo_licensing_1 = require("@progress/kendo-licensing");
var package_metadata_1 = require("./package-metadata");
/* tslint:disable:no-access-missing-member */
/**
 * The root Chart component.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-sparkline [data]="data" type="column">
 *     </kendo-sparkline>
 *   `
 * })
 * class AppComponent {
 *   public data: any[] = [
 *     936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007,
 *     1004, 988, 990, 988, 987, 995, 946, 954, 991, 984,
 *     974, 956, 986, 936, 955, 1021, 1013, 1005, 958, 953,
 *     952, 940, 937, 980, 966, 965, 928, 916, 910, 980
 *   ];
 * }
 *
 * ```
 */
var SparklineComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SparklineComponent, _super);
    function SparklineComponent(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer) {
        var _this = _super.call(this, configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer) || this;
        _this.configurationService = configurationService;
        _this.themeService = themeService;
        _this.element = element;
        _this.intl = intl;
        _this.localizationService = localizationService;
        _this.ngZone = ngZone;
        _this.instanceEventService = instanceEventService;
        _this.changeDetector = changeDetector;
        _this.renderer = renderer;
        /**
         * @hidden
         */
        _this.tooltipWrapperClass = 'k-sparkline-tooltip-wrapper';
        /**
         * @hidden
         */
        _this.tooltipContentClasses = {
            'k-sparkline-tooltip': true
        };
        _this.hostClasses = ['k-sparkline', 'k-widget'];
        kendo_licensing_1.validatePackage(package_metadata_1.packageMetadata);
        return _this;
    }
    SparklineComponent.prototype.createInstance = function (element, observer) {
        this.instance = new kendo_charts_1.Sparkline(element, kendo_charts_1.Sparkline.normalizeOptions(this.options), this.theme, {
            intlService: this.intl,
            observer: observer,
            rtl: this.rtl,
            sender: this
        });
    };
    SparklineComponent.prototype.updateOptions = function () {
        this.instance.setOptions(kendo_charts_1.Sparkline.normalizeOptions(this.options));
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SparklineComponent.prototype, "type", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], SparklineComponent.prototype, "data", void 0);
    SparklineComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            exportAs: 'kendoSparkline',
            providers: [
                configuration_service_1.ConfigurationService,
                tooltip_template_service_1.TooltipTemplateService,
                instance_event_service_1.InstanceEventService,
                kendo_angular_l10n_1.LocalizationService,
                {
                    provide: kendo_angular_l10n_1.L10N_PREFIX,
                    useValue: 'kendo.chart'
                }
            ],
            selector: 'kendo-sparkline',
            template: "\n        <span #surface class=\"k-chart-surface\"></span>\n        <kendo-chart-crosshair-tooltips-container [popupSettings]=\"popupSettings\">\n        </kendo-chart-crosshair-tooltips-container>\n        <kendo-chart-tooltip-popup [animate]=\"false\" [wrapperClass]=\"tooltipWrapperClass\"\n            [classNames]=\"tooltipContentClasses\" (leave)=\"tooltipMouseleave($event)\" [popupSettings]=\"popupSettings\">\n        </kendo-chart-tooltip-popup>\n        <kendo-resize-sensor (resize)=\"onResize($event)\"></kendo-resize-sensor>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService,
            theme_service_1.ThemeService,
            core_1.ElementRef,
            kendo_angular_intl_1.IntlService,
            kendo_angular_l10n_1.LocalizationService,
            core_1.NgZone,
            instance_event_service_1.InstanceEventService,
            core_1.ChangeDetectorRef,
            core_1.Renderer2])
    ], SparklineComponent);
    return SparklineComponent;
}(chart_component_1.ChartComponent));
exports.SparklineComponent = SparklineComponent;
