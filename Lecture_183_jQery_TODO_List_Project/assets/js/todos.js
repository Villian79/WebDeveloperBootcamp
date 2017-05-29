//Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete To-Do item
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(even){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle(200);
});
