const express = require("express");
const hbs = require("hbs");
const app = express();

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + "/views/partials")
app.set("view engine", "hbs");
app.use(express.static(__dirname+"/public"));

hbs.registerHelper("getCurrentYear", () => new Date().getFullYear());

app.use((req, res, next)=>{
    let now = new Date().toString();

    console.log(`Now - ${now} ${req.url} ${req.method}`);
    next();
});

app.get("/", (req, res)=>{
    res.render("home.hbs", {
        pageTitle: "Home Page",
        welcomeMessage: "Welcome to my website"
    });
});

app.get("/about", (req, res)=>{
    res.render("about.hbs", {
        pageTitle: "About Page"
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
