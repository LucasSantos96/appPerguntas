const express = require('express')
const app = express()
const connection = require('./database/db')
const PORT = 3000
const perguntaModel = require('./database/Pergunta')


//database
connection.authenticate().then(()=>{
    console.log('conexão feita com o banco de dados!')
}).catch((err)=>{
    console.error(err)
})

//inicia o ejs
app.set('view engine','ejs')

//body parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//Configura de onde virão os arquivos estáticos
app.use(express.static('public'))


//ROTAS

//Página inicial do app
app.get('/',(req,res)=>{
    res.render('index')
})

//Página de perguntas
app.get('/perguntar',(req,res)=>{
    res.render('perguntar')
})

//salvar perguntas
app.post('/salvarpergunta', (req,res)=>{
    //salva o conteudo do formulario titulo e descrição 
    const titulo = req.body.titulo
    const descricao = req.body.descricao
    res.send('Formulário recebido!')
})






//roda o servidor 
app.listen(PORT,()=>{
    console.log('App rodando!')
})