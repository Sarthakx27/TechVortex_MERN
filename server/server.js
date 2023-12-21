require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express();
const connectDb = require('./utils/db');
const authRouter = require("./router/auth-router");
const serviceRoute = require("./router/service-router")
const errorMiddleware = require('./middlewares/errors');


const corsOptions = {
    origin: 'http://localhost:5173',
    methods:"PUT, POST, GET, DELETE, PATCH, HEAD", 
    credentials: true,
  }
app.use(cors(corsOptions))

app.use(express.json())

app.use("/api/auth" , authRouter)
app.use("/api/data" , serviceRoute)



app.use(errorMiddleware)

const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT)
})
