/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { InstanceObserver } from '@progress/kendo-charts';
/**
 * @hidden
 */
export class ChartInstanceObserver extends InstanceObserver {
    constructor(instance) {
        super(instance);
        this.handlerMap = {
            hideTooltip: 'onHideTooltip',
            legendItemClick: 'onLegendItemClick',
            render: 'onRender',
            showTooltip: 'onShowTooltip',
            init: 'onInit'
        };
    }
}
