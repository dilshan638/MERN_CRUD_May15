const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mernNodeDB',{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex: true},
err=>{
    if(!err)
    console.log("MongoDB database connection established successfully")
      else{
          console.log('Error while connection MongoDB :' +JSON.stringify(err,unefined,2))
      }
}
)