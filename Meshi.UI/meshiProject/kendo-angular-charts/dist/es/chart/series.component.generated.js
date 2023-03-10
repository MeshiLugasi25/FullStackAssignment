/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ContentChildren, QueryList } from '@angular/core';
import { CollectionComponent } from '../common/collection.component';
import { SeriesItemComponent } from './series-item.component';
/**
 * @hidden
 */
var SeriesComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesComponentGenerated, _super);
    function SeriesComponentGenerated(configurationService, collectionService) {
        var _this = _super.call(this, 'series', configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    tslib_1.__decorate([
        ContentChildren(SeriesItemComponent),
        tslib_1.__metadata("design:type", QueryList)
    ], SeriesComponentGenerated.prototype, "children", void 0);
    return SeriesComponentGenerated;
}(CollectionComponent));
export { SeriesComponentGenerated };
