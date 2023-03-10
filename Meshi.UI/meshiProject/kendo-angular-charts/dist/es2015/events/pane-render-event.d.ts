/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChartComponent } from '../chart.component';
import { BaseEvent } from './base-event';
import { ChartPane } from '../api-types/chart-pane.interface';
/**
 * Arguments for the `paneRender` event.
 */
export declare class PaneRenderEvent extends BaseEvent {
    /**
     * The chart pane.
     */
    pane: ChartPane;
    /**
     * The pane index.
     */
    index: number;
    /**
     * The pane name.
     */
    name: string;
    /**
     * @hidden
     */
    constructor(args: any, sender: ChartComponent);
}
