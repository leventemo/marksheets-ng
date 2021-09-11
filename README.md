# MarksheetsNg

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
- [ ] set up navbar toggle
- [ ] separate home (hero img svg?) & form components
- [ ] typography

ANGULAR
- [x] set up `languageTestModel`
- [ ] feed options from `languageTestModel` into dropdown

# ANGULAR-GENERATED INFO

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

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

## [Bootstrap4 widgets](https://ng-bootstrap.github.io/#/home)
