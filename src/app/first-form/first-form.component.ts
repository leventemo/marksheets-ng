import { Component, OnInit } from '@angular/core';
import { Hero } from '../_helpers/hero';
import { LanguageTestModel, TestPaper } from '../_helpers/templates';
import { FormControl } from '@angular/forms';
import { TestComponentRenderer } from '@angular/core/testing';

@Component({
  selector: 'first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent {
  currentTestStructure: TestPaper = { testName: '', totalScore: null, testStructure: [] };
  objectKeys = Object.keys;
  languageTestModel = LanguageTestModel;

  makeString = JSON.stringify;

  model = new Hero(0, '', '', new Date(), null);

  submitted = false;

  onSubmit() {
    this.submitted = true;

    this.currentTestStructure = this.languageTestModel[this.model.test || ''];

    /* this.currentTestStructure.testStructure; */
  }


  /*   newHero() {
      this.model = new Hero(0, '', '', new Date(), null);
    }

    skyDog(): Hero {
      this.model = new Hero(0, '', '', new Date(), null);
      return this.model;
    } */

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
      form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////


}
