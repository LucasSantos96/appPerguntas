const sequelize = require('sequelize')



const connection = new sequelize('guiaperguntas','root','629321',{
    host: 'localhost',
    dialect: 'mysql'
})



module.exports = connection