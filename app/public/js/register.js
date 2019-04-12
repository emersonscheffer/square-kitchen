function hoverin(event) {
    event.target.style.border = "solid 2px #ffffff";
}

function hoverout(event) {
    event.target.style.border = "solid 2px #6b4c0a";
}


$(document).on("click", ".slot", selectSlot);

function selectSlot() {
    console.log($(this).data("value"));
    $("#slotNumber").text($(this).data("value"));

}


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


//getting and sending the data
$("#submit-btn-new-restaurant").on("click", function (event) {
    event.preventDefault();

    var newRestaurant = {
        
        rest_name: $("#rest_name").val().trim(),
        food_type: $("#food_type").val().trim(),
        website_url: $("#website_url").val().trim(),
        tel_number: $("#tel_number").val().trim(),
        rest_description: $("#description").val().trim(),
        slot_num: $("#slotNumber").text()
    }

    if(newRestaurant.rest_name === ""){
        ;
    } else {

    

    $.post("/api/new", newRestaurant, function (data) {
        if (data) {
            console.log("added to database");
        }

        
        $("#rest_name").val("");
        $("#food_type").val("");
        $("#website_url").val("");
        $("#tel_number").val("");
        $("#description").val("");

    });



    var controlName = {
        name: $("#rest_name").val().trim()
    }

}
    if(controlName === ""){
        ;
    } else {
        console.log(controlName.name);
    }

    $.post("/api/control", controlName, function (data) {
        

        $("#rest_name").val("");

    });

    window.location = "/control";

});