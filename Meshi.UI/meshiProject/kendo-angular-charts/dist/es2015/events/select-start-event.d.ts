/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChartComponent } from '../chart.component';
import { PreventableEvent } from './preventable-event';
import { EventAxisOptions } from '../api-types/event-axis-options.interface';
/**
 * Arguments for the `selectStart` event.
 */
export declare class SelectStartEvent extends PreventableEvent {
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
