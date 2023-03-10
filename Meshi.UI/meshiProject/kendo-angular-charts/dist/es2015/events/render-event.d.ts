/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChartComponent } from '../chart.component';
import { BaseEvent } from './base-event';
/**
 * Arguments for the `render` event.
 */
export declare class RenderEvent extends BaseEvent {
    /**
     * @hidden
     */
    constructor(_e: any, sender: ChartComponent);
}
