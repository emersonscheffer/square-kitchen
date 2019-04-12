const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("app/public"));

require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});