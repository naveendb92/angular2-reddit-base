/**
 * A basic hello-world Angular 2 app 
*/
import { NgModule, Component } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"; 
import { Directive, ViewContainerRef } from '@angular/core';


@Component({
    selector:'logout',
    template:`
       <button (click) = "logout()" class="ui negative right floated button logout "> Log out </button> 
    `
})
class LogOutModule{
    // logout(){
    //     alert("logout");
    //      window.location.href = 'index.html';
    //      return false;
    // }
    logout(): void{
        if(confirm('Are yu sure you want to logout ?')){
            window.location.href = "index.html";
            
        }
    }
}

class ContactInfo {
    constructor(public description:string, public done:string) {

    }
}
@Component({
    selector:'add',
    template:`
        <input #newInfo (keyup.enter)="add(newInfo.value)" (blur)="add(newInfo.value); newInfo.value='' " class="enter_list">
        <button (click) = "add(newInfo.value)" class="ui positive floated button add_button add_middle"> Add </button>
        <ul>
            <li *ngFor="let i of information; let index = index">
                <pre> <label class="pointer" (click)="toggleHighlight($event);"><input type="checkbox" class="checkbox_align_center" ng-model="done"><span class="done-{{ i.done }}" id="{{i.description}}"> {{i.description}} </span></label>  <i class="material-icons icon_left" (click)="remove(index)">cancel</i></pre>
            </li>
        </ul>
    `
})
class AddListModule{
    list: string
    heroes:string[]
    cross:string
    information = [
        new ContactInfo('Task 1','false'),
        new ContactInfo('Task 2','false')
    ];
    
    add(newInfo:string){
        console.log(this.information);
        if(newInfo){
            this.information.push(new ContactInfo(newInfo,'false'));
        }
        return false;
    }
    
    remove(index: number): void {
        if (confirm('Are you sure you want to delete the Task?')) {
            this.information.splice(index, 1);
        }
    }


    toggleHighlight(value) {
       // console.log(value.toElement.id);
        
        for(let key in this.information){
            if(this.information[key].description == value.toElement.id){
                console.log(this.information[key].done);
                if(this.information[key].done == 'false'){
                    this.information[key].done = 'true'
                }
                else{
                    this.information[key].done = 'false'
                }

                
            }
        }
        
        if(value.target.checked == true){
            console.log("if");  
            console.log()
            this.cross = "";
            this.cross = "true"; 
        }
        if(value.target.checked == false){
            console.log("else");
            this.cross = "";
             this.cross = "false"; 
        }
           
        
        
    }
   
}

@Component({
    selector:'tasklist',
    template:`
        <ul class="unstyled">
            <li ng-repeat="">
            <label class="checkbox">
                <input type="checkbox" ng-model="">
                <span class=" "> </span>
            </label>
            </li>
        </ul>
    `
})
class TaskListComponent{
    votes: number

    add(){
        this.votes +=1;
        return false;
    }
}



@NgModule({
  declarations: [LogOutModule, AddListModule],
  imports: [BrowserModule],
  bootstrap: [LogOutModule, AddListModule]
})
class RedditAppModule {}

platformBrowserDynamic().bootstrapModule(RedditAppModule);

