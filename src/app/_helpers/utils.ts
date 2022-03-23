import { Question } from './templates'

export class Utils {
  /*   static toggleClass(classToToggle, elements) {
      elements.forEach(item => {
        item.classList.toggle(classToToggle);
      });
    } */

  static mergeObjects(objOne: object, objTwo: object): object {
    const merged = { ...objOne, ...objTwo };

    return merged;
  };

  /*   static getPreviousElementSibling(elem, selector) {
      let prevSibling = elem.previousElementSibling;
      while (prevSibling) {
        if (prevSibling.matches(selector)) return prevSibling;
        prevSibling = prevSibling.previousElementSibling;
      }
    } */

  /*   static calcPercentage(number1, number2) {
      let res = (number1 / number2 * 100).toFixed(2);
      if (res === '0.00') {
        res = '0';
      }
      return res;
    } */

  static generateQnsArray(firstQnNo: number, lastQnNo: number, value: number): Array<Question> {
    const questions = [];
    const diff = lastQnNo - firstQnNo;

    for (let i = 0; i <= diff; i++) {
      questions.push({
        questionNumber: firstQnNo + i,
        value: value,
        score: null
      });
    }

    return questions;
  }
}
