/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Border } from './border.interface';
import { BulletTargetLine } from './bullet-target-line.interface';
/**
 * The appearance settings for the target of the Bullet series.
 */
export interface BulletTarget {
    /**
     * The width of the border in pixels.
     * By default, the border width is set to `zero`, which means that the border is not visible.
     */
    border?: Border;
    /**
     * The target color.
     */
    color?: string;
    /**
     * The appearance settings for the target line of the Bullet series.
     */
    line?: BulletTargetLine;
}
