$(document).ready(function(){
    $("#button").click(
        function(){
            var toAdd = $("input[name=ListItem]").val();
            $('ul').append('<li>'+ toAdd + '<i class="fas fa-check"></i>' +'<i class="fas fa-trash"></i>'+'</li>');
            $(this).val('');
        });
        $('ul').on('click','.fa-trash',function()
        {
            $(this).parent('li').fadeOut(250);
        });
        $('ul').on('click','.fa-check',function(){
            $(this).parent('li').css('text-decoration','line-through');
            $(this).parent('li').css('color','lightgreen');
        });
    });