/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * The `navigator.hint` options.
 */
export interface NavigatorHint {
    /**
     * The function that returns the content of the hint.
     *
     * The available fields in the event argument are:
     *
     * - `from`&mdash;The lower boundary of the selected range.
     * - `to`&mdash;The upper boundary of the selected range.
     */
    content?: (e: any) => string;
    /**
     * The format of the hint.
     */
    format?: string;
    /**
     * The visibility of the hint.
     */
    visible?: boolean;
}
