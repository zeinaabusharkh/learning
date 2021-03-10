var input  = document.getElementById('userinput');
var button = document.getElementsByClassName('enter')[0];
var ul = document.querySelector('ul');

function addLi()
{
  if( input.value.length >0)
        {
          var li = document.createElement("li");
          li.appendChild(document.createTextNode(input.value));
          ul.appendChild(li);
          input.value="";
          deleteItem(li);
          done(li);

        }
};


button.addEventListener("click", addLi);
input.addEventListener("keypress", function()
{
if ( input.value.length >0 && event.keyCode ===13)
{
    addLi();
}
});


/////////////////////
function done(task)
{
  task.addEventListener("click", function(){
    if (task.classList.contains('done'))
    { task.classList.toggle('done')}
    else{
      task.classList.add('done');
    }
})};


function deleteItem(item)
{
  var deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.innerText='X';
  item.appendChild(deleteButton);
  deleteButton.addEventListener('click', function(){
    item.remove();
  })

}

// add done to all existing list items
var listItems = document.querySelectorAll('li');
listItems.forEach((item, i) => {
  done(item);
});


// add delete deleteButton to all existing list items
listItems.forEach((item, i) => {
deleteItem(item);
});
