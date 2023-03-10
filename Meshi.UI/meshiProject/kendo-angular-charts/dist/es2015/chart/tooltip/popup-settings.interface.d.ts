/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ViewContainerRef } from '@angular/core';
/**
 * The settings for the tooltip popup.
 */
export interface PopupSettings {
    /**
     * Defines the container to which the popup will be appended.
     */
    appendTo?: ViewContainerRef;
    /**
     * Specifies the class or classes for the popup.
     */
    popupClass?: string | Array<string> | Object;
}
