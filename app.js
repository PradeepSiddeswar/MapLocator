const express = require("express")
const dotenv = require("dotenv")
const path = require("path")
const app = express()

const bp = require("body-parser")
app.use(bp.json());
app.use(bp.urlencoded({ extended: false}));


const requirmentRoute = require("./Routes/requirment_router")
const requiment1Route = require("./Routes/requirment1_router")


dotenv.config({ path: '.env'})
const PORT = process.env.PORT || 8080
console.log("Server Started", PORT)
const mongoose = require("mongoose");
mongoose.pluralize(null)

mongoose.connect(process.env.MONGO_URL, {

})
.then(() => console.log(`Connected To Database`))
.then(() => {
    app.listen(PORT);
})
.catch((error) => console.log(error));


app.get("/", (req, res) => {
    res.send("Hello world")
})


app.use(express.static("upload"))
app.use("/requirment", requirmentRoute)
app.use("/requirment1", requiment1Route)

