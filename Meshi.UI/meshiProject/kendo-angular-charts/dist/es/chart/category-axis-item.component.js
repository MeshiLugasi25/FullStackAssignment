/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Inject, LOCALE_ID, Input } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
import { CollectionService } from '../common/collection.service';
import { ConfigurationService } from '../common/configuration.service';
import { CategoryAxisItemComponentGenerated } from './category-axis-item.component.generated';
/**
 * The configuration component for a category axis ([see example]({% slug axes_chart_charts %})).
 */
var CategoryAxisItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryAxisItemComponent, _super);
    function CategoryAxisItemComponent(configurationService, collectionService, intl, localeId) {
        var _this = _super.call(this, configurationService, collectionService, intl, localeId) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponent.prototype, "rangeLabels", void 0);
    CategoryAxisItemComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [ConfigurationService],
            selector: 'kendo-chart-category-axis-item',
            template: ''
        }),
        tslib_1.__param(3, Inject(LOCALE_ID)),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService,
            CollectionService,
            IntlService, String])
    ], CategoryAxisItemComponent);
    return CategoryAxisItemComponent;
}(CategoryAxisItemComponentGenerated));
export { CategoryAxisItemComponent };
