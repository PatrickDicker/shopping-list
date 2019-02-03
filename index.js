$(function() {
   
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

const countElements = document.getElementsByTagName("UL")[0].childElementCount;

   for (i = 1; i <= countElements; i++){
};


});