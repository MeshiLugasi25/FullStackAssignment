/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var settings_component_1 = require("../../common/settings.component");
/**
 * @hidden
 */
var XAxisNotesComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(XAxisNotesComponentGenerated, _super);
    function XAxisNotesComponentGenerated(configurationService) {
        var _this = _super.call(this, 'notes', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], XAxisNotesComponentGenerated.prototype, "data", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisNotesComponentGenerated.prototype, "line", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], XAxisNotesComponentGenerated.prototype, "position", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], XAxisNotesComponentGenerated.prototype, "visual", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisNotesComponentGenerated.prototype, "icon", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisNotesComponentGenerated.prototype, "label", void 0);
    return XAxisNotesComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.XAxisNotesComponentGenerated = XAxisNotesComponentGenerated;
