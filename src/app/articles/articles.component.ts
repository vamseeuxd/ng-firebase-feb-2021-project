import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  userName ="test";
  items: any = [
    {
      title: "String Interpolation",
      description: "The type of one-way data binding where text is between a set of curly braces often uses the name of a component property.",
      code: "{{ code }}"
    },
    {
      title: "Property Binding:",
      description: "Property binding in simple term is defined as updating the value of a certain variable in component (model) and displaying it in view (presentation layer)",
      code: '<img [src]="imagePath" class="image-adjustment"/>'
    },
    {
      title: "Event Binding:",
      description: "Event binding is defined as the updating/sending of the value/information of a certain variable from the presentation layer (view) to the component (model)",
      code: '<button (click)="changeMyTitle()">Title is changed on click of this button.</button> changeMyTitle() { this.title = "Learning Event Binding";}'
    },
    {
      title: "Two-Way Data Binding:",
      description: "Two-way data binding is a combination of both Property and Event binding and it is a continuous synchronization of a data from view to the component and component to the view",
      code: '<input type = "text" [(ngModel)]="userName"/><br><h4>Welcome: {{userName}}</h4>'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
