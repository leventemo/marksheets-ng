import { Component, OnInit } from '@angular/core';
import { Utils } from '../_helpers/utils';
import { LanguageTestModelList } from '../_helpers/templates';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languageTestModelList = LanguageTestModelList;

  constructor() { }

  ngOnInit(): void {
    console.log(LanguageTestModelList);
  }

}
