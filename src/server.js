import express from "express";
import { config } from "dotenv";
import movieRoutes from "./routes/movieRoutes.js"

config()
const app = express()

app.use("/movies" , movieRoutes)
// api routes

app.listen(5000 , ()=> {
    console.log("server is listening at 5000" )
})
