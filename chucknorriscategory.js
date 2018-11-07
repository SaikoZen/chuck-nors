$(document).ready(function(){           //  bind the ready function to the document's ready function 
    $.get("https://api.chucknorris.io/jokes/categories", function(data, status) {           // send a get request to fetch all categories and bind to new function to the callback event 
         
        var $dropdown = $("#myInput");          // create a variable to store the dropdown element and set the variable value to the dropdown element with Id="#myInput" 
        
        $.each(data, function() {           // call the iteration-function to iterate through the categories array 
            $dropdown.append($("<option />").val(this).text(this));              //with each iteration of the categories add <option> element to the document and give each category a value and a text //        
        })    
    });   


    $("#clickbutton").click(function() {            // when the click button is triggered 
            
        var catSelect = $("#myInput").val();             //create a variable for the value of the category that has been selected 
        var url = "https://api.chucknorris.io/jokes/random?category=" + catSelect;           // create a variable for a url and adding the required catSelect value to complete the url 
            
        if (catSelect == "") {          // passing a codition for checking if a category has been selected by the user 
            $("#maintext").html('Select a category for a random categorized Chuck Norris Joke');           // if the condtion is true then alert user to make a category selection 
        }
        else {          // calling else function for if the condition not true, the following code will be executed 
        }
         
           
        $.get(url, function(data){          // making a get request with url varaible containing the catSelect and to fetch and bind to a new function /          var newJoke = data.value;
        var joke = data.value;          // set a varaible to store value for #maintext 
                              
            $("#maintext").html(joke);          // displaying joke in #maintext with html function   

        })
    }) 

    $("#target").keypress(function(){

    })
                       
});







    /*  $("#image").hover(function(){ 
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
    });     */

    
