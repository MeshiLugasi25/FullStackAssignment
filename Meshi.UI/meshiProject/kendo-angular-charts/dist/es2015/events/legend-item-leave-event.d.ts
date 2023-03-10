/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { LegendEvent } from './legend-event';
/**
 * Arguments for the `legendItemLeave` event.
 */
export declare class LegendItemLeaveEvent extends LegendEvent {
    /**
     * @hidden
     */
    preventDefault(): void;
    /**
     * @hidden
     */
    isDefaultPrevented(): boolean;
}
