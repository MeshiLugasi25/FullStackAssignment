/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Group } from '@progress/kendo-drawing';
import { ChartAxis } from './chart-axis.interface';
/**
 * An interface for the Chart panes.
 */
export interface ChartPane {
    /**
     * The group which holds the Drawing elements of the Chart.
     */
    chartsVisual: Group;
    /**
     * The Drawing group that is used to draw the pane.
     */
    visual: Group;
    /**
     * Returns the axis from the pane with the specified name.
     *
     * @param {string} name - The axis name.
     * @returns {ChartAxis} - The axis with a corresponding name.
     */
    findAxisByName(name: string): ChartAxis;
}
