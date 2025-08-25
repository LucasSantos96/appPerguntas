const sequelize = require('sequelize')

const connection = require('./db')

const Pergunta = connection.define('pergunta',{
    titulo:{
        type: sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type:sequelize.TEXT,
        allowNull: false
    }
})

//caso a tabela já exista o force:false não força a criação
Pergunta.sync({force: false}).then(()=>{
    console.log('Tabela criada com sucesso!')
}).catch((err)=>{
    console.error('Erro ao criar tabela', err)
})

module.exports = Pergunta