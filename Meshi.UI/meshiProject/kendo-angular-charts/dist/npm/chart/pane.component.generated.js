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
var PaneComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(PaneComponentGenerated, _super);
    function PaneComponentGenerated(configurationService, collectionService) {
        var _this = _super.call(this, configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], PaneComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PaneComponentGenerated.prototype, "border", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], PaneComponentGenerated.prototype, "clip", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], PaneComponentGenerated.prototype, "height", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PaneComponentGenerated.prototype, "margin", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], PaneComponentGenerated.prototype, "name", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PaneComponentGenerated.prototype, "padding", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PaneComponentGenerated.prototype, "title", void 0);
    return PaneComponentGenerated;
}(collection_item_component_1.CollectionItemComponent));
exports.PaneComponentGenerated = PaneComponentGenerated;
