/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { OnDestroy } from '@angular/core';
import { PopupService } from '@progress/kendo-angular-popup';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { PopupSettings } from './popup-settings.interface';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class BaseTooltip implements OnDestroy {
    protected popupService: PopupService;
    protected localizationService: LocalizationService;
    animate: boolean;
    style: any;
    templateRef: any;
    popupRef: any;
    popupSettings: PopupSettings;
    constructor(popupService: PopupService, localizationService: LocalizationService);
    readonly active: boolean;
    show(e: any): void;
    hide(): void;
    protected onInit(): void;
    ngOnDestroy(): void;
    protected position(offset: any): any;
    private scrollOffset;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseTooltip, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BaseTooltip, never, never, {}, {}, never>;
}

//# sourceMappingURL=base-tooltip.d.ts.map