const express = require('express')
const mysql = require("mysql");
const multer  = require('multer')

const app = express()
const port = 8000

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "crud"
})

con.connect(function(err) {
    if(err) {
        console.log("Error in Connection");
    } else {
        console.log("Connected");
    }
})

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, "./public/images")
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage})

app.use(express.json()); // Add this line to parse JSON in requests

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/create', upload.single('file'), (req, res) => {
    const sql = "INSERT INTO users (name, phone, email, image) VALUES ( ?, ?, ?, ?)";
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
        req.file.filename
    ]
    con.query(sql, values, (err, result) => {
        if(err) return res.json({Error: "Error signup query"});
        return res.json({Status: "Success"})
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})