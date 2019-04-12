

$.ajax({
    url: "/api/control",
    method: "GET"
}).then(function (controlData) {
    var controlName = controlData[controlData.length - 1].name;

    
    $.get("/api/all", function(data){
        //console.log("data from control");

        for (let index = 0; index < data.length; index++) {
            if(controlName === data[index].rest_name){
                $("#name").text(controlName);
                //console.log(" -=-=- =-=-= " + JSON.stringify(data[index]));
            } else {
                ;
                //console.log("try again");
                //window.location = "/register";
            }
        }

    });

    //////////


    $.get("/api/allmenu", function (data) {
        

        var list = $("<ul>");
        list.attr("id", "menu-pre")

        for (let index = 0; index < data.length; index++) {

            
            if (data[index].rest_name === controlName) {
                //$("#rest-name").text(data[index].rest_name + "'s ");

                var listItem = $("<li>");
                listItem.text(data[index].item_name + " - $" + data[index].item_price);
                list.append(listItem)

            }

        }

        $("#menu-preview").append(list);

    });


    ///////////
    $("#btn-add-item-menu").on("click", function(event){
        event.preventDefault();

        var newItem = {
            item_name: $("#item_name").val().trim(),
            item_price: $("#item_price").val().trim(),
            rest_name: controlName
        }

        $.post("/api/menuitem", newItem).then(function (data) {

            var listItem = $("<li>");
            listItem.text(newItem.item_name + " - $" + newItem.item_price);



            $("#menu-pre").prepend(listItem);

            $("#item_name").val("");
            $("#item_price").val("");



        }); 
            
        


    });

    


});

