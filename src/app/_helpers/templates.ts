import { Utils } from './utils';

export interface Question {
  questionNumber: number,
  value: number,
  score: number | null
}

class TestStructureItem {
  public partNumber: number;
  public taskType: string;
  public partScore: null | number;
  public questions: Array<Question>;

  constructor(partNumber: number, taskType: string, questions: Array<Question>) {
    this.partNumber = partNumber;
    this.taskType = taskType;
    this.partScore = null;
    this.questions = questions;
  }
}

export interface TestPaper {
  testName: string;
  totalScore: null | number;
  testStructure: TestStructureItem[];
}

// PET
const b1Reading = {
  testName: 'B1 Preliminary – Reading',
  totalScore: null,
  testStructure: [
    new TestStructureItem(1, 'Three-option multiple choice', Utils.generateQnsArray(1, 5, 1)),
    new TestStructureItem(2, 'Matching', Utils.generateQnsArray(6, 10, 1)),
    new TestStructureItem(3, 'Four-option multiple choice', Utils.generateQnsArray(11, 15, 1)),
    new TestStructureItem(4, 'Gapped text', Utils.generateQnsArray(16, 20, 1)),
    new TestStructureItem(5, 'Four-option multiple-choice cloze', Utils.generateQnsArray(21, 26, 1)),
    new TestStructureItem(6, 'Open cloze', Utils.generateQnsArray(27, 32, 1)),
  ]
}

const b1Listening = {
  testName: 'B1 Preliminary – Listening',
  totalScore: null,
  testStructure: [
    new TestStructureItem(1, 'Three-option multiple choice', Utils.generateQnsArray(1, 7, 1)),
    new TestStructureItem(2, 'Three-option multiple choice', Utils.generateQnsArray(8, 13, 1)),
    new TestStructureItem(3, 'Gap fill', Utils.generateQnsArray(14, 19, 1)),
    new TestStructureItem(4, 'Three-option multiple choice', Utils.generateQnsArray(20, 25, 1)),
  ]
};

// FCE
const b2ReadingAndUse = {
  testName: 'B2 First – Reading and Use of English',
  totalScore: null,
  testStructure: [
    new TestStructureItem(1, 'Multiple-choice cloze', Utils.generateQnsArray(1, 8, 1)),
    new TestStructureItem(2, 'Open cloze', Utils.generateQnsArray(9, 16, 1)),
    new TestStructureItem(3, 'Word formation', Utils.generateQnsArray(17, 24, 1)),
    new TestStructureItem(4, 'Key word transformation', Utils.generateQnsArray(25, 30, 2)),
    new TestStructureItem(5, 'Multiple choice', Utils.generateQnsArray(31, 36, 2)),
    new TestStructureItem(6, 'Gapped text', Utils.generateQnsArray(37, 42, 2)),
    new TestStructureItem(7, 'Multiple matching', Utils.generateQnsArray(43, 52, 1)),
  ]
}

const b2Listening = {
  testName: 'B2 First – Listening',
  totalScore: null,
  testStructure: [
    new TestStructureItem(1, 'Multiple choice', Utils.generateQnsArray(1, 8, 1)),
    new TestStructureItem(2, 'Sentence completion', Utils.generateQnsArray(9, 18, 1)),
    new TestStructureItem(3, 'Multiple matching', Utils.generateQnsArray(19, 23, 1)),
    new TestStructureItem(4, 'Multiple choice', Utils.generateQnsArray(24, 30, 1)),
  ]
}

// CAE
const c1ReadingAndUse = {
  testName: 'C1 Advanced – Reading and Use of English',
  totalScore: null,
  testStructure: [
    new TestStructureItem(1, 'Multiple-choice cloze', Utils.generateQnsArray(1, 8, 1)),
    new TestStructureItem(2, 'Open cloze', Utils.generateQnsArray(9, 16, 1)),
    new TestStructureItem(3, 'Word formation', Utils.generateQnsArray(17, 24, 1)),
    new TestStructureItem(4, 'Key word transformation', Utils.generateQnsArray(25, 30, 2)),
    new TestStructureItem(5, 'Multiple choice', Utils.generateQnsArray(31, 36, 2)),
    new TestStructureItem(6, 'Cross-text multiple matching', Utils.generateQnsArray(37, 40, 2)),
    new TestStructureItem(7, 'Gapped text', Utils.generateQnsArray(41, 46, 2)),
    new TestStructureItem(8, 'Multiple matching', Utils.generateQnsArray(47, 56, 1)),
  ]
}

const c1Listening = {
  testName: 'C1 Advanced – Listening',
  totalScore: null,
  testStructure: [
    new TestStructureItem(1, 'Multiple choice', Utils.generateQnsArray(1, 6, 1)),
    new TestStructureItem(2, 'Sentence completion', Utils.generateQnsArray(7, 14, 1)),
    new TestStructureItem(3, 'Multiple choice', Utils.generateQnsArray(15, 20, 1)),
    new TestStructureItem(4, 'Multiple matching', Utils.generateQnsArray(21, 30, 1)),
  ]
}

// CPE
const c2ReadingAndUse = {
  testName: 'C2 Proficiency – Reading and Use of English',
  totalScore: null,
  testStructure: [
    new TestStructureItem(1, 'Multiple-choice cloze', Utils.generateQnsArray(1, 8, 1)),
    new TestStructureItem(2, 'Open cloze', Utils.generateQnsArray(9, 16, 1)),
    new TestStructureItem(3, 'Word formation', Utils.generateQnsArray(17, 24, 1)),
    new TestStructureItem(4, 'Key word transformation', Utils.generateQnsArray(25, 30, 2)),
    new TestStructureItem(5, 'Multiple choice', Utils.generateQnsArray(31, 36, 2)),
    new TestStructureItem(6, 'Gapped text', Utils.generateQnsArray(37, 43, 2)),
    new TestStructureItem(7, 'Multiple matching', Utils.generateQnsArray(44, 53, 1)),
  ]
}

const c2Listening = {
  testName: 'C2 Proficiency – Listening',
  totalScore: null,
  testStructure: [
    new TestStructureItem(1, 'Three-option multiple choice', Utils.generateQnsArray(1, 6, 1)),
    new TestStructureItem(2, 'Sentence completion', Utils.generateQnsArray(7, 15, 1)),
    new TestStructureItem(3, 'Four-option multiple choice', Utils.generateQnsArray(16, 20, 1)),
    new TestStructureItem(4, 'Multiple matching', Utils.generateQnsArray(21, 30, 1)),
  ]
}

export const LanguageTestModel: { [name: string]: TestPaper } = { b1Reading: b1Reading, b1Listening: b1Listening, b2ReadingAndUse: b2ReadingAndUse, b2Listening: b2Listening, c1ReadingAndUse: c1ReadingAndUse, c1Listening: c1Listening, c2ReadingAndUse: c2ReadingAndUse, c2Listening: c2Listening };

/* export const LanguageTestModelList = [b1Reading, b1Listening, b2ReadingAndUse, b2Listening, c1ReadingAndUse, c1Listening, c2ReadingAndUse, c2Listening]; */
