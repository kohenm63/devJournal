const mongoose = require('mongoose');


//pull out schema
const {Schema}  = mongoose;

//defining our schema object 
const logEntrySchema = new Schema({
  title:{
      type: String,
    required: true,
   },
  description: String,
  comments: String,
  references: String,
  compexityRating: {
     type: Number,
     min: 0,
     max: 10,
     default: 0,
  },
  daysToBuild: Number,
  packages:String,
  image: String, 
  
 timestamps:{
     createdAt:Number,
 },
    bufferCommands: false,
    autoCreate: false // disable `autoCreate` since `bufferCommands` is false
  
}); 
// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false, 
//     autoIndex: false, // Don't build indexes
//     poolSize: 10, // Maintain up to 10 socket connections
//     serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
//     socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
//     family: 4 // Use IPv4, skip trying IPv6
//   };

// Make Mongoose use Unix time (seconds since Jan 1, 1970)
//timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }

///The next step is compiling our schema into a Model (for runnnig CRUD operations)
const LogEntry  = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
