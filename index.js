const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const middlewares = require('./middlewares');

//adding routes 
const logs = require('./api/logs');


//creating db connection
//To handle initial connection errors, you should use .catch() or try/catch with async/await.
try{
  const connect = async () => {
 await mongoose.connect (process.env.DATABASE_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
 
} ).then (console.log('connected to mongoDB!'))

}}
catch (error) {
  handleError(error);
}



const app  = express()
app.use(morgan('common'))
app.use(helmet()) 
app.use(cors({
  origin:process.env.CORS_ORIGIN,
}))

/*body parser is a validator.body-parser 
is a Node package that we can add onto 
 our Express app to parse request bodies
*/
app.use( express.json())

app.get('/',function (req, res) {
//common res:  res.send('Hello World!') BUT we are doin JSON ;)
res.json({
  message:'okaaay',

})
})

//use router before notFound handler
app.use('/api/logs',logs );

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

 

 //handeling other types of errors (401.402 etc)

const port = process.env.PORT || 44
 
app.listen(port,()=> {
  console.log(`Listening at http://localhost:${port}`);
})
 
