/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dom_events_1 = require("./dom-events");
var MISSING_HAMMER_MESSAGE = 'Hammerjs is not loaded.' +
    'Solution: http://www.telerik.com/kendo-angular-ui/components/charts/troubleshooting/#toc-hammerjs-is-not-loaded';
/**
 * @hidden
 */
var DomEventsBuilder = /** @class */ (function () {
    function DomEventsBuilder() {
    }
    DomEventsBuilder.create = function (element, events) {
        if (typeof window !== 'undefined') {
            var HAMMER = window.Hammer;
            if (!HAMMER) {
                if (core_1.isDevMode()) {
                    throw new Error(MISSING_HAMMER_MESSAGE);
                }
                return;
            }
            var hammerInstance = new HAMMER(element, {
                recognizers: [
                    [HAMMER.Tap],
                    [HAMMER.Pan],
                    [HAMMER.Pinch],
                    [HAMMER.Press, { time: 0 }]
                ]
            });
            return new dom_events_1.DomEvents(hammerInstance, events);
        }
    };
    return DomEventsBuilder;
}());
exports.DomEventsBuilder = DomEventsBuilder;
