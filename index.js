const express=require("express")

const app=express()

const hbs = require("express-handlebars")

const mongoose=require("mongoose")
function conectWithDB() {
    mongoose.connect("mongodb://127.0.0.1:27017/express-users")
    console.log("Polaczenie z baza danych")
}

conectWithDB()

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.engine('hbs', hbs.engine({
    extname: '.hbs',
    helpers: {
        inc: function (value, options) {
            return parseInt(value) + 1;
        }
    }
}))
app.set('view engine', 'hbs');

const userRouter = require("./routes/userRouets")
app.use("/users", userRouter)

app.listen(5000,function(){
    console.log("server node dziala na porcie 5000")
})

