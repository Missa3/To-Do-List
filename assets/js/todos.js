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
        $('ul').append("<li><span>X</span> " + todoText + "</li>")
    }
});
