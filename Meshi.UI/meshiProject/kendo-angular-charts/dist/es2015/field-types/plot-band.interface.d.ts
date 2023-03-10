/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { PlotBandLabel } from './plot-band-label.interface';
/**
 * A plot band.
 */
export interface PlotBand {
    /**
     * The color of the plot band.
     */
    color?: string;
    /**
     * The start position of the plot band in axis units.
     */
    from?: number | Date;
    /**
     * The opacity of the plot band.
     */
    opacity?: number;
    /**
     * The end position of the plot band in axis units.
     */
    to?: number | Date;
    /**
     * The label configuration of the plot band.
     *
     * To display a label, set the text option.
     *
     * See [Plot Bands - Labels]({% slug plotbands_chart_charts %}#toc-labels) for sample usage.
     */
    label?: PlotBandLabel;
}
