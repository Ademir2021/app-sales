import express, { NextFunction, Request, Response } from 'express';
//const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3005
//app.use(cors());
app.use(express.json());


app.use('/', function (req, res) {
    res.send('hello world')
  })

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => { 
        return response.json({
            status: "Error",
            message: error.message,
        })
    })

app.listen(PORT, () => console.log("server is runing on", {PORT}));


    