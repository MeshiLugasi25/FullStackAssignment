/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { ChartComponent } from '../chart.component';
import { drawing, geometry } from '@progress/kendo-drawing';
/**
 * The context for the axis label visual function.
 */
export interface AxisLabelVisualArgs {
    /**
     * A function that can be used to get the default visual.
     */
    createVisual: () => drawing.Element;
    /**
     * The default culture (if set) of the label.
     */
    culture: string;
    /**
     * If a field is specified, represents the data item.
     */
    dataItem?: any;
    /**
     * The default format of the label.
     */
    format: string;
    /**
     * The label options.
     */
    options: any;
    /**
     * The rectangle that defines the normal position of the visual.
     */
    rect: geometry.Rect;
    /**
     * The instance of the Chart component.
     */
    sender: ChartComponent;
    /**
     * The label text.
     */
    text: string;
    /**
     * The label value.
     */
    value: any;
}
