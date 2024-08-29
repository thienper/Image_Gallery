const express = require("express")
const bodyParser = require('body-parser')
const methodOverride = require("method-override");
const router = require("./routers/client/index.router")
const app = express()

require("dotenv").config();
const port = process.env.PORT;



//Cài pug
const pug = require('pug');
app.set("views", "./views")
app.set('view engine', 'pug')

//Public
app.use(express.static('public'))

//console.log(__dirname)
app.use(express.static(`${__dirname}/public`));

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())

// Tăng giới hạn kích thước của request body lên 10MB
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

//method override
app.use(methodOverride("_method"));

//Router
router(app)

//connect database
const database = require("./config/database");
database.connect();
app.listen(port, () => {
    console.log(`Đã kết nối tới cổng ${port}`)
})