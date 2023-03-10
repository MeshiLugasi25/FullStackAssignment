/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ElementRef } from '@angular/core';
import { isDocumentAvailable } from '@progress/kendo-angular-common';
/**
 * @hidden
 */
export function bodyFactory() {
    if (isDocumentAvailable()) {
        return new ElementRef(document.body);
    }
}
