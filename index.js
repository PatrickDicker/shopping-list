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


       $(".shopping-item-toggle").on('click', function(event){
            $(this).closest("span").toggleClass('shopping-item__checked')
  
// STUCK HERE NEED HELP UNDERSTANDING why can't I get closest to work? It should bubble up the DOM until it gets to the next <span>, 
// and select that span for toggling // maybe there is a different way I should be targeting this???
    
       });


       $("ul").on('click', '.shopping-item-delete', function(event){
        $(this).closest("li").remove();
            });

// delete works fine

});