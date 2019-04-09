import express from 'express'
import apiRoutes from './api-routes'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'


const app = express()

const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({
     extended: true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0-yfipl.mongodb.net/test?retryWrites=true');

var db = mongoose.connection;

app.get('/', (req, res) => res.send('Hello World with Express'))

app.use('/api', apiRoutes)


app.listen(port, () => {
     console.log(`Running Staff Shifts on port: ${port}`);
})