/**
 * A basic hello-world Angular 2 app 
*/
import { NgModule, Component } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"; 
import { Directive, ViewContainerRef } from '@angular/core';

export class ToggleComponent {
    shouldToggle = false;
}

@Component({
    selector:'logout',
    template:`
       <button (click) = "logout()" class="ui negative right floated button logout "> Log out </button> 
    `
})
class LogOutModule{
    logout(): void{
        if(confirm('Are yu sure you want to logout ?')){
            //sessionStorage.clear();
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('userpwd');
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
        <input #newInfo (blur)="add(newInfo.value); newInfo.value='' " class="enter_list" placeholder="Enter task..." (keyup.enter)="newInfo.value=''">
        <button (click) = "add(newInfo.value)" class="ui positive floated button add_button add_middle"> Add </button>
        <ul>
            <li *ngFor="let info of information; let index = index" class="list_style" >
                
                <label class="pointer" (click)="toggleHighlight_new(check,index);">
                    <input type="checkbox">
                    <span #check class="done-{{ info.done }}" id="{{info.description}}"> {{info.description}} </span>
                </label>  
                <i class="material-icons icon_left" (click)="remove(index)">cancel</i>
            </li>
        </ul>
    `
})
class AddListModule{
    list: string
    heroes:string[]
    cross:string
    information = [
        //new ContactInfo('Task 1','false'),
        //new ContactInfo('Task 2','false')
    ];

    constructor(){

        let data = JSON.parse(sessionStorage.getItem('list_of_taks'));

        if(sessionStorage.getItem('list_of_taks')){
            for(let i in data){
                this.information.push(new ContactInfo(data[i].description,data[i].done));
            }
        }
    }
    
    
    add(newInfo:string){
        if(newInfo){           
            this.information.unshift(new ContactInfo(newInfo,'false'));
            sessionStorage.setItem('list_of_taks',JSON.stringify(this.information));  
        }
        return false;
    }
    
    remove(index: number): void {
        if (confirm('Are you sure you want to delete the Task?')) {
            this.information.splice(index, 1);
            sessionStorage.setItem('list_of_taks',JSON.stringify(this.information));   
        }
    }

    setUppercaseName(value){
        console.log(value);
    }

    toggleHighlight_new(value,index: number){

        console.log(value.className);
        
        if(value.className == "done-false"){         //If the task is Not Completed
            value.className = "done-true";
            this.information.push(new ContactInfo(this.information[index].description,'true'));
            this.information.splice(index, 1); 
            sessionStorage.setItem('list_of_taks',JSON.stringify(this.information));   
            console.log(sessionStorage.getItem('list_of_taks'));
        }
        else{                                                  //If the task is Completed                                              
            value.className = "done-false";
            let value_name = this.information[index].description;
            this.information.splice(index, 1);
            this.information.unshift(new ContactInfo(value_name,'false'));   
            sessionStorage.setItem('list_of_taks',JSON.stringify(this.information));   
            console.log(sessionStorage.getItem('list_of_taks'));
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

