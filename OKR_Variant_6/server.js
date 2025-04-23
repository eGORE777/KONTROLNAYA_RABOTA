const express = require('express');  
const path = require('path');  
const dotenv = require('dotenv');  

dotenv.config(); 

const ticketRoutes = require('./routes'); 

 
const app = express();  
app.use(express.json()); 


app.use('/tickets', routes);  

 
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {  
  console.log(`Server is running on http://localhost:${PORT}`);  
});  