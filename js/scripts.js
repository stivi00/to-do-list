function newItem(){

    let listItem = $('<li></li>');
    let inputValue = $('#input').val();
    listItem.append(inputValue);

    //checking if input is empty
    if(inputValue === '') {
        alert('Input field is empty!');
        } else {
            $('#list').append(listItem);
        }

    //cross the finished item
    function crossItem() {
        listItem.toggleClass('strike');
    }

    listItem.on('dblclick', crossItem);


    let crossOutButton = $('<crossOutButton>X</crossOutButton>')
    listItem.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
        listItem.addClass('delete');
    }

    $('#list').sortable();
};