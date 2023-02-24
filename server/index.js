const express = require('express');
const bodyParser = require('body-parser');
const yup = require('yup');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');

const bcrypt = require('bcrypt');
const saltRounds = 10;

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



//insert users / cadastre validation
app.post("/api/insertUser", async (req, res) => { 
    try {
        const { email_login } = req.body;
        const { secret_password } = req.body;

        const userValidation = yup.object().shape({
            email_login: yup.string().email("Email invalido!").required("Email obrigatoria!"),
            secret_password: yup.string().min(8).required("Senha obrigatoria!")
        });

        if(!(await userValidation.isValid(req.body))){
            return res.status(400).json({
                erro:true,
                msg: "Cadastro invalido"
            });
        }else{
            bcrypt.hash(secret_password, saltRounds, (error, hash) =>{
                if(error){
                    console.log(error);
                }
                const sqlInsert = "INSERT INTO users (email_login, secret_password) VALUES (?, ?);"
                db.query(sqlInsert, [email_login, hash], (err, result) => {
                    if(err)
                        console.log(err)

                    res.status(200).send({
                        msg: "Cadastro realizado"
                    })
                })
            });
        }
  
    } catch (error) {
        console.log(error)
    }
})


//select user / user validation
// app.post("/api/comparetAccount", async (req, res) => { 
//     try {
//         const { loginCompare } = req.body;
//         const { passwordCompare } = req.body;

//         const userValidation = yup.object().shape({
//             loginCompare: yup.string().email("Email invalido!").required("Email obrigatoria!"),
//             passwordCompare: yup.string().min(8).required("Senha obrigatoria!")
//         });

//         if(!(await userValidation.isValid(req.body))){
//             return res.status(400).json({
//                 erro:true,
//                 msg: "Preencha os dados corretamente"
//             });
//         }else{
//             try {
//                 const sqlSelect = "SELECT * FROM users WHERE email_login =?;"
//                 db.query(sqlSelect, loginCompare, (err, result) => {
//                     if(err)
//                         console.log(err)
//                     })
//                     if (result.length > 0) {
//                         bcrypt.compare(passwordCompare, result[0].passwordCompare, (err, response) => {
//                             if (response) {
//                                 const id = result[0].idusers
    
//                                 const token = jwt.sign({ id }, "09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611", {
//                                     expiresIn: '24h',
//                                 })
    
//                                 req.session.user = result;
    
//                                 res.json({ auth: true, token: token, result: result })
//                             } else {
//                                 res.json({ auth: false, message: 'Combinação usuário/senha incorreta!' });
//                             }
//                         })
//                     } else {
//                         res.json({ auth: false, message: 'Usuário não existe!' });
//                     }

//             } catch (error) {
//                 console.log(error)
//             }
//         }
//     } catch (error) {
//         console.log(error)
//     }
// })

//possivel correção
app.post("/api/comparetAccount", async (req, res) => { 
    try {
        const { loginCompare, passwordCompare } = req.body;

        const userValidation = yup.object().shape({
            loginCompare: yup.string().email("Email invalido!").required("Email obrigatoria!"),
            passwordCompare: yup.string().min(8).required("Senha obrigatoria!")
        });

        if(!(await userValidation.isValid(req.body))){
            return res.status(400).json({
                erro:true,
                msg: "Preencha os dados corretamente"
            });
        }else{
            try {
                const sqlSelect = "SELECT * FROM users WHERE email_login =?;"
                db.query(sqlSelect, loginCompare, (err, result) => {
                    if(err) {
                        console.log(err);
                        res.json({ auth: false, message: 'Erro ao buscar usuário no banco de dados!' });
                    } else {
                        if (result.length > 0) {
                            bcrypt.compare(passwordCompare, result[0].password, (err, response) => {
                                if (response) {
                                    const id = result[0].idusers
        
                                    const token = jwt.sign({ id }, "09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611", {
                                        expiresIn: '24h',
                                    })
        
                                    req.session.user = result;
        
                                    res.json({ auth: true, token: token, result: result })
                                } else {
                                    res.json({ auth: false, message: 'Combinação usuário/senha incorreta!' });
                                }
                            })
                        } else {
                            res.json({ auth: false, message: 'Usuário não existe!' });
                        }
                    }
                });

            } catch (error) {
                console.log(error)
                res.json({ auth: false, message: 'Erro ao buscar usuário no banco de dados!' });
            }
        }
    } catch (error) {
        console.log(error)
        res.json({ auth: false, message: 'Erro ao validar dados do usuário!' });
    }
});



//select tasks
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

//insert tasks
app.post("/api/insert", (req, res) => { 
    try {
        const { name_task } = req.body
        const { description_task } = req.body
        const { date_init } = req.body
        const { date_end } = req.body

        const sqlInsert = "INSERT INTO tasks (name_task, description_task, date_init, date_end) VALUES (?, ?, ?, ?);"
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

//delete tasks
app.delete("/api/delete/:id_task", (req, res) => {
    try {
        const { id_task } = req.params

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

//update tasks
app.put("/api/update", (req, res) => {
    try {
        const { id_task } = req.body
        const { description_task } = req.body

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