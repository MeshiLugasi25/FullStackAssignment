/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { QueryList } from '@angular/core';
import { CrosshairTooltipComponent } from './crosshair-tooltip.component';
import { PopupSettings } from './popup-settings.interface';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare class CrosshairTooltipsContainerComponent {
    popupSettings: PopupSettings;
    crossahirTooltipComponents: QueryList<CrosshairTooltipComponent>;
    tooltipKeys: Array<any>;
    private tooltipsMap;
    show(e: any): void;
    hide(): void;
    readonly active: boolean;
    createCrosshairTooltips(options: any): void;
    protected removeTooltip(key: string): void;
    protected mapTooltips(options: any): any;
    protected axesCrosshairTooltipOptions(options: any, name: string): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CrosshairTooltipsContainerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CrosshairTooltipsContainerComponent, "kendo-chart-crosshair-tooltips-container", never, { "popupSettings": "popupSettings"; }, {}, never, never>;
}

//# sourceMappingURL=crosshair-tooltips-container.component.d.ts.map