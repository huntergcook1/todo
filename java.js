document.getElementById('addListBtn').addEventListener('click', function() {
    $('#addListModal').modal('show');
});

document.getElementById('saveListBtn').addEventListener('click', function() {
    const listName = document.getElementById('newListName').value;
    if (listName) {
        const listElement = document.createElement('li');
        listElement.className = 'list-group-item';
        listElement.textContent = listName;
        document.getElementById('todoLists').appendChild(listElement);

        const optionElement = document.createElement('option');
        optionElement.value = listName;
        optionElement.textContent = listName;
        document.getElementById('removeListSelect').appendChild(optionElement);

        $('#addListModal').modal('hide');
    }
});

document.getElementById('removeListBtn').addEventListener('click', function() {
    const selectElement = document.getElementById('removeListSelect');
    const selectedValue = selectElement.value;
    if (selectedValue) {
        const todoLists = document.getElementById('todoLists');
        const listItems = todoLists.getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent === selectedValue) {
                todoLists.removeChild(listItems[i]);
                break;
            }
        }
        const options = selectElement.getElementsByTagName('option');
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === selectedValue) {
                selectElement.removeChild(options[i]);
                break;
            }
        }
    }
});
