const express = require("express");
const apiRoutes = require('./routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(3000, function () {
    console.log('http://localhost:3000')
})