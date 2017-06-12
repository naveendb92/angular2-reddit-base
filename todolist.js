System.register(['@angular/core', '@angular/platform-browser', "@angular/platform-browser-dynamic"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, platform_browser_dynamic_1;
    var ToggleComponent, LogOutModule, ContactInfo, AddListModule, TaskListComponent, RedditAppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            ToggleComponent = (function () {
                function ToggleComponent() {
                    this.shouldToggle = false;
                }
                return ToggleComponent;
            }());
            exports_1("ToggleComponent", ToggleComponent);
            LogOutModule = (function () {
                function LogOutModule() {
                }
                LogOutModule.prototype.logout = function () {
                    if (confirm('Are yu sure you want to logout ?')) {
                        //sessionStorage.clear();
                        sessionStorage.removeItem('username');
                        sessionStorage.removeItem('userpwd');
                        window.location.href = "index.html";
                    }
                };
                LogOutModule = __decorate([
                    core_1.Component({
                        selector: 'logout',
                        template: "\n       <button (click) = \"logout()\" class=\"ui negative right floated button logout \"> Log out </button> \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogOutModule);
                return LogOutModule;
            }());
            ContactInfo = (function () {
                function ContactInfo(description, done) {
                    this.description = description;
                    this.done = done;
                }
                return ContactInfo;
            }());
            AddListModule = (function () {
                function AddListModule() {
                    this.information = [];
                    var data = JSON.parse(sessionStorage.getItem('list_of_taks'));
                    if (sessionStorage.getItem('list_of_taks')) {
                        for (var i in data) {
                            this.information.push(new ContactInfo(data[i].description, data[i].done));
                        }
                    }
                }
                AddListModule.prototype.add = function (newInfo) {
                    if (newInfo) {
                        this.information.unshift(new ContactInfo(newInfo, 'false'));
                        sessionStorage.setItem('list_of_taks', JSON.stringify(this.information));
                    }
                    return false;
                };
                AddListModule.prototype.remove = function (index) {
                    if (confirm('Are you sure you want to delete the Task?')) {
                        this.information.splice(index, 1);
                        sessionStorage.setItem('list_of_taks', JSON.stringify(this.information));
                    }
                };
                AddListModule.prototype.setUppercaseName = function (value) {
                    console.log(value);
                };
                AddListModule.prototype.toggleHighlight_new = function (value, index) {
                    console.log(value.className);
                    if (value.className == "done-false") {
                        value.className = "done-true";
                        this.information.push(new ContactInfo(this.information[index].description, 'true'));
                        this.information.splice(index, 1);
                        sessionStorage.setItem('list_of_taks', JSON.stringify(this.information));
                        console.log(sessionStorage.getItem('list_of_taks'));
                    }
                    else {
                        value.className = "done-false";
                        var value_name = this.information[index].description;
                        this.information.splice(index, 1);
                        this.information.unshift(new ContactInfo(value_name, 'false'));
                        sessionStorage.setItem('list_of_taks', JSON.stringify(this.information));
                        console.log(sessionStorage.getItem('list_of_taks'));
                    }
                };
                AddListModule = __decorate([
                    core_1.Component({
                        selector: 'add',
                        template: "\n        <input #newInfo (blur)=\"add(newInfo.value); newInfo.value='' \" class=\"enter_list\" placeholder=\"Enter task...\" (keyup.enter)=\"newInfo.value=''\">\n        <button (click) = \"add(newInfo.value)\" class=\"ui positive floated button add_button add_middle\"> Add </button>\n        <ul>\n            <li *ngFor=\"let info of information; let index = index\" class=\"list_style\" >\n                \n                <label class=\"pointer\" (click)=\"toggleHighlight_new(check,index);\">\n                    <input type=\"checkbox\">\n                    <span #check class=\"done-{{ info.done }}\" id=\"{{info.description}}\"> {{info.description}} </span>\n                </label>  \n                <i class=\"material-icons icon_left\" (click)=\"remove(index)\">cancel</i>\n            </li>\n        </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AddListModule);
                return AddListModule;
            }());
            TaskListComponent = (function () {
                function TaskListComponent() {
                }
                TaskListComponent.prototype.add = function () {
                    this.votes += 1;
                    return false;
                };
                TaskListComponent = __decorate([
                    core_1.Component({
                        selector: 'tasklist',
                        template: "\n        <ul class=\"unstyled\">\n            <li ng-repeat=\"\">\n            <label class=\"checkbox\">\n                <input type=\"checkbox\" ng-model=\"\">\n                <span class=\" \"> </span>\n            </label>\n            </li>\n        </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskListComponent);
                return TaskListComponent;
            }());
            RedditAppModule = (function () {
                function RedditAppModule() {
                }
                RedditAppModule = __decorate([
                    core_1.NgModule({
                        declarations: [LogOutModule, AddListModule],
                        imports: [platform_browser_1.BrowserModule],
                        bootstrap: [LogOutModule, AddListModule]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditAppModule);
                return RedditAppModule;
            }());
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(RedditAppModule);
        }
    }
});
//# sourceMappingURL=todolist.js.map