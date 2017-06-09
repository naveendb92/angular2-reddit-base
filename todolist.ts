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
            <li *ngFor="let info of information; let index = index">
                <pre> <label class="pointer" ><input type="checkbox" class="checkbox_align_center" ><span (click)="toggleHighlight_new($event,index);" class="done-{{ info.done }}" id="{{info.description}}"> {{info.description}} </span></label>  <i class="material-icons icon_left" (click)="remove(index)">cancel</i></pre>
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
        if(newInfo){
            this.information.unshift(new ContactInfo(newInfo,'false'));
        }
        return false;
    }
    
    remove(index: number): void {
        if (confirm('Are you sure you want to delete the Task?')) {
            this.information.splice(index, 1);
        }
    }

    toggleHighlight_new(value,index: number){

        console.log(value.toElement.className);
        
        if(value.toElement.className == "done-false"){
            value.toElement.className = "done-true";
            this.information.push(new ContactInfo(this.information[index].description,'true'));
            this.information.splice(index, 1); 
        }
        else{
            value.toElement.className = "done-false";
                       
        }
       

    }

    toggleHighlight(value,index: number) {
       // console.log(value.toElement.id);
        
        
        
        for(let key in this.information){
            if(this.information[key].description == value.toElement.id){
                //console.log("1");
                //console.log(this.information[key].done); 
                this.information.push(new ContactInfo(this.information[key].description,'true'));
        
                if(this.information[index].done == 'true'){
                    console.log(index);
                    this.information[key].done = 'false';
                }
                
                //console.log(this.information[key].done);

                // if(this.information[key].done == 'false'){
                //     console.log("if");
                //     this.information[key].done = 'true';
                // }
                // else{
                //     console.log("else");
                //     this.information[key].done = 'false';

                //     if(this.information[key].done == 'false'){
                //         this.information.push(new ContactInfo(this.information[key].description,'false'));
                //         this.information.splice(index, 1);
                //     }
                // }
               
                //if(this.information[key].done == 'false'){
                    // console.log("yes");
                    // this.information.splice(index, 1);
                    // this.information.push(new ContactInfo(this.information[key].description,'false'));
              //}   
            }
            
       
        }

            
        if(this.information[index].done == 'false'){
            //console.log("if");
            this.information[index].done = 'true';
        }
        else{
            console.log(index);
            this.information[index].done = 'true';
        }

        this.information.splice(index, 1);

        
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

