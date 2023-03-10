/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CollectionService } from '../common/collection.service';
import { ConfigurationService } from '../common/configuration.service';
import { ValueAxisItemComponentGenerated } from './value-axis-item.component.generated';
/**
 * The configuration component for a value axis.
 */
let ValueAxisItemComponent = class ValueAxisItemComponent extends ValueAxisItemComponentGenerated {
    // Place custom properties here
    constructor(configurationService, collectionService) {
        super(configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
};
ValueAxisItemComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [ConfigurationService],
        selector: 'kendo-chart-value-axis-item',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService,
        CollectionService])
], ValueAxisItemComponent);
export { ValueAxisItemComponent };
