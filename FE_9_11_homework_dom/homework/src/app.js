//let rootNode = document.getElementById('root');

function createCheckbox(text, id){
    let divBlock = document.createElement('div');
    divBlock.id = 'divBlock_' + id;
    divBlock.setAttribute('draggable', 'true');
    divBlock.setAttribute('ondragstart', 'drag(event)');
    divBlock.classList.add('checkboxCont');

    let label= document.createElement('label');
    let description = document.createTextNode(text);
    label.appendChild(description);

    let checkbox = document.createElement('input');

    checkbox.type = 'checkbox';    
    checkbox.name = id + '_' + text;  
    checkbox.value = text;   
    checkbox.setAttribute('onchange', 'checkBoxChecked(' + id + ')');
    checkbox.id = 'checkbox_' + id;     
    label.appendChild(checkbox);         

    divBlock.appendChild(label);

    let deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.id = 'deleteButton_' + id;
    deleteButton.setAttribute('onclick', 'deleteCheckbox(' + id + ')');
    deleteButton.innerText = 'Delete';
    divBlock.appendChild(deleteButton);

    document.getElementById('checkBoxContainer').appendChild(divBlock);
}

function insertAfter(referenceNode, newNode){
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function addNewChange(){
  if(document.getElementById('addNewTxt').value === ''){
    document.getElementById('addNewBtn').setAttribute('disabled', 'disabled');
  } else{
    document.getElementById('addNewBtn').removeAttribute('disabled');
  }
}

function checkBoxChecked(id){
    let checkBox = document.getElementById('checkbox_' + id);
    checkBox.setAttribute('disabled', 'disabled');
    let deleteButton = document.getElementById('deleteButton_' + id);
    deleteButton.setAttribute('disabled', 'disabled');
}

let currentIndex = 0;
let checkboxesCounter = 0;
let checkboxesMaxCount = 10;
function addCheckbox(){
    let text = document.getElementById('addNewTxt');
    if(checkboxesCounter < checkboxesMaxCount){
        checkboxesCounter++;
        currentIndex++;
        createCheckbox(text.value, currentIndex);
        text.value = '';
        addNewChange();
    }
    if(checkboxesCounter === checkboxesMaxCount){
        showError('Maximum item per list are created');
    }
}
function deleteCheckbox(id){
    let divBlock = document.getElementById('divBlock_' + id);
    if(divBlock !== null){
        checkboxesCounter--;
        divBlock.parentNode.removeChild(divBlock);
        hideError();
    }
}

function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    if (ev.target.id === 'checkBoxContainer' ){
        let data = ev.dataTransfer.getData('text');
        ev.target.appendChild(document.getElementById(data));
    } else {
        let current = ev.target;
        while(current.parentNode !== null){
            if(current.parentNode.id === 'checkBoxContainer'){
                let data = ev.dataTransfer.getData('text');
                if(current.nextSibling === null){
                    current.appendChild(document.getElementById(data));
                } else{
                    current.parentNode.insertBefore(document.getElementById(data), current);
                }
            }
            current = current.parentNode;
        }
    }
}

function showError(errorMsg){
    let errorText = document.getElementById('errorText');
    errorText.innerHTML = errorMsg;
    errorText.style.display = 'block';
}

function hideError(){
    let errorText = document.getElementById('errorText');
    errorText.style.display = 'none';
}

//rootNode.appendChild(/* Append your list item node*/);
