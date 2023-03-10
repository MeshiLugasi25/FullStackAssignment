/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { AxisLabelsPosition } from '../../common/property-types';
import { CategoryAxisLabels } from './labels.interface';
/**
 * The configuration options of the category axis date range labels.
 */
export interface CategoryAxisRangeLabels extends CategoryAxisLabels {
    /**
     * @hidden
     */
    position?: AxisLabelsPosition;
    /**
     * @hidden
     */
    skip?: number;
    /**
     * @hidden
     */
    step?: number;
    /**
     * If set to `true`, the Chart displays the category axis date range labels.
     * By default, the category axis date range labels are not visible.
     */
    visible?: boolean;
}
