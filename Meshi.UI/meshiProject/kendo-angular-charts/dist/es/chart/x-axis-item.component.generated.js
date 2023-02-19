/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
import { CollectionItemComponent } from '../common/collection-item.component';
import { WeekStartDay } from '../common/property-types';
/**
 * @hidden
 */
var XAxisItemComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(XAxisItemComponentGenerated, _super);
    function XAxisItemComponentGenerated(configurationService, collectionService, intl, localeId) {
        var _this = _super.call(this, configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        _this.notifyChanges({ weekStartDay: intl.firstDay(localeId) });
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisItemComponentGenerated.prototype, "axisCrossingValue", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], XAxisItemComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], XAxisItemComponentGenerated.prototype, "baseUnit", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], XAxisItemComponentGenerated.prototype, "color", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisItemComponentGenerated.prototype, "line", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisItemComponentGenerated.prototype, "majorGridLines", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisItemComponentGenerated.prototype, "majorTicks", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], XAxisItemComponentGenerated.prototype, "majorUnit", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisItemComponentGenerated.prototype, "max", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisItemComponentGenerated.prototype, "min", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisItemComponentGenerated.prototype, "minorGridLines", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisItemComponentGenerated.prototype, "minorTicks", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], XAxisItemComponentGenerated.prototype, "minorUnit", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], XAxisItemComponentGenerated.prototype, "name", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], XAxisItemComponentGenerated.prototype, "narrowRange", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], XAxisItemComponentGenerated.prototype, "pane", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], XAxisItemComponentGenerated.prototype, "plotBands", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], XAxisItemComponentGenerated.prototype, "reverse", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], XAxisItemComponentGenerated.prototype, "startAngle", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], XAxisItemComponentGenerated.prototype, "type", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], XAxisItemComponentGenerated.prototype, "visible", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], XAxisItemComponentGenerated.prototype, "weekStartDay", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisItemComponentGenerated.prototype, "crosshair", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisItemComponentGenerated.prototype, "labels", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisItemComponentGenerated.prototype, "notes", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisItemComponentGenerated.prototype, "title", void 0);
    return XAxisItemComponentGenerated;
}(CollectionItemComponent));
export { XAxisItemComponentGenerated };
