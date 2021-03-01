import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() appTitle = "Bootstrap";
 @Input() gani;
 @Output() onClickLogout:EventEmitter<string> = new EventEmitter();
  constructor() { }
 
  ngOnInit(): void {
  }

 

}
