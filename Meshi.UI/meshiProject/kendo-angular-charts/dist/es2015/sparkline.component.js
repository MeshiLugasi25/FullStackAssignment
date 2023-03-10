/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Input, Component, NgZone, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, Renderer2 } from '@angular/core';
import { ConfigurationService } from './common/configuration.service';
import { TooltipTemplateService } from './common/tooltip-template.service';
import { InstanceEventService } from './events/instance-event.service';
import { ChartComponent } from './chart.component';
import { ThemeService } from './common/theme.service';
import { IntlService } from '@progress/kendo-angular-intl';
import { Sparkline } from '@progress/kendo-charts';
import { LocalizationService, L10N_PREFIX } from '@progress/kendo-angular-l10n';
import { validatePackage } from '@progress/kendo-licensing';
import { packageMetadata } from './package-metadata';
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
let SparklineComponent = class SparklineComponent extends ChartComponent {
    constructor(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer) {
        super(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer);
        this.configurationService = configurationService;
        this.themeService = themeService;
        this.element = element;
        this.intl = intl;
        this.localizationService = localizationService;
        this.ngZone = ngZone;
        this.instanceEventService = instanceEventService;
        this.changeDetector = changeDetector;
        this.renderer = renderer;
        /**
         * @hidden
         */
        this.tooltipWrapperClass = 'k-sparkline-tooltip-wrapper';
        /**
         * @hidden
         */
        this.tooltipContentClasses = {
            'k-sparkline-tooltip': true
        };
        this.hostClasses = ['k-sparkline', 'k-widget'];
        validatePackage(packageMetadata);
    }
    createInstance(element, observer) {
        this.instance = new Sparkline(element, Sparkline.normalizeOptions(this.options), this.theme, {
            intlService: this.intl,
            observer: observer,
            rtl: this.rtl,
            sender: this
        });
    }
    updateOptions() {
        this.instance.setOptions(Sparkline.normalizeOptions(this.options));
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SparklineComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], SparklineComponent.prototype, "data", void 0);
SparklineComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        exportAs: 'kendoSparkline',
        providers: [
            ConfigurationService,
            TooltipTemplateService,
            InstanceEventService,
            LocalizationService,
            {
                provide: L10N_PREFIX,
                useValue: 'kendo.chart'
            }
        ],
        selector: 'kendo-sparkline',
        template: `
        <span #surface class="k-chart-surface"></span>
        <kendo-chart-crosshair-tooltips-container [popupSettings]="popupSettings">
        </kendo-chart-crosshair-tooltips-container>
        <kendo-chart-tooltip-popup [animate]="false" [wrapperClass]="tooltipWrapperClass"
            [classNames]="tooltipContentClasses" (leave)="tooltipMouseleave($event)" [popupSettings]="popupSettings">
        </kendo-chart-tooltip-popup>
        <kendo-resize-sensor (resize)="onResize($event)"></kendo-resize-sensor>
    `
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService,
        ThemeService,
        ElementRef,
        IntlService,
        LocalizationService,
        NgZone,
        InstanceEventService,
        ChangeDetectorRef,
        Renderer2])
], SparklineComponent);
export { SparklineComponent };
