/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * Configures the Stacked series.
 */
export interface SeriesStack {
    /**
     * The optional stack group name.
     * The `group` option is supported for the Bar and Column series.
     */
    group?: string;
    /**
     * The type of stack to plot.
     *
     * The following types are supported:
     *
     * * `"normal"`&mdash;The value of the stack is the sum of all points in the category (or group).
     * * `"100%"`&mdash;The value of the stack is always 100% (1.00). Points within the category (or group) are represented in percentage.
     */
    type?: 'normal' | '100%';
}
