/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var collection_item_component_1 = require("../common/collection-item.component");
/**
 * @hidden
 */
var YAxisItemComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(YAxisItemComponentGenerated, _super);
    function YAxisItemComponentGenerated(configurationService, collectionService) {
        var _this = _super.call(this, configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisItemComponentGenerated.prototype, "axisCrossingValue", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisItemComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisItemComponentGenerated.prototype, "baseUnit", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisItemComponentGenerated.prototype, "color", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisItemComponentGenerated.prototype, "line", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisItemComponentGenerated.prototype, "majorGridLines", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisItemComponentGenerated.prototype, "majorTicks", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], YAxisItemComponentGenerated.prototype, "majorUnit", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisItemComponentGenerated.prototype, "max", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisItemComponentGenerated.prototype, "min", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisItemComponentGenerated.prototype, "minorGridLines", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisItemComponentGenerated.prototype, "minorTicks", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], YAxisItemComponentGenerated.prototype, "minorUnit", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisItemComponentGenerated.prototype, "name", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], YAxisItemComponentGenerated.prototype, "narrowRange", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisItemComponentGenerated.prototype, "pane", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], YAxisItemComponentGenerated.prototype, "plotBands", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], YAxisItemComponentGenerated.prototype, "reverse", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisItemComponentGenerated.prototype, "type", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], YAxisItemComponentGenerated.prototype, "visible", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisItemComponentGenerated.prototype, "crosshair", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisItemComponentGenerated.prototype, "labels", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisItemComponentGenerated.prototype, "notes", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisItemComponentGenerated.prototype, "title", void 0);
    return YAxisItemComponentGenerated;
}(collection_item_component_1.CollectionItemComponent));
exports.YAxisItemComponentGenerated = YAxisItemComponentGenerated;
