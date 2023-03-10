/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { CategoryAxis, Pane, Series } from '../../common/property-types';
import { NavigatorHint } from './navigator/hint.interface';
import { NavigatorSelect } from './navigator/select.interface';
/**
 * The configuration options of the navigator.
 */
export interface Navigator {
    /**
     * The visibility of the navigator.
     */
    visible?: boolean;
    /**
     * The configuration options of the category axis.
     */
    categoryAxis?: CategoryAxis;
    /**
     * The default options of the navigator hint.
     */
    hint?: NavigatorHint;
    /**
     * The navigator pane configuration.
     */
    pane?: Pane;
    /**
     * Specifies the initially selected range.
     * If no range is specified, the full range of values is shown.
     */
    select?: NavigatorSelect;
    /**
     * An array of series definitions.
     * Accepts the same options as the root series collection.
     * Omitting the array and specifying a single series is also acceptable.
     */
    series?: Series | Series[];
}
