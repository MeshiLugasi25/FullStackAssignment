/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { LegendEvent } from './legend-event';
/**
 * Arguments for the `legendItemClick` event.
 */
export class LegendItemClickEvent extends LegendEvent {
    /**
     * If called, the series visibility is not toggled as a result of clicking the legend item.
     */
    preventDefault() {
        super.preventDefault();
    }
}
