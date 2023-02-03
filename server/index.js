const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')

//db conection
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
    console.log(req.body)
    const name_task = req.body.name_task
    const description_task = req.body.description_task
    const date_init = req.body.date_init
    const date_end = req.body.date_end

    try {
        const sqlInsert = "INSERT INTO tasks (name_task, description_task, date_init, date_end) VALUES ('?', '?', '?', '?');"
        db.query(sqlInsert, [name_task, description_task, date_init, date_end], (err, result) => {
            if(err)
                console.log(err)
            response = result
            res.send(response)
        })
       
    } catch (error) {
        console.log(error)
    }
})

//delete
app.delete("/api/delete/:id_task", (req, res) => {
    const id_task = req.params.id_task
    
    try {
        const sqlDelete = "DELETE FROM tasks WHERE id_task = ?;"
        db.query(sqlDelete, id_task,  (err, result) => {
            if(err)
                console.log(err)
            response = result
            res.send(response)
        })
    } catch (error) {
        console.log(error)
    }
})

//update
app.put("/api/update", (req, res) => {
    const id_task = req.body.id_task
    const description_task = req.body.description_task
    
    try {
        const sqlUpdate = "UPDATE tasks SET description_task = ? WHERE id_task = ?;"
        db.query(sqlUpdate, [description_task, id_task],  (err, result) => {
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