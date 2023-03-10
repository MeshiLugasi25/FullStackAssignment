/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var collection_service_1 = require("./collection.service");
var copy_changes_1 = require("./copy-changes");
var to_simple_changes_1 = require("./to-simple-changes");
/**
 * @hidden
 */
var CollectionItemComponent = /** @class */ (function () {
    function CollectionItemComponent(configurationService, collectionService) {
        var _this = this;
        this.configurationService = configurationService;
        this.collectionService = collectionService;
        this.options = {};
        this.subscription = configurationService.onFastChange$.subscribe(function (store) {
            _this.options = store;
            _this.notify();
        });
    }
    CollectionItemComponent.prototype.ngOnChanges = function (changes) {
        var store = this.configurationService.store;
        copy_changes_1.copyChanges(changes, store);
        this.configurationService.push(store);
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
    CollectionItemComponent.prototype.notifyChanges = function (changes) {
        this.ngOnChanges(to_simple_changes_1.toSimpleChanges(changes));
    };
    CollectionItemComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CollectionItemComponent.prototype.notify = function () {
        if (!this.collectionService) {
            return;
        }
        this.collectionService.notify(new collection_service_1.ItemChange(this, this.options));
    };
    return CollectionItemComponent;
}());
exports.CollectionItemComponent = CollectionItemComponent;
