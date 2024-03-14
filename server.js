const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')

const app = express();

dotenv.config({path: 'config.env'})

app.get('/', (req, res) => {
  res.send('Hi!');
});


const PORT =   process.env.PORT || 8080


app.use(morgan('tiny'))

   
app.listen(PORT, ()=>{
     console.log(`Server is running on http://localhost:${PORT}`)
})


