/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { isDevMode } from '@angular/core';
import { DomEvents } from './dom-events';
const MISSING_HAMMER_MESSAGE = 'Hammerjs is not loaded.' +
    'Solution: http://www.telerik.com/kendo-angular-ui/components/charts/troubleshooting/#toc-hammerjs-is-not-loaded';
/**
 * @hidden
 */
export class DomEventsBuilder {
    static create(element, events) {
        if (typeof window !== 'undefined') {
            const HAMMER = window.Hammer;
            if (!HAMMER) {
                if (isDevMode()) {
                    throw new Error(MISSING_HAMMER_MESSAGE);
                }
                return;
            }
            const hammerInstance = new HAMMER(element, {
                recognizers: [
                    [HAMMER.Tap],
                    [HAMMER.Pan],
                    [HAMMER.Pinch],
                    [HAMMER.Press, { time: 0 }]
                ]
            });
            return new DomEvents(hammerInstance, events);
        }
    }
}
