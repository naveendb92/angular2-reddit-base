/**
 * A basic hello-world Angular 2 app 
*/
import { NgModule, Component } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"; 

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

console.log(sessionStorage.getItem('username'));
console.log(sessionStorage.getItem('userpwd'));

let logged_in_name = sessionStorage.getItem('username');
let logged_in_pwd = sessionStorage.getItem('userpwd');

if(logged_in_name && logged_in_pwd){
    window.location.href = 'todolist.html';
}

@Component({
    selector: 'reddit',
    host:{
        class:'middle'
    },
    template: `
        <form class="ui large form segment" [style.display]="hideElement?'none':'block'">
            <h3 class="ui header center underline"> <span class="login_align_center">LOGIN</span> </h3>

            <div class="field">
                <label for="title">Username:</label>
                <input name="title" #username>
            </div>

            <div class="field">
                <label for="link">Password:</label>
                <input type="password" name="link" #userpwd>
            </div>

            <button (click) = "callTodoList_new(username, userpwd)" class="ui positive right floated button">Submit</button>

        </form>
    `
})
class LoginModule { 
    //private router: Router;
    public hideElement = false;
    constructor(){
        
        console.log("on load");
        console.log(sessionStorage.getItem('username'));
        //window.location.href = 'todolist.html';
    }

    callTodoList_new(name,pwd){
        let uname = name.value;
        let upwd = pwd.value;
        sessionStorage.setItem('username',uname);
        sessionStorage.setItem('userpwd',upwd);
        //console.log(sessionStorage.getItem('username'));
        if(uname && upwd){
            window.location.href = 'todolist.html';
        }
        return false;
    }

    callTodoList(title: HTMLInputElement, link: HTMLInputElement): boolean{
        console.log(`Adding article title: ${title.value} and link: ${link.value} `);
        //sessionStorage.setItem('username',)
        //window.location.href = 'todolist.html';
        //this.router.navigate(['todolist']);
        return false;
    }
}

@NgModule({
  declarations: [LoginModule],
  imports: [BrowserModule],
  bootstrap: [LoginModule]
})
class RedditAppModule {}

platformBrowserDynamic().bootstrapModule(RedditAppModule);

// your code goes here
