/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var collection_item_component_1 = require("../common/collection-item.component");
var property_types_1 = require("../common/property-types");
/**
 * @hidden
 */
var CategoryAxisItemComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryAxisItemComponentGenerated, _super);
    function CategoryAxisItemComponentGenerated(configurationService, collectionService, intl, localeId) {
        var _this = _super.call(this, configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        _this.notifyChanges({ weekStartDay: intl.firstDay(localeId) });
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponentGenerated.prototype, "autoBaseUnitSteps", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponentGenerated.prototype, "axisCrossingValue", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], CategoryAxisItemComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], CategoryAxisItemComponentGenerated.prototype, "baseUnit", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponentGenerated.prototype, "baseUnitStep", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], CategoryAxisItemComponentGenerated.prototype, "categories", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], CategoryAxisItemComponentGenerated.prototype, "color", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], CategoryAxisItemComponentGenerated.prototype, "justified", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponentGenerated.prototype, "line", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponentGenerated.prototype, "majorGridLines", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponentGenerated.prototype, "majorTicks", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponentGenerated.prototype, "max", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], CategoryAxisItemComponentGenerated.prototype, "maxDateGroups", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], CategoryAxisItemComponentGenerated.prototype, "maxDivisions", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponentGenerated.prototype, "min", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponentGenerated.prototype, "minorGridLines", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponentGenerated.prototype, "minorTicks", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], CategoryAxisItemComponentGenerated.prototype, "name", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], CategoryAxisItemComponentGenerated.prototype, "pane", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], CategoryAxisItemComponentGenerated.prototype, "plotBands", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], CategoryAxisItemComponentGenerated.prototype, "reverse", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], CategoryAxisItemComponentGenerated.prototype, "roundToBaseUnit", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], CategoryAxisItemComponentGenerated.prototype, "startAngle", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], CategoryAxisItemComponentGenerated.prototype, "type", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], CategoryAxisItemComponentGenerated.prototype, "visible", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], CategoryAxisItemComponentGenerated.prototype, "weekStartDay", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponentGenerated.prototype, "crosshair", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponentGenerated.prototype, "labels", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponentGenerated.prototype, "notes", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponentGenerated.prototype, "select", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisItemComponentGenerated.prototype, "title", void 0);
    return CategoryAxisItemComponentGenerated;
}(collection_item_component_1.CollectionItemComponent));
exports.CategoryAxisItemComponentGenerated = CategoryAxisItemComponentGenerated;
