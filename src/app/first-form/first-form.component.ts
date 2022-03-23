import { Component, OnInit } from '@angular/core';
import { Hero } from '../_helpers/hero';
import { LanguageTestModel, TestPaper } from '../_helpers/templates';
import { FormControl } from '@angular/forms';
import { TestComponentRenderer } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent {
  objectKeys = Object.keys;
  languageTestModel = LanguageTestModel;
  model = new Hero(0, '', '', new Date(), null);

  submitted = false;

  onSubmit() {
    this.submitted = true;

    const jsonData = JSON.stringify(this.model);
    localStorage.setItem('testData', jsonData);

    this.router.navigate(['/test']);

  }

  onAutofillBtnClick() {
    this.model = new Hero(0, 'John Doe', 'My Group Name', new Date(), 'b1Reading');
  }

  constructor(private router: Router) { }

}
