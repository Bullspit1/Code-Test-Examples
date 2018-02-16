document.addEventListener('DOMContentLoaded', () => {

  /*-------------------LocalStorage---------------------*/
  // function supportLocalStorage(){
  //   if(typeof(Storage) !== "undefined"){
  //   alert("Your Computer Supports Local Storage");
  // } else {
  //   alert("Sorry, you computer does not support Local Storage");
  // }
  // }

  // function getRecentSearches(element){
  //   let searches = localStorage.getItem(element);
  //   return searches;
  // }



  const form = document.getElementById('registrar');
  const input = form.querySelector('input');

  const mainDiv = document.querySelector('.main');
  const ul = document.getElementById('invitedList');

  const div = document.createElement('div');
  const filterLabel = document.createElement('label');
  const filterCheckBox = document.createElement('input');

  filterLabel.textContent = "Hide those who haven't responded";
  filterCheckBox.type = 'checkbox';
  div.appendChild(filterLabel);
  div.appendChild(filterCheckBox);
  mainDiv.insertBefore(div, ul);

  filterCheckBox.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    const lis = ul.children;
    if(isChecked) {
      for (let i = 0; i < lis.length; i += 1) {
        let li = lis[i];
        if (li.className === 'responded') {
          li.style.display = '';
          lis[i].childNodes[1].style.display = "none";
        } else {
          li.style.display = 'none';
        }
      }
    } else {
      for (let i = 0; i < lis.length; i += 1) {
        let li = lis[i];
        li.style.display = '';
        lis[i].childNodes[1].style.display = "";
      }
    }
  });

  function createLI(text) {
    function createElement(elementName, property, value) {
      const element = document.createElement(elementName);
      element[property] = value;
      // getRecentSearches(element);
      return element;
    }

    function appendToLI(elementName, property, value) {
      const element = createElement(elementName, property, value);
      li.appendChild(element);
      return element;
    }

    const li = document.createElement('li');
    appendToLI('span', 'textContent', text);
    appendToLI('label', 'textContent', 'Confirm')
      .appendChild(createElement('input', 'type', 'checkbox'));
    appendToLI('button', 'textContent', 'edit');
    appendToLI('button', 'textContent', 'remove');
    return li;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    input.value = '';

    for (var i = 0; i < ul.children.length; i++ ) {
        // console.log(text == ul.children[i].firstElementChild.textContent);
        if(text == ul.children[i].children[0].innerHTML){
          alert('Same Text');
          return;
        }
      }

    const li = createLI(text);

    if(text !== ""){
      ul.appendChild(li);
    } else {
      alert("Please add a name");
      return;
    }

  });

  ul.addEventListener('change', (e) => {
    const checkbox = event.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;
    // console.log(checked);
    if (checked) {
      listItem.className = 'responded';
      checkbox.parentNode.childNodes[0].textContent = 'Confirmed';
    } else {
      listItem.className = '';
      checkbox.parentNode.childNodes[0].textContent = 'Confirm';
    }
  });

  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const button = e.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      const action = button.textContent;
      const nameActions = {
        remove: () => {
          ul.removeChild(li);
        },
        edit: () => {
          const span = li.firstElementChild;
          const input = document.createElement('input');
          input.type = 'text';
          input.value = span.textContent;
          li.insertBefore(input, span);
          li.removeChild(span);
          button.textContent = 'save';
        },
        save: () => {
          const input = li.firstElementChild;
          const span = document.createElement('span');
          span.textContent = input.value;
          li.insertBefore(span, input);
          li.removeChild(input);
          button.textContent = 'edit';
        }
      };

      // select and run action in button's name
      nameActions[action]();
    }
  });
});








