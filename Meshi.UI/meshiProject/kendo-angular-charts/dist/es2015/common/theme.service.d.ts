/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { NgZone } from '@angular/core';
import { ConfigurationService } from './configuration.service';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare class ThemeService extends ConfigurationService {
    private loaded;
    private element;
    constructor(ngZone: NgZone);
    loadTheme(): void;
    private readTheme;
    private readDefaultTheme;
    private createElement;
    private destroyElement;
    private setStyle;
    private setColors;
    private setInactiveOpacity;
    private setFonts;
    private setSeriesColors;
    private mapColor;
    private queryColor;
    private queryStyle;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ThemeService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ThemeService>;
}

//# sourceMappingURL=theme.service.d.ts.map