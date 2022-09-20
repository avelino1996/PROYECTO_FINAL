//import libreries
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');

//use methods libs
const app = express();
require('dotenv').config();

//middlewares
app.use(morgan('dev'));
/* app.use(bodyParser.json()); */
app.use(cors()) //para react
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true}));


//database setup
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log("Estás conectado a la base de datos");} )

//routes setup

app.use('/api/users', require("./routes/indexUser"));
app.use('/api/publications', require("./routes/indexPublication"));
app.use('/api/routes', require("./routes/indexClubRoutes"));
app.use('/api/coment', require("./routes/indexComent"));
app.use('/public/upload', express.static(`${__dirname}/public/upload`));




//listen to port
const port = process.env.PORT;

app.listen(port, () =>{
    console.log(`Servidor ejecutado en el puerto ${port}`);
})
