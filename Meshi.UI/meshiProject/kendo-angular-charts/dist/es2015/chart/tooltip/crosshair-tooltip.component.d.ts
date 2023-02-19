/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { TemplateRef } from '@angular/core';
import { BaseTooltip } from './base-tooltip';
import { PopupService } from '@progress/kendo-angular-popup';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { PopupSettings } from './popup-settings.interface';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare class CrosshairTooltipComponent extends BaseTooltip {
    templateRef: TemplateRef<any>;
    key: string;
    popupSettings: PopupSettings;
    value: any;
    animate: boolean;
    constructor(popupService: PopupService, localizationService: LocalizationService);
    show(e: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CrosshairTooltipComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CrosshairTooltipComponent, "kendo-chart-crosshair-tooltip", never, { "key": "key"; "popupSettings": "popupSettings"; }, {}, never, never>;
}

//# sourceMappingURL=crosshair-tooltip.component.d.ts.map