import { Utils } from './utils';

export interface Question {
  questionNumber: number,
  value: number,
  score: number | null
}

// TODO: refactor generateQnsArray() + zeroOne, zeroOneTwo, zeroTwo
class TestStructureItem {
  public partNumber: number;
  public taskType: string;
  public partScore: null | number;
  public questions: Array<Question>;
  public firstQnNo: number;
  public lastQnNo: number;
  public value: number;

  constructor(partNumber: number, taskType: string, firstQnNo: number, lastQnNo: number, value: number) {
    this.partNumber = partNumber;
    this.taskType = taskType;
    this.partScore = null;
    this.questions = Utils.generateQnsArray(firstQnNo, lastQnNo, value);
    this.firstQnNo = firstQnNo;
    this.lastQnNo = lastQnNo;
    this.value = value;
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
    new TestStructureItem(1, 'Three-option multiple choice', 1, 5, 1),
    new TestStructureItem(2, 'Matching', 6, 10, 1),
    new TestStructureItem(3, 'Four-option multiple choice', 11, 15, 1),
    new TestStructureItem(4, 'Gapped text', 16, 20, 1),
    new TestStructureItem(5, 'Four-option multiple-choice cloze', 21, 26, 1),
    new TestStructureItem(6, 'Open cloze', 27, 32, 1),
  ]
}

const b1Listening = {
  testName: 'B1 Preliminary – Listening',
  totalScore: null,
  testStructure: [
    new TestStructureItem(1, 'Three-option multiple choice', 1, 7, 1),
    new TestStructureItem(2, 'Three-option multiple choice', 8, 13, 1),
    new TestStructureItem(3, 'Gap fill', 14, 19, 1),
    new TestStructureItem(4, 'Three-option multiple choice', 20, 25, 1),
  ]
};

// FCE
const b2ReadingAndUse = {
  testName: 'B2 First – Reading and Use of English',
  totalScore: null,
  testStructure: [
    new TestStructureItem(1, 'Multiple-choice cloze', 1, 8, 1),
    new TestStructureItem(2, 'Open cloze', 9, 16, 1),
    new TestStructureItem(3, 'Word formation', 17, 24, 1),
    new TestStructureItem(4, 'Key word transformation', 25, 30, 2),
    new TestStructureItem(5, 'Multiple choice', 31, 36, 2),
    new TestStructureItem(6, 'Gapped text', 37, 42, 2),
    new TestStructureItem(7, 'Multiple matching', 43, 52, 1),
  ]
}

const b2Listening = {
  testName: 'B2 First – Listening',
  totalScore: null,
  testStructure: [
    new TestStructureItem(1, 'Multiple choice', 1, 8, 1),
    new TestStructureItem(2, 'Sentence completion', 9, 18, 1),
    new TestStructureItem(3, 'Multiple matching', 19, 23, 1),
    new TestStructureItem(4, 'Multiple choice', 24, 30, 1),
  ]
}

// CAE
const c1ReadingAndUse = {
  testName: 'C1 Advanced – Reading and Use of English',
  totalScore: null,
  testStructure: [
    new TestStructureItem(1, 'Multiple-choice cloze', 1, 8, 1),
    new TestStructureItem(2, 'Open cloze', 9, 16, 1),
    new TestStructureItem(3, 'Word formation', 17, 24, 1),
    new TestStructureItem(4, 'Key word transformation', 25, 30, 2),
    new TestStructureItem(5, 'Multiple choice', 31, 36, 2),
    new TestStructureItem(6, 'Cross-text multiple matching', 37, 40, 2),
    new TestStructureItem(7, 'Gapped text', 41, 46, 2),
    new TestStructureItem(8, 'Multiple matching', 47, 56, 1),
  ]
}

const c1Listening = {
  testName: 'C1 Advanced – Listening',
  totalScore: null,
  testStructure: [
    new TestStructureItem(1, 'Multiple choice', 1, 6, 1),
    new TestStructureItem(2, 'Sentence completion', 7, 14, 1),
    new TestStructureItem(3, 'Multiple choice', 15, 20, 1),
    new TestStructureItem(4, 'Multiple matching', 21, 30, 1),
  ]
}

// CPE
const c2ReadingAndUse = {
  testName: 'C2 Proficiency – Reading and Use of English',
  totalScore: null,
  testStructure: [
    new TestStructureItem(1, 'Multiple-choice cloze', 1, 8, 1),
    new TestStructureItem(2, 'Open cloze', 9, 16, 1),
    new TestStructureItem(3, 'Word formation', 17, 24, 1),
    new TestStructureItem(4, 'Key word transformation', 25, 30, 2),
    new TestStructureItem(5, 'Multiple choice', 31, 36, 2),
    new TestStructureItem(6, 'Gapped text', 37, 43, 2),
    new TestStructureItem(7, 'Multiple matching', 44, 53, 1),
  ]
}

const c2Listening = {
  testName: 'C2 Proficiency – Listening',
  totalScore: null,
  testStructure: [
    new TestStructureItem(1, 'Three-option multiple choice', 1, 6, 1),
    new TestStructureItem(2, 'Sentence completion', 7, 15, 1),
    new TestStructureItem(3, 'Four-option multiple choice', 16, 20, 1),
    new TestStructureItem(4, 'Multiple matching', 21, 30, 1),
  ]
}

export const LanguageTestModel: { [name: string]: TestPaper } = { b1Reading: b1Reading, b1Listening: b1Listening, b2ReadingAndUse: b2ReadingAndUse, b2Listening: b2Listening, c1ReadingAndUse: c1ReadingAndUse, c1Listening: c1Listening, c2ReadingAndUse: c2ReadingAndUse, c2Listening: c2Listening };

/* export const LanguageTestModelList = [b1Reading, b1Listening, b2ReadingAndUse, b2Listening, c1ReadingAndUse, c1Listening, c2ReadingAndUse, c2Listening]; */
