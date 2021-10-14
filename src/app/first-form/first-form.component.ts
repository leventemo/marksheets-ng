import { Component, OnInit } from '@angular/core';
import { Hero } from '../_helpers/hero';
import { LanguageTestModelList } from '../_helpers/templates';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent {
  languageTestModelList = LanguageTestModelList.map(x => x.testName);;

  model = new Hero(0, '', 'hello', new Date(), null);

  submitted = false;

  onSubmit() { this.submitted = true; }


  newHero() {
    this.model = new Hero(0, '', '', new Date(), null);
  }

  skyDog(): Hero {
    this.model = new Hero(0, '', '', new Date(), null);
    return this.model;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////

  
}
