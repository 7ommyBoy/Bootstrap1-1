$(document).ready(function () { //ready() event method

    $("#image_list a").click(function (e) { //click event a
    
    e.preventDefault();
    
    var imgUrl = $(this).attr("href"); //gets href
    
    var title_desc = $(this).attr("title");
    
    $('#caption').html(title_desc); //changes the title of the image
    
    $("#image").attr("src", imgUrl) //changes the href of image
    
    });
    
    });
