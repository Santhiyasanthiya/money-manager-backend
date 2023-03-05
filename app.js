const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express();


require('dotenv').config();
const PORT = process.env.PORT

//middleware
app.use(express.json());
app.use(cors({
    origin: "*",
    credentials:true
}))



//router(trans)
readdirSync('./routes').map((route) =>app.use('/api/v1', require('./routes/' + route)))
    const server = () => {
       db()
        app.listen(PORT, () => {
            console.log("you are listning:", PORT)
        })
    }
    

server();