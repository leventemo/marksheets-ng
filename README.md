# MarksheetNew

this is work in progress

## ABOUT

* Marksheets is a tool to make marking tests and mock exams for the Cambridge Exam Suite faster and more efficient.
* faster:
  + it makes the marking process as easy as clicking away on buttons
  + calculates partial and total results for individual candidates
* more efficient:
  + it calculates and displays stats on a group level such as:
    - "the most often failed questions and parts"
    - average results for candidates and groups
    - identical incorrect answers
  + it then generates a pdf version of the marked test

## USER STORIES

* teacher fills in a form:
  + student's name, class, date, exam, etc.
  + chooses template for exam type and test type, such as "B2 First Listening" or "C2 Proficiency Reading and Use of English"
* gets UI for marking: user does the marking by clicking buttons for each question
  + btns for 0,1,2 points displayed based on chosen template: qn numbers arranged into parts
  + realtime update on scores in header:
    - scores and percentages for each part
    - scores and percentages for partial marks where necessary (eg. RD and Use of English)
    - score and percentage for total
* script calculates and displays scores and percentages for group stats:
  + sorted list of most often failed questions
  + sorted list of most often failed parts
  + sorted list of identical incorrect answer + names of students
  + group results sorted: for parts + total
  + group average: for parts + total
* user saves results
* user exports marksheets as pdf

NOTE:
ran `npm install --save --legacy-peer-deps` a la <https://stackoverflow.com/questions/66989383/could-not-resolve-dependency-npm-err-peer-angular-compiler11-2-8/66990138#66990138> answer 56

## TODO

HTML-CSS
- [x] create navbar & footer components
- [x] logo in navbar
- [x] about page content
- [x] form styling
- [x] favicon
- [x] display current in year in footer
- [x] footer styling
- [ ] delete svg icons for socials
- [x] set up navbar toggle
- [x] display languageTestModelList in home component
- [ ] feed languageTestModelList into "Test" dropdown
- [ ] separate home (hero img svg?) & form components?
- [ ] typography

<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="#000" transform="translate(-400.000000, -361.000000)"><path d="M400,409 L448,409 L448,361 L400,361 L400,409 Z M441.390625,402.565422 L434.236141,402.565422 L434.236141,399.759719 C432.038406,401.910766 429.793797,402.705719 426.801063,402.705719 C423.761547,402.705719 421.142875,401.723734 418.945047,399.759719 C416.045781,397.187875 414.549484,393.821031 414.549484,389.893047 C414.549484,386.292344 415.952406,383.065844 418.570984,380.540687 C420.909109,378.249391 423.761547,377.080375 426.941359,377.080375 C429.980875,377.080375 432.318953,378.109094 434.002375,380.260094 L434.002375,369.317875 L441.390625,367.787031 L441.390625,402.565422 Z M428.157203,383.626984 C424.650016,383.626984 421.937875,386.479422 421.937875,389.846266 C421.937875,393.353453 424.650016,396.018813 428.43775,396.018813 C431.617563,396.018813 434.282922,393.400188 434.282922,389.939781 C434.282922,386.339172 431.617563,383.626984 428.157203,383.626984 Z"/></g></g></svg>

## ANGULAR_GENERATED STUFF:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
