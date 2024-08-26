//aprimorar a apresentação dos resultados 

const express = require('express')
const mysql = require('mysql2')
const mysql_config = require('./mysql_config')
const functions = require('./functions')
const app = express();
const cors = require('cors')

app.listen(3000,()=>{
    console.log('Servidor no ar')
})

//mysql connection

const connection = mysql.createConnection(mysql_config)

//criar uma função que irá parametrizar as respostas da api
//para utilizar todos os endpoints vamos criar uma função para isso

//criando o roteamento

//consumindo cors
app.use(cors());

app.get('/',(req,res)=>{
    //estabelecer a conexão para executar a query
    //vamos consumir a functions criada
    connection.query('SELECT * FROM tasks',(err,results)=>{
        if(err){
            res.json(functions.response('error','Erro: '+err.message))
        }else{
            res.json(functions.response('sucess','tasks listadas com sucesso',results))
        }
    })
})

