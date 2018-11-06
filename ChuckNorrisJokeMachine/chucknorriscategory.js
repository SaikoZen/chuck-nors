$(document).ready(function(){
          $.get("https://api.chucknorris.io/jokes/categories", function(data, status) {
            var categories = data;
            var $dropdown = $("#myInput");
            $.each(categories, function() {
            $dropdown.append($("<option />").val(this).text(this));
            $("#clickbutton").click(function(){ 
            });
 

        });
    });
});        





















  /*    $("#image").hover(function(){ 
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
    }); */

    
