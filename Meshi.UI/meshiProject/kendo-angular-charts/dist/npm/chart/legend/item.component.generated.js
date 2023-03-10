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
var LegendItemComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(LegendItemComponentGenerated, _super);
    function LegendItemComponentGenerated(configurationService) {
        var _this = _super.call(this, 'legend.item', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], LegendItemComponentGenerated.prototype, "cursor", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], LegendItemComponentGenerated.prototype, "visual", void 0);
    return LegendItemComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.LegendItemComponentGenerated = LegendItemComponentGenerated;
