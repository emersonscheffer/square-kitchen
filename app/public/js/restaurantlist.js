$.get("/api/all", function (data) {
    if (data.length !== 0) {

        console.log(data);

        for (let index = 0; index < data.length; index++) {

            var restaurant = $("<div>");
            restaurant.attr("data-name", data[index].rest_name);
            restaurant.addClass("restaurant-item");

            restaurant.append("<h1>" + data[index].rest_name + "</h1>");
            restaurant.append("<h2>" + data[index].tel_number + "</h2>");
            restaurant.append("<h3>" + data[index].website_url + "</h3>");
            restaurant.append("<p>" + data[index].rest_description + "<p>");


            $("#restaurants-dom").append(restaurant);
        }
    }
});

$(document).on("click", ".restaurant-item", goToMenu);

function goToMenu(){
    var menuName = {
        name: $(this).data("name")
    }

    $.post("/api/menucontrol", menuName, function (data) {
        
        ;

    });

    window.location = "/menu";
    console.log("I am here at the menu " + $(this).data("name"));
}



/*


$("#btn-control").on("click", function(event){
    event.preventDefault();

    var controlName = {
        name: $("#comp_name").val().trim()
    }

    if(controlName === ""){
        ;
    } else {
        console.log(controlName.name);
    }

    $.post("/api/control", controlName, function (data) {
        

        $("#comp_name").val("");

    });

    window.location = "/control";
});



*/