const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send("Amogus")
})

app.listen(3000)