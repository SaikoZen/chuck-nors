$(document).ready(function(){
    $.get("https://api.chucknorris.io/jokes/categories", function(data, status) {
        var categories = data;
        var $dropdown = $("#myInput");
            $.each(categories, function() {
            $dropdown.append($("<option />").val(this).text(this));   
                
        $("#clickbutton").click(function() {
            var catSelect = $("#myInput").val();
            var url = "https://api.chucknorris.io/jokes/random?" + catSelect;

            alert(catSelect);
            alert(url);
 
        if (catSelect == "") {
            alert("Select a Chuck Norris Joke category for a categorized Chuck Norris Joke.");   
            }  

            /* else {   */
            /* var catJoke = data.value; */
            /* $.get(url, function(data)) { */
            /*    alert(catJoke); */
            /* } */

            /* } */
            
        }) 
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

    
