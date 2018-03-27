const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const focusHandler = function(){
  event.target.className = 'highlight';
};
const blurHandler = function(){
  event.target.className = '';
};

nameInput.addEventListener('focus', focusHandler);
nameInput.addEventListener('blur', blurHandler);

messageTextArea.addEventListener('focus', focusHandler);
messageTextArea.addEventListener('blur', blurHandler);