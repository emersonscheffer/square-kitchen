let cartBody = $("#cart-body");

var totalPrice = 0;


var list = $('<ul>');

$.get("/api/cartall", function (data) {


    function getCart() {

        for (let index = 0; index < data.length; index++) {
            var listItem = $('<li>');

            listItem.attr("data-id", data[index].id);
            listItem.append(data[index].item_name);
            listItem.append(" - $");
            listItem.append(data[index].item_price);
            listItem.append(" - Qty ");
            listItem.append(data[index].item_qty);

            var idname = data[index].item_name.toLowerCase().replace(/\s+/g, '');
            var delbtn = $('<button class="delete-item" data-id="' + idname + '">DELETE!</button>');


            listItem.append(delbtn);

            cartBody.append(listItem);

            totalPrice += (data[index].item_price * data[index].item_qty);
        }
    }
    getCart();

    $("#total-cart").text("Total : $" + totalPrice.toFixed(2));

    var orderTotal = totalPrice.toFixed(2);

    $("#order-btn").on("click", function (event) {
        event.preventDefault();

        $.post("/api/cartdelete").then(function (data) {
            console.log("deleted");
        });

        window.location = "/confirmation";

    });

    $(".delete-item").on("click", function (event) {
        event.preventDefault();
        var id = $(this).parent("li").data("id");

        console.log($(this).parent("li").data("id"));
        $.post("/api/deleteitem/" + id).then(function (data) {
            location.reload();
        });

    })


});