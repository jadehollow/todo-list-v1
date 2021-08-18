// Express
const express = require("express");
const app = express();

// Modules
const date = require(__dirname + "/date.js");
const jsConvert = require('js-convert-case');

// Global Variables
const items = [];
const workItems = [];

// .use/.set
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.set("views", "./views");
app.set("view engine", "ejs");

// Home Page
app.get("/", (req, res) => {
    const day = date.getLongDate();

    res.render("index", { 
        listTitle: day, 
        newListItems: items
    });
});

// Work Page
app.get("/work", (req, res) => {
    res.render("index", {
        listTitle: "Work List",
        newListItems: workItems
    });
});

// Post
app.post("/", (req, res) => {
    const item = jsConvert.toSentenceCase(req.body.newItem);

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});





// Listen on port
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port);
console.log(`Server is running on ${port}.`);
