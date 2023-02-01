const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'mota',
    password: '12345678',
    database: 'checklistdb'
})

app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO tasks (name_task, description_task) VALUES ('arrumar a casa', 'preciso arrumar a casa antes que minha mãe chegue');"
    db.query(sqlInsert, (err, result) => {
        res.send('teste 7')
    })
})

app.listen(3001, () => {
    console.log("teste port 3001")
})