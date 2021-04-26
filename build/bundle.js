/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/BookingCalendar.ts":
/*!************************************!*\
  !*** ./src/app/BookingCalendar.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BookingCalendar\": () => (/* binding */ BookingCalendar)\n/* harmony export */ });\n/* harmony import */ var _lang_months__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang/months */ \"./src/app/lang/months.ts\");\n/* harmony import */ var _lang_days__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang/days */ \"./src/app/lang/days.ts\");\n\r\n\r\nvar BookingCalendar = /** @class */ (function () {\r\n    /**\r\n     * lang {es | en} Calendar language\r\n     * key {string} Google Calendar API KEY\r\n     * idContainer {string} Container ID where the calendar is going to be displayed\r\n     */\r\n    function BookingCalendar(lang, key, idContainer) {\r\n        if (lang === void 0) { lang = 'en'; }\r\n        /**\r\n         * Names of the months\r\n         */\r\n        this.monthsName = [];\r\n        /**\r\n         * Names of the days\r\n         */\r\n        this.daysName = [];\r\n        this.lang = lang;\r\n        this.key = key;\r\n        this.monthsName = _lang_months__WEBPACK_IMPORTED_MODULE_0__.lang[lang];\r\n        this.daysName = _lang_days__WEBPACK_IMPORTED_MODULE_1__.lang[lang];\r\n        var today = new Date();\r\n        this.currentDate = new Date(today.getFullYear(), today.getMonth(), 1);\r\n        this.container = document.getElementById(idContainer);\r\n        this.monthNameContainer = document.createElement(\"span\");\r\n        this.daysContainer = document.createElement(\"div\");\r\n        this.daysContainer.setAttribute(\"id\", \"days-container\");\r\n    }\r\n    /**\r\n     * Initialize the calendar\r\n     */\r\n    BookingCalendar.prototype.init = function () {\r\n        this.createHeader();\r\n        this.createDaysNameElement();\r\n        this.container.appendChild(this.daysContainer);\r\n        this.fillCalendarDaysElement();\r\n    };\r\n    /**\r\n     * Setting the header with the previous and next buttons and the month\r\n     */\r\n    BookingCalendar.prototype.createHeader = function () {\r\n        var _this = this;\r\n        // Header\r\n        var header = document.createElement(\"div\");\r\n        header.setAttribute(\"id\", \"calendar-header\");\r\n        // Previous Button\r\n        var btnPreviousMonth = document.createElement(\"button\");\r\n        btnPreviousMonth.innerHTML = \"<\";\r\n        btnPreviousMonth.addEventListener('click', function () { return _this.chageMonthEvent(false); });\r\n        header.appendChild(btnPreviousMonth);\r\n        //Month Name\r\n        this.setCalendarMonthElement();\r\n        header.appendChild(this.monthNameContainer);\r\n        // Next Button\r\n        var btnNextMonth = document.createElement(\"button\");\r\n        btnNextMonth.innerHTML = \">\";\r\n        btnNextMonth.addEventListener('click', function () { return _this.chageMonthEvent(true); });\r\n        header.appendChild(btnNextMonth);\r\n        this.container.appendChild(header);\r\n    };\r\n    /**\r\n     * Event to change the month by clicking the next or previous buttons\r\n     * isNext {boolean} Indicates in which direction the month is going to be changed,\r\n     * true = next, false = previous.\r\n     */\r\n    BookingCalendar.prototype.chageMonthEvent = function (isNext) {\r\n        isNext ? this.setNextMonth() : this.setPreviousMonth(); // logica\r\n        this.setCalendarMonthElement();\r\n        this.fillCalendarDaysElement();\r\n    };\r\n    /**\r\n     * Create the element with the name of the days\r\n     */\r\n    BookingCalendar.prototype.createDaysNameElement = function () {\r\n        var header = document.getElementById(\"calendar-header\");\r\n        var daysContainer = document.createElement(\"div\");\r\n        daysContainer.setAttribute(\"id\", \"days\");\r\n        this.getDaysName().forEach(function (name) {\r\n            var cell = document.createElement(\"div\");\r\n            cell.classList.add('cell');\r\n            cell.innerHTML = name;\r\n            daysContainer.appendChild(cell);\r\n        });\r\n        header.appendChild(daysContainer);\r\n    };\r\n    /**\r\n     * Set the month name in the calendar element\r\n     */\r\n    BookingCalendar.prototype.setCalendarMonthElement = function () {\r\n        var currentMonth = document.createElement('p');\r\n        currentMonth.setAttribute(\"id\", \"current-month\");\r\n        currentMonth.innerHTML = this.getMonthName(this.currentDate.getMonth()) + \" \" + this.currentDate.getFullYear();\r\n        this.monthNameContainer.innerHTML = currentMonth.innerHTML;\r\n    };\r\n    /**\r\n     * Fill calendar with all the days\r\n     */\r\n    BookingCalendar.prototype.fillCalendarDaysElement = function () {\r\n        var _this = this;\r\n        this.daysContainer.innerHTML = \"\";\r\n        var today = new Date();\r\n        this.setMonthStructure().forEach(function (day) {\r\n            var cell = document.createElement(\"div\");\r\n            cell.innerHTML = (day === null || day === void 0 ? void 0 : day.day) ? day.day : \"\";\r\n            (cell.innerHTML != \"\") ? cell.classList.add('cell') : cell.classList.add('cell_empty');\r\n            if ((day === null || day === void 0 ? void 0 : day.day) && parseInt(day.day) < today.getDate()\r\n                && today.getMonth() == _this.currentDate.getMonth()\r\n                && today.getFullYear() == _this.currentDate.getFullYear()) {\r\n                cell.classList.add(\"cell_disabled\");\r\n            }\r\n            _this.daysContainer.appendChild(cell);\r\n        });\r\n    };\r\n    /**\r\n     * Get names of months\r\n     * return an array of months\r\n     */\r\n    BookingCalendar.prototype.getMonthsName = function () {\r\n        return this.monthsName;\r\n    };\r\n    /**\r\n     * Get the name of a month indicated by number\r\n     * month {number} Number of a month, starting from 0\r\n     * return the requested month name\r\n     */\r\n    BookingCalendar.prototype.getMonthName = function (month) {\r\n        if (month >= this.monthsName.length) {\r\n            throw new Error(\"Month cannot be greater than 11.\");\r\n        }\r\n        return this.monthsName[month];\r\n    };\r\n    /**\r\n     * Get initial letter of the days\r\n     * return an array of days\r\n     */\r\n    BookingCalendar.prototype.getDaysName = function () {\r\n        return this.daysName;\r\n    };\r\n    /**\r\n     * Get the name of a day indicated by number\r\n     * day {number} Number of a day of the week, starting from 0\r\n     * return the requested day name\r\n     */\r\n    BookingCalendar.prototype.getDayName = function (day) {\r\n        if (day >= this.daysName.length) {\r\n            throw new Error('Day cannot be greater than 6.');\r\n        }\r\n        return this.daysName[day];\r\n    };\r\n    /**\r\n     * Get the number of days of a month\r\n     * month {number} Number of the month, starting from 1, which we want to know how many days does it have\r\n     * year {number} Number of the year\r\n     * return the number of days that the requested month has\r\n     */\r\n    BookingCalendar.prototype.getMonthDays = function () {\r\n        var month = this.currentDate.getMonth();\r\n        var year = this.currentDate.getFullYear();\r\n        return new Date(year, month + 1, 0).getDate();\r\n    };\r\n    ;\r\n    /**\r\n     * Get the first day of the month as a number\r\n     * return the number of the day, starting from 0 as Sunday\r\n     */\r\n    BookingCalendar.prototype.getFirstDayOfMonth = function () {\r\n        return this.currentDate.getDay();\r\n    };\r\n    /**\r\n     * Set the month structure\r\n     * date {Date} date\r\n     * return an array with the structure of the month\r\n     */\r\n    BookingCalendar.prototype.setMonthStructure = function () {\r\n        var blankSpaces = this.getFirstDayOfMonth();\r\n        var monthDays = this.getMonthDays();\r\n        var monthStructure = new Array(blankSpaces);\r\n        monthStructure.fill(null, 0, blankSpaces);\r\n        var days = Array.from({ length: monthDays }, function (_, index) { return ({ day: index + 1 + \"\" }); });\r\n        monthStructure = monthStructure.concat(days);\r\n        return monthStructure;\r\n    };\r\n    /**\r\n     * Set the currentDate to the previous month\r\n     */\r\n    BookingCalendar.prototype.setPreviousMonth = function () {\r\n        var today = new Date();\r\n        if (today < this.currentDate) {\r\n            this.currentDate.setMonth(this.currentDate.getMonth() - 1);\r\n        }\r\n    };\r\n    /**\r\n     * Set the currentDate to the next month\r\n     */\r\n    BookingCalendar.prototype.setNextMonth = function () {\r\n        this.currentDate.setMonth(this.currentDate.getMonth() + 1);\r\n    };\r\n    /**\r\n     * Set the currentDate to the indicated date\r\n     * date {Date} date\r\n     */\r\n    BookingCalendar.prototype.changeMonth = function (date) {\r\n        this.currentDate = new Date(date.getFullYear(), date.getMonth(), 1);\r\n    };\r\n    return BookingCalendar;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://bookingcalendarjs/./src/app/BookingCalendar.ts?");

/***/ }),

/***/ "./src/app/lang/days.ts":
/*!******************************!*\
  !*** ./src/app/lang/days.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lang\": () => (/* binding */ lang)\n/* harmony export */ });\nvar lang = {\r\n    \"es\": [\"D\", \"L\", \"M\",\r\n        \"X\", \"J\", \"V\", \"S\"\r\n    ],\r\n    \"en\": [\"S\", \"M\", \"T\",\r\n        \"W\", \"T\", \"F\", \"S\"\r\n    ]\r\n};\r\n\n\n//# sourceURL=webpack://bookingcalendarjs/./src/app/lang/days.ts?");

/***/ }),

/***/ "./src/app/lang/months.ts":
/*!********************************!*\
  !*** ./src/app/lang/months.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lang\": () => (/* binding */ lang)\n/* harmony export */ });\nvar lang = {\r\n    \"es\": [\"Enero\", \"Febrero\", \"Marzo\",\r\n        \"Abril\", \"Mayo\", \"Junio\",\r\n        \"Julio\", \"Agosto\", \"Septiembre\",\r\n        \"Octubre\", \"Noviembre\", \"Diciembre\"\r\n    ],\r\n    \"en\": [\"January\", \"February\", \"March\",\r\n        \"April\", \"May\", \"June\",\r\n        \"July\", \"August\", \"September\",\r\n        \"October\", \"November\", \"December\"\r\n    ]\r\n};\r\n\n\n//# sourceURL=webpack://bookingcalendarjs/./src/app/lang/months.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_BookingCalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/BookingCalendar */ \"./src/app/BookingCalendar.ts\");\n\r\nwindow.onload = function () {\r\n    var calendar = new _app_BookingCalendar__WEBPACK_IMPORTED_MODULE_0__.BookingCalendar('es', 'key', 'container');\r\n    calendar.init();\r\n};\r\n\n\n//# sourceURL=webpack://bookingcalendarjs/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;