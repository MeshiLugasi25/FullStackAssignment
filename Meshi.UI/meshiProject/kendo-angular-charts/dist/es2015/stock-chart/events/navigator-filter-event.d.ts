/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { StockChartComponent } from '../../stock-chart.component';
import { BaseEvent } from '../../events/base-event';
/**
 * The arguments for the `navigatorFilter` event.
 */
export declare class NavigatorFilterEvent extends BaseEvent {
    /**
     * The start of the navigator range.
     */
    from: Date;
    /**
     * The end of the navigator range.
     */
    to: Date;
    /**
     * Constructs the event arguments from a raw object.
     */
    constructor(e: any, sender: StockChartComponent);
}
