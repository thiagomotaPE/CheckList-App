const express = require('express')
const app = express()
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'mota',
    password: 'mota123',
    database: 'checklistdb',
})

app.get("/", (req, res) => {
    
})

app.listen(3001, () => {
    console.log("teste port 3001")
})






//teste para testar conexão com o bd
// try {
//     const sqlInsert = "INSERT INTO tasks (name_task, description_task) VALUES ('arrumar a casa', 'preciso arrumar a casa antes que minha mãe chegue');"
//     db.query(sqlInsert, (err, result) => {
//         if(err)
//             console.log(err)
//         response = result
//         res.send(response)
//     })  
// } catch (error) {
//     console.log(error)
// }