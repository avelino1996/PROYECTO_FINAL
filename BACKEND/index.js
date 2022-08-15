//import libreries
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

//use methods libs
const app = express();
require('dotenv').config();

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors()) //para react


//database setup
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log("Estás conectado a la base de datos");} )

//routes setup
app.use('/api/users', require("./routes/indexUser"));
app.use('/api/publications', require("./routes/indexPublication"));


//listen to port
const port = process.env.PORT;

app.listen(port, () =>{
    console.log(`Servidor ejecutado en el puerto ${port}`);
})
