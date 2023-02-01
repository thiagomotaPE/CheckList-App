const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'mota',
    password: 'mota123',
    database: 'checklistdb',
    port: '3306'
})

app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO tasks (id_task, name_task, description_task) VALUES ('1', 'arrumar a casa', 'preciso arrumar a casa antes que minha mãe chegue');"
    db.query(sqlInsert, (err, result) => {
        res.send('teste 14')
    })
})

app.listen(3001, () => {
    console.log("teste port 3001")
})