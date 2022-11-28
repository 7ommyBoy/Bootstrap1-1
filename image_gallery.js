 //ready() event method
$(document).ready(function () {
//click event a

    $("#image_list a").click(function (e) { 
    
    e.preventDefault();
//gets href
    
    var imgUrl = $(this).attr("href"); 
    
    var title_desc = $(this).attr("title");
//changes the title of the image

    
    $('#caption').html(title_desc); 
//changes the href of image
    
    $("#image").attr("src", imgUrl) 
    
    });
    
    });
