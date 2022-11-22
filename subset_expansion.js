$(document).ready(function() {

    $("a").click(function() {
    
    //$(this) represents current element, which is <a> right now
    
    //$(this).prev() represent element before current element which is div
    
    //On clicking a, use toggleClass method to toggle <div class="hide">
    
    $(this).prev().toggleClass("hide");
    
    //Check if div has class "hide". If yes, change text of $(this) means <a> here, to show more. If not, then change text to show less
    
    if($(this).prev().hasClass("hide")){
    
    $(this).text("Show more");
    
    }else{
    
    $(this).text("Show less");
    
    }
    
    });
    
    });
