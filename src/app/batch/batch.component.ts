import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {

  BatchName = '';
  BatchTime = '';
  studentFirstName = '';
  studentLastName = '';


  constructor() { }

  ngOnInit(): void {
  }

}
