/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { chartBaseTheme } from '@progress/kendo-charts';
import { chartDefaultTheme } from './chart-default-theme';
import { isDocumentAvailable } from '@progress/kendo-angular-common';
const font = (style) => `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
const ɵ0 = font;
const computedBackgroundColor = (element) => window.getComputedStyle(element).backgroundColor;
const ɵ1 = computedBackgroundColor;
const letterPos = (letter) => letter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
const ɵ2 = letterPos;
const seriesPos = (name) => {
    const alpha = name.match(/series-([a-z])$/);
    if (alpha !== null) {
        return letterPos(alpha[1]);
    }
    const num = name.split('--series-')[1];
    return parseInt(num, 10) - 1;
};
const ɵ3 = seriesPos;
const SERIES_COLORS = 30;
const seriesTemplate = () => {
    let template = `
      <div class="k-var--series-a"></div>
      <div class="k-var--series-b"></div>
      <div class="k-var--series-c"></div>
      <div class="k-var--series-d"></div>
      <div class="k-var--series-e"></div>
      <div class="k-var--series-f"></div>
  `;
    for (let i = 0; i < SERIES_COLORS; i++) {
        template += `
      <div class="k-var--series-${i + 1}"></div>`;
    }
    return template;
};
const ɵ4 = seriesTemplate;
const template = () => `
    <div class="k-var--accent"></div>
    <div class="k-var--accent-contrast"></div>
    <div class="k-var--base"></div>
    <div class="k-var--background"></div>

    <div class="k-var--normal-background"></div>
    <div class="k-var--normal-text-color"></div>
    <div class="k-var--hover-background"></div>
    <div class="k-var--hover-text-color"></div>
    <div class="k-var--selected-background"></div>
    <div class="k-var--selected-text-color"></div>
    <div class="k-var--chart-error-bars-background"></div>
    <div class="k-var--chart-notes-background"></div>
    <div class="k-var--chart-notes-border"></div>
    <div class="k-var--chart-notes-lines"></div>
    <div class="k-var--chart-crosshair-background"></div>

    <div class="k-var--chart-inactive"></div>
    <div class="k-var--chart-major-lines"></div>
    <div class="k-var--chart-minor-lines"></div>
    <div class="k-var--chart-area-opacity"></div>
    <div class="k-var--chart-area-inactive-opacity"></div>
    <div class="k-var--chart-line-inactive-opacity"></div>

    <div class="k-widget k-chart">
        <div class="k-var--chart-font"></div>
        <div class="k-var--chart-title-font"></div>
        <div class="k-var--chart-pane-title-font"></div>
        <div class="k-var--chart-label-font"></div>
    </div>

    <div class="k-var--series-unset"></div>
    <div class="k-var--series">
      ${seriesTemplate()}
    </div>
`;
const ɵ5 = template;
/**
 * @hidden
 */
let ThemeService = class ThemeService extends ConfigurationService {
    constructor(ngZone) {
        super(ngZone);
        this.loaded = false;
    }
    loadTheme() {
        if (this.loaded || !isDocumentAvailable()) {
            return;
        }
        if (!this.readTheme()) {
            this.readDefaultTheme();
        }
        this.loaded = true;
        this.next();
    }
    readTheme() {
        this.createElement();
        const available = this.queryColor('accent') !==
            this.queryColor('accent-contrast');
        try {
            if (available) {
                this.push(chartBaseTheme());
                this.setColors();
                this.setFonts();
                this.setSeriesColors();
            }
        }
        finally {
            this.destroyElement();
        }
        return available;
    }
    readDefaultTheme() {
        this.push(chartDefaultTheme());
    }
    createElement() {
        const container = this.element = document.createElement('div');
        container.style.display = 'none';
        container.innerHTML = template();
        document.body.appendChild(container);
    }
    destroyElement() {
        if (this.element) {
            document.body.removeChild(this.element);
            this.element = undefined;
        }
    }
    setStyle(key, value) {
        this.set(key, value);
    }
    setColors() {
        this.mapColor('axisDefaults.crosshair.color', 'chart-crosshair-background');
        this.mapColor('axisDefaults.labels.color', 'normal-text-color');
        this.mapColor('axisDefaults.line.color', 'chart-major-lines');
        this.mapColor('axisDefaults.majorGridLines.color', 'chart-major-lines');
        this.mapColor('axisDefaults.minorGridLines.color', 'chart-minor-lines');
        this.mapColor('axisDefaults.notes.icon.background', 'chart-notes-background');
        this.mapColor('axisDefaults.notes.icon.border.color', 'chart-notes-border');
        this.mapColor('axisDefaults.notes.line.color', 'chart-notes-lines');
        this.mapColor('axisDefaults.title.color', 'normal-text-color');
        this.mapColor('chartArea.background', 'background');
        this.mapColor('legend.inactiveItems.labels.color', 'chart-inactive');
        this.mapColor('legend.inactiveItems.markers.color', 'chart-inactive');
        this.mapColor('legend.labels.color', 'normal-text-color');
        this.mapColor('seriesDefaults.boxPlot.downColor', 'chart-major-lines');
        this.mapColor('seriesDefaults.boxPlot.mean.color', 'base');
        this.mapColor('seriesDefaults.boxPlot.median.color', 'base');
        this.mapColor('seriesDefaults.boxPlot.whiskers.color', 'accent');
        this.mapColor('seriesDefaults.bullet.target.color', 'normal-text-color');
        this.mapColor('seriesDefaults.candlestick.downColor', 'normal-text-color');
        this.mapColor('seriesDefaults.candlestick.line.color', 'normal-text-color');
        this.mapColor('seriesDefaults.errorBars.color', 'chart-error-bars-background');
        this.mapColor('seriesDefaults.horizontalWaterfall.line.color', 'chart-major-lines');
        this.mapColor('seriesDefaults.icon.border.color', 'chart-major-lines');
        this.mapColor('seriesDefaults.labels.background', 'background');
        this.mapColor('seriesDefaults.labels.color', 'normal-text-color');
        this.mapColor('seriesDefaults.notes.icon.background', 'chart-notes-background');
        this.mapColor('seriesDefaults.notes.icon.border.color', 'chart-notes-border');
        this.mapColor('seriesDefaults.notes.line.color', 'chart-notes-lines');
        this.mapColor('seriesDefaults.verticalBoxPlot.downColor', 'chart-major-lines');
        this.mapColor('seriesDefaults.verticalBoxPlot.mean.color', 'base');
        this.mapColor('seriesDefaults.verticalBoxPlot.median.color', 'base');
        this.mapColor('seriesDefaults.verticalBoxPlot.whiskers.color', 'accent');
        this.mapColor('seriesDefaults.verticalBullet.target.color', 'normal-text-color');
        this.mapColor('seriesDefaults.waterfall.line.color', 'chart-major-lines');
        this.mapColor('title.color', 'normal-text-color');
        const opacity = parseFloat(this.queryStyle('chart-area-opacity').opacity);
        if (!isNaN(opacity)) {
            this.setStyle('seriesDefaults.area.opacity', opacity);
            this.setStyle('seriesDefaults.radarArea.opacity', opacity);
            this.setStyle('seriesDefaults.verticalArea.opacity', opacity);
            this.setStyle('seriesDefaults.labels.opacity', opacity);
        }
        this.setInactiveOpacity(['area', 'verticalArea'], 'chart-area-inactive-opacity');
        this.setInactiveOpacity(['line', 'verticalLine'], 'chart-line-inactive-opacity');
    }
    setInactiveOpacity(seriesTypes, selector) {
        const inactiveOpacity = parseFloat(this.queryStyle(selector).opacity);
        if (!isNaN(inactiveOpacity) && inactiveOpacity < 1) {
            seriesTypes.forEach(type => this.setStyle(`seriesDefaults.${type}.highlight.inactiveOpacity`, inactiveOpacity));
        }
    }
    setFonts() {
        const defaultFont = font(this.queryStyle('chart-font'));
        const titleFont = font(this.queryStyle('chart-title-font'));
        const paneTitleFont = font(this.queryStyle('chart-pane-title-font'));
        const labelFont = font(this.queryStyle('chart-label-font'));
        this.setStyle('axisDefaults.labels.font', labelFont);
        this.setStyle('axisDefaults.notes.label.font', defaultFont);
        this.setStyle('axisDefaults.title.font', defaultFont);
        this.setStyle('legend.labels.font', defaultFont);
        this.setStyle('seriesDefaults.labels.font', labelFont);
        this.setStyle('seriesDefaults.notes.label.font', defaultFont);
        this.setStyle('title.font', titleFont);
        this.setStyle('paneDefaults.title.font', paneTitleFont);
    }
    setSeriesColors() {
        const element = this.element;
        const series = [].slice.call(element.querySelectorAll('.k-var--series div'));
        const unsetColor = computedBackgroundColor(element.querySelector('.k-var--series-unset'));
        const seriesColors = series.reduce((arr, el) => {
            const pos = seriesPos(el.className);
            const color = computedBackgroundColor(el);
            if (color !== unsetColor) {
                arr[pos] = color;
            }
            return arr;
        }, [] // Will populate the series colors in this array
        );
        this.setStyle('seriesColors', seriesColors);
    }
    mapColor(key, varName) {
        this.setStyle(key, this.queryColor(varName));
    }
    queryColor(varName) {
        return this.queryStyle(varName).backgroundColor;
    }
    queryStyle(varName) {
        const element = this.element.querySelector(`.k-var--${varName}`);
        return window.getComputedStyle(element);
    }
};
ThemeService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [NgZone])
], ThemeService);
export { ThemeService };
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5 };
