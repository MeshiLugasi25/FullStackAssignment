/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { SVGExportOptions } from '@progress/kendo-drawing';
/**
 * The options for customizing the exported SVG.
 */
export interface ChartSVGExportOptions extends SVGExportOptions {
    width?: number;
    height?: number;
}
