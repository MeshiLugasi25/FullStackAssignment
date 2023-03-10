/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { CollectionService } from '../common/collection.service';
import { ConfigurationService } from '../common/configuration.service';
import { SeriesItemComponentGenerated } from './series-item.component.generated';
import { SeriesTooltipComponent } from './series-item/tooltip.component';
const toggle = (flag) => flag === undefined ? false : !flag;
const ɵ0 = toggle;
/**
 * The configuration component for a series item.
 */
let SeriesItemComponent = class SeriesItemComponent extends SeriesItemComponentGenerated {
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    /**
     * Toggles the series visibility and updates the parent Chart
     * without animated transitions.
     */
    toggleVisibility() {
        this.options.visible = toggle(this.options.visible);
        this.notify();
    }
    /**
     * Toggles the visibility of a point with the given index.
     * Applicable for the Pie, Donut, and Funnel series.
     *
     * @param pointIndex - The zero-based index of the point to toggle.
     */
    togglePointVisibility(pointIndex) {
        const pv = this.options.pointVisibility = this.options.pointVisibility || {};
        pv[pointIndex] = toggle(pv[pointIndex]);
        this.notify();
    }
    get seriesTooltipTemplateRef() {
        if (this.seriesTooltip) {
            return this.seriesTooltip.seriesTooltipTemplateRef;
        }
    }
};
tslib_1.__decorate([
    ContentChild(SeriesTooltipComponent, { static: false }),
    tslib_1.__metadata("design:type", SeriesTooltipComponent)
], SeriesItemComponent.prototype, "seriesTooltip", void 0);
SeriesItemComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [ConfigurationService],
        selector: 'kendo-chart-series-item',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService,
        CollectionService])
], SeriesItemComponent);
export { SeriesItemComponent };
export { ɵ0 };
