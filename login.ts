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


@Component({
    selector: 'reddit',
    host:{
        class:'middle'
    },
    template: `
        <form class="ui large form segment">
            <h3 class="ui header center underline"> <span class="login_align_center">LOGIN</span> </h3>

            <div class="field">
                <label for="title">Username:</label>
                <input name="title" #username>
            </div>

            <div class="field">
                <label for="link">Password:</label>
                <input type="password" name="link" #userpwd>
            </div>

            <button (click) = "callTodoList(username, userpwd)" class="ui positive right floated button">Submit</button>

        </form>
    `
})
class LoginModule { 
    //private router: Router;

    callTodoList(title: HTMLInputElement, link: HTMLInputElement): boolean{
        console.log(`Adding article title: ${title.value} and link: ${link.value} `);
        window.location.href = 'todolist.html';
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
