function addCheckbox() {
    const inputText = document.getElementsByClassName('input')[0].value;
  
    if (!inputText){
        return
    }
    const content = document.getElementsByClassName('checkboxes')[0];
    const checkbox = document.createElement('div');
    checkbox.innerHTML = "<div><input type='checkbox' class='check-text'></input><label>" + inputText + "</label><button style='margin-left:10px' onclick='removeCheckbox(this)'>Delete</button></div>";
    content.append(checkbox);
  }
  function removeCheckbox(button) {
    button.parentElement.remove();
  }
  function removeCheckboxes() {
    const checkboxes = document.getElementsByClassName('check-text');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkboxes[i].parentElement.remove();
      }
    }
  }