/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChartComponent } from '../chart.component';
import { PreventableEvent } from './preventable-event';
import { AxisRange } from '../api-types/axis-range.interface';
/**
 * Arguments for the `zoom` event.
 */
export declare class ZoomEvent extends PreventableEvent {
    /**
     * A dictionary which contains the range (min and max values) of named axes.
     * The axis name is used as a key.
     *
     * > The dictionary includes only the affected axis ranges.
     * If an axis is locked or its range is not modified, the axis will not be listed.
     */
    axisRanges: {
        [name: string]: AxisRange;
    };
    /**
     * A number that indicates the zoom amount and direction.
     * A negative value indicates a zoom-in action.
     * A positive value indicates a zoom-out action.
     */
    delta: number;
    /**
     * The original user event that triggered the drag action.
     */
    originalEvent: any;
    /**
     * @hidden
     */
    constructor(e: any, sender: ChartComponent);
}
