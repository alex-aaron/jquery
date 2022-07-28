// $() => document.querySelector
console.log('hit index.js');

console.log($('document'));

$("h1").click(function(){
  $('h1').text('Clicked!');
});

$(document).keydown(function(event){
  $('h1').text(event.key);
});
