/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * The format that is used to display the labels when they are dates.
 *
 * The Chart selects the appropriate format for the current `baseUnit`.
 * Setting the `format` option of the labels overrides the date formats.
 */
export interface DateFormats {
    /**
     * The provided format when the axis `baseUnit` is set to `"milliseconds"`.
     */
    milliseconds?: string;
    /**
     * The provided format when the axis `baseUnit` is set to `"seconds"`.
     */
    seconds?: string;
    /**
     * The provided format when the axis `baseUnit` is set to `"minutes"`.
     */
    minutes?: string;
    /**
     * The provided format when the axis `baseUnit` is set to `"hours"`.
     */
    hours?: string;
    /**
     * The provided format when the axis `baseUnit` is set to `"days"`.
     */
    days?: string;
    /**
     * The provided format when the axis `baseUnit` is set to `"weeks"`.
     */
    weeks?: string;
    /**
     * The provided format when the axis `baseUnit` is set to `"months"`.
     */
    months?: string;
    /**
     * The provided format when the axis `baseUnit` is set to `"years"`.
     */
    years?: string;
}
