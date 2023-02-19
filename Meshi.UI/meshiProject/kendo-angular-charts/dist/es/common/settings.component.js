/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import { Change } from './configuration.service';
import { copyChanges } from './copy-changes';
import { toSimpleChanges } from './to-simple-changes';
/**
 * @hidden
 */
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(configKey, configurationService) {
        this.configKey = configKey;
        this.configurationService = configurationService;
        this.store = {};
        if (configKey === undefined) {
            throw new Error('Configuration key not set');
        }
    }
    SettingsComponent.prototype.ngOnDestroy = function () {
        this.store = undefined;
        this.notify();
    };
    SettingsComponent.prototype.ngOnChanges = function (changes) {
        copyChanges(changes, this.store);
        this.notify();
    };
    /**
     * Updates the component fields with the specified values and refreshes the Chart.
     *
     * Use this method when the configuration values cannot be set through the template.
     *
     * @example
     * ```ts-no-run
     * item.notifyChanges({ visible: true });
     * ```
     *
     * @param changes An object containing the updated input fields.
     */
    SettingsComponent.prototype.notifyChanges = function (changes) {
        this.ngOnChanges(toSimpleChanges(changes));
    };
    SettingsComponent.prototype.markAsVisible = function () {
        this.store.visible = true;
        this.notify();
    };
    SettingsComponent.prototype.notify = function () {
        this.configurationService.notify(new Change(this.configKey, this.store));
    };
    return SettingsComponent;
}());
export { SettingsComponent };
