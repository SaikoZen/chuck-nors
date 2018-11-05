$(document).ready(function(){
    $("#clickbutton").click(function(){
    
        $.get("https://api.chucknorris.io/jokes/categories", function(data, status) {
            var categories = $(data);
            var $dropdown = $("#myInput");
            $.each(data, function() {
            $dropdown.append($("<option />").val(this).text(this));
            });

        });
    });
});       

      $("#image").hover(function(){ 
        $("#image").animate({
            width: "200px",
            height: "116px"
        })
        },function(){ 
        $("#image").animate({
           width: "400px",
           height: "232px"
        })
        $("#image").animate({
            width: "100px",
            height: "10px"
        })
        $("#image").animate({
            width: "400px",
            height: "232px"
        });
    });

    
