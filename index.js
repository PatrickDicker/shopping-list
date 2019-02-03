$(function() {
   
//add new entry works fine

$('form').submit(event => {
event.preventDefault();
    const newEntry = $('input').val();
   
    $('ul').append(`<li>
    <span class="shopping-item">${newEntry}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`)

});


       $("body").on('click', ".shopping-item-toggle", function(event){
  

let li = $(this).closest("li");
   
    let children = $(li).children();
$(children[0]).toggleClass('shopping-item__checked');
    
   
});

       $("ul").on('click', '.shopping-item-delete', function(event){
        $(this).closest("li").remove();
            });

// delete works fine

});