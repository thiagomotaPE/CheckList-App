const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'mota',
    password: 'mota123',
    database: 'checklistdb',
})


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

//select from
app.get('/api/get', (req, res) => {
    try {
        const sqlSelect = "SELECT * FROM tasks;"
        db.query(sqlSelect, (err, result) => {
        if(err)
            console.log(err)
        response = result
        res.send(response)
    })  
    } catch (error) {
        console.log(error)
    }
})

//insert into
app.post("/api/insert", (res, req) => {
    const name_task = req.body.name_task
    const description_task = req.body.description_task

    try {
        const sqlInsert = "INSERT INTO tasks (name_task, description_task) VALUES ('?', '?');"
        db.query(sqlInsert, [name_task, description_task], (err, result) => {
        if(err)
            console.log(err)
        response = result
        res.send(response)
    })  
    } catch (error) {
        console.log(error)
    }
})

app.listen(3001, () => {
    console.log("teste port 3001")
})