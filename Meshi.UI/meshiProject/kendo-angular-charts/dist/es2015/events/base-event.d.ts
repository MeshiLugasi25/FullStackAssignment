/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChartComponent } from '../chart.component';
/**
 * @hidden
 */
export declare abstract class BaseEvent {
    /**
     * The `ChartComponent` that triggered the event.
     */
    sender: ChartComponent;
    /**
     * @hidden
     */
    constructor(sender: ChartComponent);
}
