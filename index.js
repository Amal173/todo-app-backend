const express = require('express');
const {connectDb}=require('./config/databaseConnection')
const taskRouter=require('./router/taskRouter')
require('dotenv').config();
const cors=require('cors')

connectDb();
const app = express();
const port=process.env.PORT


app.use(cors())
app.use(express.json());
app.use('/api/task',taskRouter)

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})