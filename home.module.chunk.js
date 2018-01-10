webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/pages/faculty/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n  font-family: sans-serif;\r\n  width: 100%;\r\n  border-spacing: 0;\r\n  border-collapse: separate;\r\n  table-layout: fixed;\r\n  margin-bottom: 50px;\r\n}\r\n\r\ntable thead tr th {\r\n  background: #626E7E;\r\n  color: #d1d5db;\r\n  padding: 0.5em;\r\n  overflow: hidden;\r\n}\r\n\r\ntable thead tr th:first-child {\r\n  border-radius: 3px 0 0 0;\r\n}\r\n\r\ntable thead tr th:last-child {\r\n  border-radius: 0 3px  0 0;\r\n}\r\ntable thead tr th .time-slot {\r\n  display: block;\r\n  font-size: 1.2em;\r\n  border-radius: 25%;\r\n  width: 60px;\r\n  height: 30px;\r\n  margin: 0 auto 5px;\r\n  /* padding: 5px; */\r\n  line-height: 1.8;\r\n}\r\ntable thead tr th .time-slot.active {\r\n  background: #d1d5db;\r\n  color: #626E7E;\r\n}\r\n\r\nth {\r\n  text-align: center;\r\n}\r\n\r\n.time-table-hover>tbody>tr>td:hover {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\ntable thead tr th i {\r\n  vertical-align: middle;\r\n  font-size: 2em;\r\n}\r\ntable tbody tr {\r\n  background: #d1d5db;\r\n}\r\ntable tbody tr:nth-child(odd) {\r\n  background: #c8cdd4;\r\n}\r\ntable tbody tr:nth-child(n+0) td {\r\n  border-bottom: 1px solid #626E7E;\r\n}\r\ntable tbody tr td {\r\n  /* text-align: left;\r\n  vertical-align: middle; */\r\n  border-left: 1px solid #626E7E;\r\n  position: relative;\r\n  height: 155px;\r\n  cursor: pointer;\r\n  font-size: 12px;\r\n  min-height: 155px;\r\n}\r\n\r\ntable tbody tr td p{\r\n  margin: 0px;\r\n}\r\n\r\ntable tbody tr td:last-child {\r\n  border-right: 1px solid #626E7E;\r\n}\r\ntable tbody tr td.day {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-size: 2em;\r\n  padding: 0;\r\n  color: #626E7E;\r\n  background: #fff;\r\n  border-bottom: 1px solid #626E7E;\r\n  border-collapse: separate;\r\n  min-width: 100px;\r\n  cursor: default;\r\n}\r\ntable tbody tr td.day span {\r\n  display: block;\r\n}\r\n@media (max-width: 60em) {\r\n  table tbody tr td.day span {\r\n    transform: rotate(270deg);\r\n    -webkit-transform: rotate(270deg);\r\n    -moz-transform: rotate(270deg);\r\n  }\r\n}\r\n@media (max-width: 27em) {\r\n  table thead tr th {\r\n    font-size: 65%;\r\n  }\r\n  table thead tr th .time-slot {\r\n    display: block;\r\n    font-size: 1.2em;\r\n    border-radius: 25%;\r\n    width: 60px;\r\n    height: 20px;\r\n    margin: 0 auto 5px;\r\n    padding: 5px;\r\n  }\r\n  table thead tr th .time-slot.active {\r\n    background: #d1d5db;\r\n    color: #626E7E;\r\n  }\r\n  table tbody tr td.day {\r\n    font-size: 1.7em;\r\n  }\r\n  table tbody tr td.day span {\r\n    transform: translateY(16px) rotate(270deg);\r\n    -webkit-transform: translateY(16px) rotate(270deg);\r\n    -moz-transform: translateY(16px) rotate(270deg);\r\n  }\r\n}\r\n\r\n.slot-option{\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  display: none;\r\n}\r\n\r\n.slot-option .dropdown-menu{\r\n  top: 16px;\r\n  right: 8px;\r\n  top:none;\r\n  left: unset;\r\n}\r\n\r\n.slot-option .menu{\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  border-top: 40px solid #626E7E;;\r\n  border-left: 40px solid transparent;\r\n}\r\n.slot-option span{\r\n  color: #d1d5db;\r\n  position: absolute;\r\n  padding: 4px;\r\n  right:0;\r\n}\r\n\r\n.slot{\r\n  position: relative;\r\n}\r\n.slot:hover .slot-option{\r\n  display: block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/faculty/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h1 style=\"    font-family: 'Museo-500', serif;\">Time-Table</h1>\r\n  <table class=\"table table-bordered time-table-hover\">\r\n    <caption>      \r\n      <select class=\"pull-right\" [(ngModel)]=\"currentMonth\">\r\n        <option value=\"0\">Januray</option>\r\n        <option value=\"1\">February</option>\r\n        <option value=\"2\">March</option>\r\n        <option value=\"3\">April</option>\r\n        <option value=\"4\">May</option>\r\n        <option value=\"5\">June</option>\r\n        <option value=\"6\">July</option>\r\n        <option value=\"7\">August</option>\r\n        <option value=\"8\">September</option>\r\n        <option value=\"9\">October</option>\r\n        <option value=\"10\">November</option>\r\n        <option value=\"11\">December</option>\r\n      </select>\r\n      <select class=\"pull-right\" [(ngModel)]=\"currentWeek\">\r\n        <option value=\"0\">1st week</option>\r\n        <option value=\"1\">2nd week</option>\r\n        <option value=\"2\">3rd week</option>\r\n        <option value=\"3\">4th week</option>\r\n        <option value=\"4\">5th week</option>\r\n      </select>\r\n    </caption>\r\n    <thead>\r\n      <tr>\r\n        <th></th>\r\n        <th *ngFor=\"let time of timeSlots;let t=index;\">\r\n          <span class=\"time-slot\">{{time.time}}</span>\r\n          <span class=\"period\">{{time.period}}</span>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let slot of slots;let i = index;\">\r\n        <td class=\"day\" ><span>{{days[i]}}</span></td>\r\n        <ng-container *ngFor=\"let st of slot;let j=index;\">\r\n        <td class=\"slot\"  *ngIf=\"st.course\">\r\n          <p *ngIf=\"st.course\"><label>Caurse :</label>{{st.course}}</p>\r\n          <p *ngIf=\"st.speciality\"><label>Speciality :</label>{{st.speciality}}</p>\r\n          <p *ngIf=\"st.paper\"><label>Paper :</label>{{st.paper}}</p>\r\n          <p *ngIf=\"st.standard\"><label>Standard :</label>{{st.standard}}</p>\r\n          <p *ngIf=\"st.room\"><label>Room :</label>{{st.room}}</p>\r\n          <div class=\"dropdown slot-option\">\r\n            <div class=\"menu\" >\r\n              \r\n            </div>\r\n            <span class=\"glyphicon glyphicon-option-vertical dropdown-toggle\" data-toggle=\"dropdown\" ></span>\r\n            <ul class=\"dropdown-menu\">\r\n              <li><a href=\"#\">Details</a></li>\r\n              <li><a data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"editTimeTable(i,j,st)\">Edit</a></li>\r\n              <li><a [routerLink]=\"['/faculty/attendance']\" >Attendance</a></li>\r\n              <li><a [routerLink]=\"['/faculty/assignment']\">Assignments</a></li>\r\n              <li><a [routerLink]=\"['/faculty/assignment']\">Assessments</a></li>\r\n            </ul>\r\n          </div>\r\n        </td>\r\n        <td *ngIf=\"!st.course\" style=\"text-align:center;vertical-align:middle;\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"editTimeTable(i,j,null)\">Empty</td>\r\n        </ng-container>\r\n        <!-- <ng-container *ngIf=\"!slot.length\">\r\n          <td *ngFor=\"let time of timeSlots;let t=index;\" style=\"text-align:center;vertical-align:middle;\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"editTimeTable(i,t,null)\">Empty</td>\r\n        </ng-container> -->\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <form class=\"form-horizontal\" [formGroup]=\"timeTableForm\" (submit)=\"assignSlot()\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">\r\n          <!-- {{timeTableForm.value['slot'].course}} {{timeTableForm.value['slot'].speciality}}  -->\r\n          Time-Slot({{timeTableForm.value['time'].time}} {{timeTableForm.value['time'].period}})\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-body\" formGroupName=\"slot\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label col-sm-3\" style=\"text-align:left\">Course : </label>\r\n          <div class=\"col-sm-9\">\r\n            <select class=\"form-control\" formControlName=\"course\">\r\n                <option *ngFor=\"let course of courses;let p = index;\">{{course}}</option>\r\n              </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label col-sm-3\" style=\"text-align:left\">Speciality : </label>\r\n          <div class=\"col-sm-9\">\r\n            <select class=\"form-control\" formControlName=\"speciality\">\r\n                <option *ngFor=\"let speciality of specialities;let p = index;\">{{speciality}}</option>\r\n              </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label col-sm-3\" style=\"text-align:left\">Standard : </label>\r\n          <div class=\"col-sm-9\">\r\n            <select class=\"form-control\" formControlName=\"standard\">\r\n                <option *ngFor=\"let standard of standards;let p = index;\">{{standard}}</option>\r\n              </select>\r\n          </div>\r\n        </div>\r\n            \r\n        <div class=\"form-group\">\r\n          <label class=\"control-label col-sm-3\" style=\"text-align:left\">Paper : </label>\r\n          <div class=\"col-sm-9\">\r\n            <select class=\"form-control\" formControlName=\"paper\">\r\n              <option *ngFor=\"let paper of papers;let p = index;\">{{paper}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label col-sm-3\" style=\"text-align:left\">Room : </label>\r\n          <div class=\"col-sm-9\">\r\n            <select class=\"form-control\" formControlName=\"room\">\r\n              <option *ngFor=\"let room of rooms;let p = index;\">{{room}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"timeTableForm.controls['slot'].invalid\">Submit</button>\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/faculty/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(fb) {
        var _this = this;
        this.fb = fb;
        this.timeSlots = [{ time: '8:40', period: 'A.M' }, { time: '9:35', period: 'A.M' }, { time: '10:30', period: 'A.M' }, { time: '11:25', period: 'A.M' }, { time: '12:20', period: 'P.M' }, { time: '1:15', period: 'P.M' }, { time: '2:10', period: 'P.M' }, { time: '3:05', period: 'P.M' }, { time: '4:00', period: 'P.M' }];
        this.days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.fullDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.slots = [[
                {
                    course: 'B.A.',
                    speciality: 'ENGLISH',
                    paper: 'British Literature: The Early 20th Century',
                    standard: '1st SEM',
                    room: '201'
                },
                {
                    course: 'B.A.',
                    speciality: 'ENGLISH',
                    paper: 'Indian Classical Literature',
                    standard: '2nd SEM',
                    room: '202'
                },
                {
                    course: 'B.A.',
                    speciality: 'English',
                    paper: 'Modern European Drama',
                    standard: '3rd SEM',
                    room: '203'
                },
                {
                    course: 'B.A.',
                    speciality: 'ENGLISH',
                    paper: 'Postcolonial Literatures',
                    standard: '4th SEM',
                    room: '204'
                },
                {
                    course: 'B.A.',
                    speciality: 'English',
                    paper: 'Modern Indian Writing in English Translation',
                    standard: '5th SEM',
                    room: '205'
                },
                {
                    course: 'B.A.',
                    speciality: 'ENGLISH',
                    paper: 'British Literature after the 1960s',
                    standard: '1st SEM',
                    room: '201'
                },
                {
                    course: 'B.A.',
                    speciality: 'English',
                    paper: 'Nineteenth Century European Realism',
                    standard: '4th SEM',
                    room: '204'
                },
                {
                    course: 'M.A.',
                    speciality: 'English',
                    paper: 'Global Politics and the Media',
                    standard: '2nd SEM',
                    room: '304'
                },
                {
                    course: 'M.A.',
                    speciality: 'Philosophy',
                    paper: 'Greek Philosophy',
                    standard: '1st SEM',
                    room: '303'
                }
            ],
            [{
                    course: 'M.A.',
                    speciality: 'philosopy',
                    paper: ' Continental Philosophy',
                    standard: '4th SEM',
                    room: '305'
                },
                {
                    course: 'B.A.',
                    speciality: 'History',
                    paper: ' Social Formations and Cultural Patterns of the Ancient World ',
                    standard: '1st SEM',
                    room: '402'
                },
                {
                    course: 'B.Sc',
                    speciality: 'Economics',
                    paper: 'Introductory Microeconomics',
                    standard: '1st SEM',
                    room: '402'
                },
                {
                    course: 'B.Sc',
                    speciality: 'Mathematics',
                    paper: 'C 3 Real Analysis',
                    standard: '2nd SEM',
                    room: '502'
                },
                {
                    course: 'M.Sc',
                    speciality: 'Mathematics',
                    paper: 'C 6 Group Theory-I',
                    standard: '2nd SEM',
                    room: '405'
                },
                {
                    course: 'M.Sc',
                    speciality: 'Physics',
                    paper: 'Atomic Spectroscopy',
                    standard: '1st SEM',
                    room: '402'
                },
                {
                    course: 'B.Sc',
                    speciality: 'Botany',
                    paper: 'Biology-I (Introduction to Biology) ',
                    standard: '1st SEM',
                    room: '501'
                },
                {
                    course: 'B.Sc',
                    speciality: 'Zoology',
                    paper: 'Animal Physiology and Functional Histology -I ',
                    standard: '3rd SEM',
                    room: '203'
                },
                {
                    course: 'B.Sc',
                    speciality: 'Chemistry',
                    paper: 'Inorganic Chemistry- I ',
                    standard: '1st SEM',
                    room: '208'
                }],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}],
            [{}, {}, {}, {}, {}, {}, {}, {}, {}]
        ];
        this.papers = [];
        this.courses = [];
        this.standards = [];
        this.specialities = [];
        this.rooms = [];
        this.currentWeek = new Date;
        this.currentMonth = new Date().getMonth();
        this.isUpdating = false;
        this.currentWeek = this.weekAndDay();
        this.slots.forEach(function (element) {
            element.forEach(function (e) {
                _this.papers.push(e.paper);
                if (_this.courses.indexOf(e.course) === -1)
                    _this.courses.push(e.course);
                if (_this.standards.indexOf(e.standard) === -1)
                    _this.standards.push(e.standard);
                if (_this.specialities.indexOf(e.speciality) === -1)
                    _this.specialities.push(e.speciality);
                if (_this.rooms.indexOf(e.room) === -1)
                    _this.rooms.push(e.room);
            });
        });
        this.timeTableForm = fb.group({
            day: [''],
            time: [''],
            slot: this.fb.group({
                course: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                speciality: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                paper: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                standard: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
                room: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
            })
        });
    }
    HomeComponent.prototype.editTimeTable = function (day, time, slot) {
        console.log("day = " + this.days[day], this.timeSlots[time], slot);
        this.timeTableForm.controls["day"].patchValue(this.days[day]);
        this.timeTableForm.controls["time"].patchValue(this.timeSlots[time]);
        if (slot) {
            this.isUpdating = true;
            this.timeTableForm.controls["slot"].patchValue(slot);
        }
        else
            this.isUpdating = false;
    };
    HomeComponent.prototype.assignSlot = function () {
        console.log(this.timeTableForm.value);
        this.slots[this.days.indexOf(this.timeTableForm.controls['day'].value)][this.timeSlots.indexOf(this.timeTableForm.controls['time'].value)] = this.timeTableForm.value['slot'];
        $('#myModal').modal('hide');
        console.log(this.slots);
    };
    HomeComponent.prototype.weekAndDay = function () {
        var date = new Date, days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'], prefixes = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
        return prefixes.indexOf(prefixes[0 | date.getDate() / 7]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/pages/faculty/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/faculty/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/faculty/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/pages/faculty/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
                }
            ])
        ],
    }),
    __metadata("design:paramtypes", [])
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map