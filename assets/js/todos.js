$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(event) {
    $(this).parent().remove();
    event.stopPropagation();
});

$('input[type= "text"]').keypress(function(e) {
    if (e.which === 13) {
        var todoText = $(this).val();
        $(this).val('');
        $('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>")
    }
});
console.log($('input[type= "text"]'));
$('.fa-plus-square-o').click(function(){
  $("input[type= 'text']").fadeToggle();
});
