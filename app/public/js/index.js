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