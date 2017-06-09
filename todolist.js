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
                    this.information = [
                        new ContactInfo('Task 1', 'false'),
                        new ContactInfo('Task 2', 'false')
                    ];
                }
                AddListModule.prototype.add = function (newInfo) {
                    if (newInfo) {
                        this.information.unshift(new ContactInfo(newInfo, 'false'));
                    }
                    return false;
                };
                AddListModule.prototype.remove = function (index) {
                    if (confirm('Are you sure you want to delete the Task?')) {
                        this.information.splice(index, 1);
                    }
                };
                AddListModule.prototype.toggleHighlight_new = function (value, index) {
                    console.log(value.toElement.className);
                    if (value.toElement.className == "done-false") {
                        value.toElement.className = "done-true";
                        this.information.push(new ContactInfo(this.information[index].description, 'true'));
                        this.information.splice(index, 1);
                    }
                    else {
                        value.toElement.className = "done-false";
                    }
                };
                AddListModule.prototype.toggleHighlight = function (value, index) {
                    // console.log(value.toElement.id);
                    for (var key in this.information) {
                        if (this.information[key].description == value.toElement.id) {
                            //console.log("1");
                            //console.log(this.information[key].done); 
                            this.information.push(new ContactInfo(this.information[key].description, 'true'));
                            if (this.information[index].done == 'true') {
                                console.log(index);
                                this.information[key].done = 'false';
                            }
                        }
                    }
                    if (this.information[index].done == 'false') {
                        //console.log("if");
                        this.information[index].done = 'true';
                    }
                    else {
                        console.log(index);
                        this.information[index].done = 'true';
                    }
                    this.information.splice(index, 1);
                };
                AddListModule = __decorate([
                    core_1.Component({
                        selector: 'add',
                        template: "\n        <input #newInfo (keyup.enter)=\"add(newInfo.value)\" (blur)=\"add(newInfo.value); newInfo.value='' \" class=\"enter_list\">\n        <button (click) = \"add(newInfo.value)\" class=\"ui positive floated button add_button add_middle\"> Add </button>\n        <ul>\n            <li *ngFor=\"let info of information; let index = index\">\n                <pre> <label class=\"pointer\" ><input type=\"checkbox\" class=\"checkbox_align_center\" ><span (click)=\"toggleHighlight_new($event,index);\" class=\"done-{{ info.done }}\" id=\"{{info.description}}\"> {{info.description}} </span></label>  <i class=\"material-icons icon_left\" (click)=\"remove(index)\">cancel</i></pre>\n            </li>\n        </ul>\n    "
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