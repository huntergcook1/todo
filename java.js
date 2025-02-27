document.getElementById('addListBtn').addEventListener('click', function() {
    $('#addListModal').modal('show');
});

document.getElementById('saveListBtn').addEventListener('click', function() {
    const listName = document.getElementById('newListName').value;
    if (listName) {
        const listElement = document.createElement('li');
        listElement.className = 'list-group-item d-flex justify-content-between align-items-center';
        listElement.innerHTML = `
            <span>${listName}</span>
            <div>
                <button class="btn btn-sm btn-secondary edit-btn">Edit</button>
                <button class="btn btn-sm btn-success save-btn" style="display: none;">Save</button>
            </div>
        `;
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
            if (listItems[i].querySelector('span').textContent === selectedValue) {
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

document.getElementById('todoLists').addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-btn')) {
        const listItem = event.target.closest('li');
        const span = listItem.querySelector('span');
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        input.value = span.textContent;
        listItem.insertBefore(input, span);
        listItem.removeChild(span);
        event.target.style.display = 'none';
        listItem.querySelector('.save-btn').style.display = 'inline-block';
    } else if (event.target.classList.contains('save-btn')) {
        const listItem = event.target.closest('li');
        const input = listItem.querySelector('input');
        const span = document.createElement('span');
        span.textContent = input.value;
        listItem.insertBefore(span, input);
        listItem.removeChild(input);
        event.target.style.display = 'none';
        listItem.querySelector('.edit-btn').style.display = 'inline-block';
    }
});
