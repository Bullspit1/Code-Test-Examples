function question(question, choice,  answer) {
  this.question = question;
  this.choice = choice;
  this.answer = answer;
}

question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
};