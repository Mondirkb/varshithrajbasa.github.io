(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");



// import { CertificationsComponent } from './certifications/certifications.component';




const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"] },
    // {path:'certifications',component:CertificationsComponent},
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'Portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "router-outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["table {\n  width: 100%;\n}\n\n  .skill-image {\n  max-height: 48px;\n  max-width: 48px;\n}\n\n  .skill-layout {\n  width: 60%;\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  margin-top: 1rem;\n}\n\n  .mat-progress-bar-buffer {\n  background-color: #e1bee7;\n}\n\n  tr.mat-row, tr.mat-footer-row[_ngcontent-%COMP%] {\n  height: 4rem !important;\n}\n\n.router-outlet[_ngcontent-%COMP%] {\n  min-height: 90vh;\n}\n\n@media only screen and (max-width: 700px) {\n    .skill-layout {\n    width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBOztFQUVJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0s7SUFDRyxVQUFBO0VBQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5za2lsbC1pbWFnZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0OHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0OHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnNraWxsLWxheW91dCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFiZWU3O1xyXG59XHJcblxyXG46Om5nLWRlZXAgdHIubWF0LXJvdyxcclxudHIubWF0LWZvb3Rlci1yb3cge1xyXG4gICAgaGVpZ2h0OiA0cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3V0ZXItb3V0bGV0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICA6Om5nLWRlZXAgLnNraWxsLWxheW91dCB7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");























































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["A11yModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__["ClipboardModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_13__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_15__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_38__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_39__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_41__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_42__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_43__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_44__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_45__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_46__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_48__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_49__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_50__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_52__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_51__["FooterComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_53__["SkillsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_13__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_15__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_38__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_39__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_41__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_42__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_43__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_44__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_45__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_46__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_48__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_49__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_50__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_52__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_51__["FooterComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_53__["SkillsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_13__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_15__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_38__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_39__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_41__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_42__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_43__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_44__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_45__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_46__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_48__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_49__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_50__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_52__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
        this.twitter = 'https://twitter.com/raj_basa';
        this.facebook = 'https://www.facebook.com/varshithraj.basa';
        this.instagram = 'https://instagram.com/varshithraj.basa';
        this.github = 'https://github.com/varshithrajbasa';
    }
    ngOnInit() {
    }
    openSocial(url) {
        window.open(url);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 0, consts: [[1, "footer"], [1, "icons"], ["aria-hidden", "true", 1, "fa", "fa-instagram", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-facebook-official", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-github-square", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-twitter-square", 3, "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_i_click_5_listener() { return ctx.openSocial(ctx.instagram); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_i_click_7_listener() { return ctx.openSocial(ctx.facebook); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_i_click_9_listener() { return ctx.openSocial(ctx.github); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_i_click_11_listener() { return ctx.openSocial(ctx.twitter); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #7b1fa2;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  align-content: center;\n  height: 150px;\n  flex-wrap: wrap;\n}\n\ndiv[_ngcontent-%COMP%] {\n  align-self: center;\n  font-size: x-large;\n}\n\n.icons[_ngcontent-%COMP%] {\n  width: 200px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\ni[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNSOztBQUVJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUVJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ1I7O0FBRUk7RUFDSSxlQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5mb290ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YjFmYTI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2IHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaWNvbnMge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class HomeComponent {
    constructor() {
        this.menu = new gsap__WEBPACK_IMPORTED_MODULE_1__["TimelineMax"]({ defaults: { ease: "power1.out" } });
        this.name = "Varshith Raj ";
        this.surname = "Basa";
        this.about_me = "I completed my graduation in computer science and engineering at Mallareddy college of engineering and technology, Hyderabad. I passionate about UI development.";
    }
    ngOnInit() {
        this.createMenuAnim();
    }
    createMenuAnim() {
        this.menu.to(".text", { y: "5%", duration: 1.5, stagger: 0.5 });
        this.menu.to(".intro", { y: "-100%", duration: 1 });
        this.menu.to(".intro2", { y: "-100%", duration: 1.25 }, '-=1');
        this.menu.to(".home-text", { x: "0%", duration: 1 });
        this.menu.to(".varshith-min", { x: "0%", duration: 1 }, '-=1');
    }
    downloadCV() {
        window.open("https://varshithrajbasa.github.io/varshithrajbasa-resume.pdf");
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 34, vars: 3, consts: [[1, "desktop"], [1, "home-text"], [1, "name"], [1, "specs"], [1, "about-me"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "home-image"], ["src", "https://varshithrajbasa.github.io/assets/varshith-min.png", "alt", "Photo of Varshith", 1, "varshith-min"], [1, "intro2"], [1, "intro"], [1, "intro-text"], [1, "hide"], [1, "text"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Full Stack Developer /");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Application Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_18_listener() { return ctx.downloadCV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Download CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Hola..!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Welcome to my Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "I create Innovative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.surname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about_me, "");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".background[_ngcontent-%COMP%] {\n  z-index: -1;\n  position: absolute;\n  object-fit: contain;\n  filter: blur(2px);\n}\n\n.intro[_ngcontent-%COMP%] {\n  background: black;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.intro-text[_ngcontent-%COMP%] {\n  color: aliceblue;\n  font-size: 1.5rem;\n}\n\n.hide[_ngcontent-%COMP%] {\n  background: black;\n  overflow: hidden;\n}\n\n.hide[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: translateY(105%);\n  display: inline-block;\n}\n\n.intro2[_ngcontent-%COMP%] {\n  background: #7b1fa2;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hide2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: translateY(105%);\n  display: inline-block;\n}\n\n.about-me[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.home-text[_ngcontent-%COMP%] {\n  text-shadow: 1px 1px 5px white;\n}\n\n.about-me[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n\n@media only screen and (min-width: 701px) {\n  .home-text[_ngcontent-%COMP%] {\n    transform: translateX(-200%);\n  }\n\n  .varshith-min[_ngcontent-%COMP%] {\n    transform: translateX(200%);\n  }\n\n  .desktop[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n  }\n\n  .desktop[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: nowrap;\n  }\n\n  .desktop[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 10%;\n  }\n\n  .about-me[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0%;\n    margin: 2rem 1rem 1rem 1rem;\n  }\n\n  .name[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    font-size: xxx-large;\n    font-weight: 800;\n    margin-top: 5%;\n  }\n\n  .home-image[_ngcontent-%COMP%] {\n    margin-top: 60px !important;\n  }\n}\n\n@media only screen and (max-width: 700px) {\n  .intro-text[_ngcontent-%COMP%] {\n    width: 90%;\n    font-size: 1.25rem;\n  }\n\n  .home-text[_ngcontent-%COMP%] {\n    transform: translateX(-150%);\n  }\n\n  .name[_ngcontent-%COMP%] {\n    font-size: xxx-large;\n    margin-top: 25%;\n    margin-left: 2rem;\n    display: grid;\n  }\n\n  .specs[_ngcontent-%COMP%] {\n    margin-left: 2rem;\n  }\n\n  .about-me[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 350px;\n    width: 325px;\n  }\n\n  .about-me[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    right: 0%;\n    margin: 2rem 1rem 1rem 1rem;\n    position: absolute;\n  }\n\n  .varshith-min[_ngcontent-%COMP%] {\n    height: 280px;\n    object-fit: cover;\n    position: absolute;\n    z-index: -1;\n    top: 220px;\n    right: 2px;\n    transform: translateX(-200%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksNEJBQUE7RUFDTjs7RUFDRTtJQUNJLDJCQUFBO0VBRU47O0VBQUU7SUFDSSxrQkFBQTtFQUdOOztFQURFO0lBQ0ksYUFBQTtJQUNBLGlCQUFBO0VBSU47O0VBRkU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtFQUtOOztFQUhFO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7RUFNTjs7RUFKRTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG9CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBT047O0VBTEU7SUFDSSwyQkFBQTtFQVFOO0FBQ0Y7O0FBTEE7RUFDSTtJQUNJLFVBQUE7SUFDQSxrQkFBQTtFQU9OOztFQUxFO0lBQ0ksNEJBQUE7RUFRTjs7RUFORTtJQUNJLG9CQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFQVNOOztFQVBFO0lBQ0ksaUJBQUE7RUFVTjs7RUFSRTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFXTjs7RUFURTtJQUNJLFNBQUE7SUFDQSwyQkFBQTtJQUNBLGtCQUFBO0VBWU47O0VBVkU7SUFDSSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLDRCQUFBO0VBYU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIGZpbHRlcjogYmx1cigycHgpO1xyXG59XHJcblxyXG4uaW50cm8ge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW50cm8tdGV4dCB7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhpZGUgc3BhbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTA1JSk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbnRybzIge1xyXG4gICAgYmFja2dyb3VuZDogIzdiMWZhMjsgLy9saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMmFhYjAsICMwMGNkYWMpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhpZGUyIHNwYW4ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwNSUpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYWJvdXQtbWUge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLmhvbWUtdGV4dCB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggd2hpdGU7XHJcbn1cclxuXHJcbi5hYm91dC1tZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSB7XHJcbiAgICAuaG9tZS10ZXh0IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xyXG4gICAgfVxyXG4gICAgLnZhcnNoaXRoLW1pbiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xyXG4gICAgfVxyXG4gICAgLmRlc2t0b3Age1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5kZXNrdG9wIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgfVxyXG4gICAgLmRlc2t0b3A+ZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDEwJTtcclxuICAgIH1cclxuICAgIC5hYm91dC1tZT5idXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMCU7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIDFyZW0gMXJlbSAxcmVtO1xyXG4gICAgfVxyXG4gICAgLm5hbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmb250LXNpemU6IHh4eC1sYXJnZTtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgfVxyXG4gICAgLmhvbWUtaW1hZ2Uge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLmludHJvLXRleHQge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgfVxyXG4gICAgLmhvbWUtdGV4dCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcclxuICAgIH1cclxuICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IHh4eC1sYXJnZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgIH1cclxuICAgIC5zcGVjcyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtbWUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDM1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgIH1cclxuICAgIC5hYm91dC1tZT5idXR0b24ge1xyXG4gICAgICAgIHJpZ2h0OiAwJTtcclxuICAgICAgICBtYXJnaW46IDJyZW0gMXJlbSAxcmVtIDFyZW07XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgLnZhcnNoaXRoLW1pbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgdG9wOiAyMjBweDtcclxuICAgICAgICByaWdodDogMnB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");









class MenuComponent {
    constructor() {
        this.notification_no = "1";
        this.menu = new gsap__WEBPACK_IMPORTED_MODULE_1__["TimelineMax"]({ defaults: { ease: "power1.out" } });
        this.isopen = true;
    }
    ngOnInit() {
    }
    linkedinContact() {
        this.sidenavToggle();
        window.open("https://www.linkedin.com/in/varshith-raj-basa-b0893815a/");
    }
    sidenavToggle() {
        this.isopen ? this.showNav() : this.hideNav();
        this.isopen ? this.isopen = false : this.isopen = true;
    }
    showNav() {
        this.menu.to(".mobile-nav", { x: "0%", duration: 0.15 });
        this.menu.to(".menu-options1", { x: "0%", duration: 0.5, stagger: 0.25 });
    }
    hideNav() {
        this.menu.to(".mobile-nav", { x: "-100%", duration: 0.15 });
        this.menu.to(".menu-options1", { x: "-100%", duration: 0.1 }, '-=1');
    }
    notification_number() {
        this.notification_no = " ";
    }
    call() {
        window.open("tel:+918341418482");
    }
    mail() {
        window.open("mailto:varshithraj.basa@gmail.com");
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 39, vars: 2, consts: [["color", "primary", 1, "mat-elevation-z6"], ["mat-icon-button", "", "id", "menu", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 3, "click"], [1, "menu-options"], ["mat-button", "", "routerLink", "/"], ["mat-button", "", "routerLink", "/skills"], ["mat-button", "", "routerLink", "/projects"], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "aria-label", " icon-button with notifications icon ", "matBadgeColor", "accent", 1, "example-icon", 3, "matBadge", "matMenuTriggerFor", "click"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "mobile-nav"], [1, "menu-options1"], ["mat-button", "", "routerLink", "/", 3, "click"], ["mat-button", "", "routerLink", "/skills", 3, "click"], ["mat-button", "", "routerLink", "/projects", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_1_listener() { return ctx.sidenavToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Varshith Raj Basa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_13_listener() { return ctx.linkedinContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_16_listener() { return ctx.notification_number(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_21_listener() { return ctx.call(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "local_phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_25_listener() { return ctx.mail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "local_post_office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_31_listener() { return ctx.sidenavToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_33_listener() { return ctx.sidenavToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_35_listener() { return ctx.sidenavToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_37_listener() { return ctx.linkedinContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx.notification_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadge"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  box-shadow: 0 3px 5px -1px rgba(255, 255, 255, 0.2), 0 6px 10px 0 rgba(255, 255, 255, 0.14), 0 1px 18px 0 rgba(255, 255, 255, 0.12);\n}\n\n.example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .example-button-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n@media only screen and (min-width: 701px) {\n  #menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .menu-options1[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 700px) {\n  .menu-options[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .menu-options1[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-around;\n    height: 80%;\n    flex-direction: column;\n    transform: translateX(-100%);\n  }\n\n  .menu-options1[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    font-size: 2em;\n    padding: 1rem;\n  }\n\n  .mobile-nav[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    background-color: #7b1fa2;\n    position: absolute;\n    z-index: 2;\n    transform: translateX(-100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtSUFBQTtBQUNKOztBQUVBOztFQUVJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLGFBQUE7RUFDTjs7RUFDRTtJQUNJLGFBQUE7RUFFTjtBQUNGOztBQUNBO0VBQ0k7SUFDSSxhQUFBO0VBQ047O0VBQ0U7SUFDSSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSw0QkFBQTtFQUVOOztFQUFFO0lBQ0ksY0FBQTtJQUNBLGFBQUE7RUFHTjs7RUFERTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSw0QkFBQTtFQUlOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xMik7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIHtcclxuICAgICNtZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtb3B0aW9uczEge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5tZW51LW9wdGlvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWVudS1vcHRpb25zMSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB9XHJcbiAgICAubWVudS1vcHRpb25zMT5idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB9XHJcbiAgICAubW9iaWxlLW5hdiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YjFmYTI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






function ProjectsComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_mat_card_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const p_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.viewSourceCode(p_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View on GitHub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.about, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.technology, " ");
} }
class ProjectsComponent {
    constructor() {
        this.projects = [
            {
                image: "https://s3.amazonaws.com/www-inside-design/uploads/2018/05/weather-app-4_feature-983x740.jpg",
                name: "Weather App",
                about: "A Weather Application, displays Weather depends on Location.",
                technology: "Flutter, Dart, Android Studio",
                link: "https://github.com/varshithrajbasa/Clima-Flutter"
            },
            {
                image: "https://i.pinimg.com/originals/a7/1a/fc/a71afc4425785506e03078b742c6b64e.png",
                name: "BMI Calculator App",
                about: "This Application Calculates Your BMI by using Height and Weight",
                technology: "Flutter, Dart, Android Studio",
                link: "https://github.com/varshithrajbasa/bmi-calculator-flutter"
            },
            {
                image: "https://varshithrajbasa.github.io/files/Port-Scanner/Port-Scanner.gif",
                name: "Open Port Scanner",
                about: "Open Port Scanner is a open source tool which is used to find all open ports on a IP address.",
                technology: "Python3, Socket.io",
                link: "https://github.com/varshithrajbasa/Port-Scanner"
            },
            {
                image: "https://www.israel21c.org/wp-content/uploads/2018/11/eyeSight_-_Driver_Monitoring_Driver_Asleep_1-1168x657.jpg",
                name: "Driver Drowsiness Detection",
                about: "This Project will alert Drivers when they feel Drowsy and send an alert to avoid accident",
                technology: "Python3, OpenCV, Dlib, Imutils, Scipy, Numpy, Tkinter",
                link: "https://github.com/varshithrajbasa/Driver-Drowsiness-Detection-using-Visual-behavior-and-Machine-Learning"
            },
            {
                image: "https://miro.medium.com/max/3120/1*6XAf0oi88MRCBbCd_cHcew.png",
                name: "Data Vizualization",
                about: "A project based on online test and results are Vizualized for easy Understanding",
                technology: "Java, JFree Chart, JSP, Apache, Eclipse",
                link: "https://github.com/varshithrajbasa/Data-Vizualization"
            },
            {
                image: "https://cdn.dribbble.com/users/2806911/screenshots/11482888/bank_-_dashboard_.png",
                name: "Retail Banking",
                about: "Retail Banking Project Allows admin to manage Customers and View Customer Stats, Account Stats, Deposit and Withdraw Money.",
                technology: "Python, Flask, MySQL, HTML, CSS, JS",
                link: "https://github.com/varshithrajbasa/RetailBanking"
            },
            {
                image: "https://lh3.googleusercontent.com/QIzmXTimA7lxFw5LqTGHLfLUXjqy0EZEeRhWGoBbhDYBNerhiqh9tBywQXZ2MpZiow=w412-h220-rw",
                name: "HMS",
                about: "Hospital Management Project Allows admin to manage Patients and view Diagnostics and Issue Medicines.",
                technology: "Python, Flask, MySQL, HTML, CSS, Jquery, JS",
                link: "https://github.com/varshithrajbasa/hydhospital"
            }
        ];
    }
    ngOnInit() {
    }
    viewSourceCode(p) {
        window.open(p.link);
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 2, vars: 1, consts: [[1, "projects"], ["class", "projects-card", 4, "ngFor", "ngForOf"], [1, "projects-card"], ["mat-card-image", "", 3, "src"], ["label", "About"], ["label", "Technology"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_mat_card_1_Template, 15, 4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".projects[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.projects-card[_ngcontent-%COMP%] {\n  width: 25%;\n  min-width: 300px;\n  margin: 0.5rem;\n  transition: all 0.2s ease-in-out;\n}\n\n.projects-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.4);\n}\n\n.projects-card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 200px;\n  object-fit: cover;\n}\n\n  .mat-tab-body-wrapper {\n  height: 60px;\n}\n\n@media only screen and (max-width: 700px) {\n  .projects[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n\n  .projects-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFDUjs7QUFFSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQUNSOztBQUVJO0VBQ0ksK0NBQUE7QUFDUjs7QUFFSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQUNSOztBQUVLO0VBQ0csWUFBQTtBQUNSOztBQUVJO0VBQ0k7SUFDSSxVQUFBO0VBQ1Y7O0VBQ007SUFDSSxXQUFBO0VBRVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5wcm9qZWN0cyB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3RzLWNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3RzLWNhcmQ6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0cy1jYXJkPmltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgIDo6bmctZGVlcCAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIC5wcm9qZWN0cyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9qZWN0cy1jYXJkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");




function SkillsComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SkillsComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", element_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SkillsComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SkillsComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.skillName, " ");
} }
function SkillsComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Progress ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SkillsComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", element_r10.percentage);
} }
function SkillsComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
function SkillsComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
const ELEMENT_DATA = [
    {
        image: 'https://img.icons8.com/color/48/000000/python.png',
        skillName: 'Python',
        percentage: '90'
    },
    {
        image: 'https://img.icons8.com/color/48/000000/c-programming.png',
        skillName: 'C',
        percentage: '90'
    },
    {
        image: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png',
        skillName: 'JAVA',
        percentage: '90'
    },
    {
        image: 'https://img.icons8.com/color/48/000000/javascript.png',
        skillName: 'JavaScript',
        percentage: '80'
    },
    {
        image: 'https://img.icons8.com/offices/80/000000/php-logo.png',
        skillName: 'PHP',
        percentage: '85'
    },
    {
        image: 'https://img.icons8.com/color/64/000000/html-5.png',
        skillName: 'HTML 5',
        percentage: '90'
    },
    {
        image: 'https://img.icons8.com/color/48/000000/css3.png',
        skillName: 'CSS 3',
        percentage: '90'
    },
    {
        image: 'https://img.icons8.com/fluent/48/000000/console.png',
        skillName: 'Shell Script',
        percentage: '80'
    }
];
class SkillsComponent {
    constructor() {
        this.displayedColumns = ['image', 'skillName', 'percentage'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 13, vars: 3, consts: [[1, "skill-layout"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "image"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "skillName"], ["matColumnDef", "percentage"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "skill-image", 3, "src"], ["mode", "determinate", 3, "value"], ["mat-header-row", ""], ["mat-row", ""]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillsComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillsComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SkillsComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SkillsComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SkillsComponent_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SkillsComponent_td_10_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SkillsComponent_tr_11_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SkillsComponent_tr_12_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular8\Angular-Material-Portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map