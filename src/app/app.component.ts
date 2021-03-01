import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-firebase-feb-project';

  studentList=[];
  cosntructor(){}

  ngOnInit(){
      this.studentList=['harish','ganesh','vamsee','phani','govind','madhu','revansh','sravan']
  }
  messageFromChild(event){
    alert(event);
  }
  
}
