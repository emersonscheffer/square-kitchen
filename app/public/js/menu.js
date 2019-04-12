$.ajax({
    url: "/api/menucontrol",
    method: "GET"
}).then(function (menuData) {
    var menuName = menuData[menuData.length - 1].name;


    $.get("/api/allmenu", function (data) {


        var list = $("<ul>");

        for (let index = 0; index < data.length; index++) {


            if (data[index].rest_name === menuName) {
                $("#rest-name").text(data[index].rest_name + "'s ");

                var nameid = data[index].item_name.toLowerCase().replace(/\s+/g, '');

                var listItem = $("<li>");
                listItem.attr("class", "itLi");

                var checkBtn = $('<input id="' + nameid + '" type="checkbox" class="checBtn" name="" value="">');
                listItem.append(checkBtn);

                listItem.append(data[index].item_name + " - $" + data[index].item_price);
                //listItem.text(data[index].item_name + " , $" + data[index].item_price);
                

                var quantityWord = " Qty ";

                listItem.append(quantityWord);

                //var quantity = $('<input class="quantity" type="text" value="1">');
                var quantity = $('<select>');
                quantity.attr("class", "quantity");
                quantity.attr("id", nameid + "qty");


                var option1 = $('<option value="1">1</option>');
                var option2 = $('<option value="2">2</option>');
                var option3 = $('<option value="3">3</option>');
                var option4 = $('<option value="4">4</option>');
                var option5 = $('<option value="5">5</option>');
                var option6 = $('<option value="6">6</option>');
                var option7 = $('<option value="7">7</option>');
                var option8 = $('<option value="8">8</option>');
                var option9 = $('<option value="9">9</option>');
                var option10 = $('<option value="10">10</option>');

                quantity.append(option1);
                quantity.append(option2);
                quantity.append(option3);
                quantity.append(option4);
                quantity.append(option5);
                quantity.append(option6);
                quantity.append(option7);
                quantity.append(option8);
                quantity.append(option9);
                quantity.append(option10);

                listItem.append(quantity);

                list.append(listItem)


            }

        }

        $("#menu-list").append(list);


        /////////////////



        $("#add-to-cart").on("click", function (event) {
            event.preventDefault();
            
            
            var arrListItems = [];
            var checkedArr = [];

            for (let k = 0; k < data.length; k++) {
                if (data[k].rest_name === menuName) {
                    arrListItems.push(data[k]);

                    for (let l = 0; l < arrListItems.length; l++) {
                        var itemNameCheck = arrListItems[l].item_name.toLowerCase().replace(/\s+/g, '');
                        if($("#" + itemNameCheck).prop('checked')){
                            if(checkedArr.includes(arrListItems[l].item_name)){
                                ;
                            } else {
                                checkedArr.push(arrListItems[l].item_name);
                                checkedArr.push($("#" + itemNameCheck + "qty").children("option:selected").val());


                                var cartItems = {
                                    item_name: arrListItems[l].item_name,
                                    item_price: arrListItems[l].item_price,
                                    item_qty: $("#" + itemNameCheck + "qty").children("option:selected").val(),
                                    rest_name: menuName
                                }
                            
                                $.post("/api/cart", cartItems).then(function(data){
                            
                                });



                            }
                        }
                        
                    }

                }
            }

            

            console.log("this is an checkedArr: " + checkedArr);

        
            var cartQty = 0;
            $.get("/api/cartall", function (data) {
                for (let index = 0; index < data.length; index++) {
                    cartQty += data[index].item_qty;
                }
        
                $("#cart-qty").text(cartQty);
            });
         
        });


        /////////////////
    });

});

var cartQty = 0;
$.get("/api/cartall", function (data) {
    for (let index = 0; index < data.length; index++) {
        cartQty += data[index].item_qty;
    }

    $("#cart-qty").text(cartQty);
});


$("#cart").on("click", function(event){
    event.preventDefault();

    window.location = "/cart";

});


