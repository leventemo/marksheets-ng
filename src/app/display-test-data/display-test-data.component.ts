import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-test-data',
  templateUrl: './display-test-data.component.html',
  styleUrls: ['./display-test-data.component.css']
})
export class DisplayTestDataComponent implements OnInit {

  testData = {};

  constructor() {

  }

  ngOnInit(): {} {
    const testString: any = localStorage.getItem('testData');

    this.testData = JSON.parse(testString);

    console.log(this.testData);

    return this.testData;
  }

}
