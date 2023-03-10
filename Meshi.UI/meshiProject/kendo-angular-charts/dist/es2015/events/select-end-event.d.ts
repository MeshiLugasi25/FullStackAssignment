/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChartComponent } from '../chart.component';
import { BaseEvent } from './base-event';
import { EventAxisOptions } from '../api-types/event-axis-options.interface';
/**
 * Arguments for the `selectEnd` event.
 */
export declare class SelectEndEvent extends BaseEvent {
    /**
     * The target axis options.
     */
    axis: EventAxisOptions;
    /**
     * The lower boundary of the selected range.
     */
    from: any;
    /**
     * The upper boundary of the selected range.
     */
    to: any;
    /**
     * @hidden
     */
    constructor(e: any, sender: ChartComponent);
}
