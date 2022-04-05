//Adding new item
function newItem() {
    let li = '<li></li>';
    let inputValue = $('#input').val();
    let text = li.append(document.createTextNode(inputValue));
    
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let list = $('#list');
        list.append(li);
    }
    
    // Crossing out item
    function crossOut() {
        li.toggleClass('strike');
    }
    li.on('dblclick', crossOut);
    
    
    // Delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    
    // Add delete class from css
    function deleteListItem() {
        li.addClass('delete');
    }
    
    //Reorder items
    $('#list').sortable();
};