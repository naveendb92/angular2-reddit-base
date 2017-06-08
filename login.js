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
    var LoginModule, RedditAppModule;
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
            /*@Component({
                selector: 'todolist',
                template:`
                    <h1> TO do list </h1>
                `
            })
            class TodoListModule{
                constructor(){
                    console.log("yes");
                }
            }*/
            LoginModule = (function () {
                function LoginModule() {
                }
                //private router: Router;
                LoginModule.prototype.callTodoList = function (title, link) {
                    console.log("Adding article title: " + title.value + " and link: " + link.value + " ");
                    window.location.href = 'todolist.html';
                    //this.router.navigate(['todolist']);
                    return false;
                };
                LoginModule = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        host: {
                            class: 'middle'
                        },
                        template: "\n        <form class=\"ui large form segment\">\n            <h3 class=\"ui header center underline\"> <span class=\"login_align_center\">LOGIN</span> </h3>\n\n            <div class=\"field\">\n                <label for=\"title\">Username:</label>\n                <input name=\"title\" #username>\n            </div>\n\n            <div class=\"field\">\n                <label for=\"link\">Password:</label>\n                <input type=\"password\" name=\"link\" #userpwd>\n            </div>\n\n            <button (click) = \"callTodoList(username, userpwd)\" class=\"ui positive right floated button\">Submit</button>\n\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoginModule);
                return LoginModule;
            }());
            RedditAppModule = (function () {
                function RedditAppModule() {
                }
                RedditAppModule = __decorate([
                    core_1.NgModule({
                        declarations: [LoginModule],
                        imports: [platform_browser_1.BrowserModule],
                        bootstrap: [LoginModule]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditAppModule);
                return RedditAppModule;
            }());
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(RedditAppModule);
        }
    }
});
// your code goes here
//# sourceMappingURL=login.js.map