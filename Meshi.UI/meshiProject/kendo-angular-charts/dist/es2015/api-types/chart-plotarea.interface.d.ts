/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { MultiPath, Group } from '@progress/kendo-drawing';
/**
 * An interface for the plot area of the Chart.
 */
export interface ChartPlotArea {
    /**
     * The Drawing `MultiPath` that is used to draw the background.
     */
    backgroundVisual: MultiPath;
    /**
     * The Drawing `Group` that is used to draw the plot area.
     */
    visual: Group;
}
