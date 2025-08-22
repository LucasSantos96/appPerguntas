const express = require('express')
const app = express()

const PORT = 3000

//inicia o ejs
app.set('view engine','ejs')

app.use(express.static('public'))

app.get('/:nome/:lang',(req,res)=>{
    //variáveis para exibir no ejs
    const nome = req.params.nome //Careegando os dados dinamicamente de acordo com os parametros passados na ulr
    const lang = req.params.lang

    const exibirMsg = false

    const produtos = [
        {nome: 'mousepad', preco:25.40},
        {nome: 'monitor 24 pol', preco:654.90},
        {nome: 'pendrive', preco:22.00},

    ]

    //index da pasta views
    res.render('index',{
        //vamos enviar as variávies para a página index
        nome:nome,
        lang:lang,
        //Podemos também enviar dados diretamente por aqui antes de declarar
        empresa: "Sem dono",
        ano:2025,
        msg: exibirMsg, //mensagem exibe de acordo com a condição
        produtos:produtos //passa o array de produtos para o ejs
    })
})

app.listen(PORT,()=>{
    console.log('App rodando!')
})