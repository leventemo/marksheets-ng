import { Component, OnInit } from '@angular/core';
import { LanguageTestModel, TestPaper } from '../_helpers/templates';

interface TestData {
  id: number,
  name: string,
  group: string,
  date: Date,
  test: string
}

@Component({
  selector: 'app-display-test-data',
  templateUrl: './display-test-data.component.html',
  styleUrls: ['./display-test-data.component.css']
})
export class DisplayTestDataComponent implements OnInit {

  testData: TestData;
  languageTestModel = LanguageTestModel;
  currentTestStructure: TestPaper;
  makeString = JSON.stringify;
  consolePrivate = console.log;

  constructor() {

    const testString: any = localStorage.getItem('testData');

    this.testData = JSON.parse(testString);

    console.log(this.testData)

    this.currentTestStructure = this.languageTestModel[this.testData.test];
  }

  ngOnInit(): any {

  }

}
