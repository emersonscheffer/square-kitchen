const connection = require("../config/connection.js");

const controlData = require("../data/controlData");
const menuData = require("../data/menuData");

module.exports = function(app) {

    app.get("/api/all", function(req, res){
        var dbQuery = "SELECT * FROM restaurants";

        connection.query(dbQuery, function(err, results){
            if(err) throw err;

            res.json(results)

        })
    });

    app.get("/api/cartall", function(req, res){
        var dbQuery = "SELECT * FROM cart";

        connection.query(dbQuery, function(err, results){
            if(err) throw err;

            res.json(results);

        });
    });

    app.get("/api/allmenu", function(req, res){
        var dbQuery = "SELECT * FROM menu";

        connection.query(dbQuery, function(err, results){
            if(err) throw err;

            res.json(results)

        })
    });

    app.get("/api/control", function(req, res){
        res.json(controlData);
    });

    app.post("/api/control", function(req, res){
        console.log("from Control");
        console.log(req.body);
        controlData.push(req.body);
        res.json(true);
    });


    app.get("/api/menucontrol", function(req, res){
        res.json(menuData);
    });

    app.post("/api/menucontrol", function(req, res){
        
        menuData.push(req.body);
        res.json(true);
    });






    app.post("/api/new", function(req, res){
        console.log("Restaurant Data");
        console.log(req.body);

        var dbQuery = "INSERT INTO restaurants (rest_name, food_type, website_url, tel_number, rest_description, slot_num) VALUES (?,?,?,?,?,?)";

        connection.query(dbQuery, [req.body.rest_name, req.body.food_type, req.body.website_url, req.body.tel_number, req.body.rest_description, req.body.slot_num], function(err, result){
            if(err) throw err;
            console.log("Restaurant saved !");
            res.end();
        });
    });

    app.post("/api/menuitem", function(req, res){
        var dbQuery = "INSERT INTO menu (item_name, item_price, rest_name) VALUES (?,?,?)";

        connection.query(dbQuery, [req.body.item_name, req.body.item_price, req.body.rest_name], function(err, result){
            if(err) throw err;

            res.end();
        });

    });
    app.post("/api/cart", function(req, res){
        var dbQuery = "INSERT INTO cart (item_name, item_price, item_qty, rest_name) VALUES (?,?,?,?)";

        connection.query(dbQuery, [req.body.item_name, req.body.item_price, req.body.item_qty, req.body.rest_name], function(err, result){
            if(err) throw err;

            res.end();
        });
    });

    app.post("/api/cartdelete", function(req, res){
        var dbQuery = "DELETE FROM cart";

        connection.query(dbQuery, function(err, result){
            if(err) throw err;
            res.end();
        })
    })

    app.post("/api/deleteitem/:id", function(req, res){
        var dbQuery = "DELETE FROM cart WHERE ? ";

        connection.query(dbQuery, {
            id: req.params.id
        },
        function(err, result){
            if(err) throw err;
            res.end();
        } );
    });
};
