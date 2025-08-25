const express = require("express");
const app = express();
const connection = require("./database/db");
const PORT = 3000;

//Model da tabela pergunta
const Pergunta = require("./database/Pergunta");

//Model da tabela respostas
const Resposta = require("./database/Resposta");

const { raw } = require("body-parser");
const { where } = require("sequelize");

//database
connection
  .authenticate()
  .then(() => {
    console.log("conexão feita com o banco de dados!");
  })
  .catch((err) => {
    console.error(err);
  });

//inicia o ejs
app.set("view engine", "ejs");

//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Configura de onde virão os arquivos estáticos
app.use(express.static("public"));

//ROTAS

//Página inicial do app
app.get("/", (req, res) => {
  //findAll() equivalente ao Select * FROM pergunta
  //o objeto como parâmetro Raw:true, envia so os dados importantes eliminando todos os outros dados que não vamos usar
  Pergunta.findAll({
    raw: true,
    order: [
      ["id", "DESC"], //DESC = decrescente / ASC = Crescente
    ],
  })
    .then((perguntas) => {
      res.render("index", {
        perguntas,
      });
    })
    .catch((err) => {
      console.error("erro ao listar tabela", err);
    });
});

//Página de fazer as perguntas
app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

//salvar perguntas
app.post("/salvarpergunta", (req, res) => {
  //salva o conteudo do formulario titulo e descrição
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  //adiciona o conteúdo de titulo e descrição ao banco de dados
  //create() equivalente ao INSERT INTO pergunta no mySQL
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  })
    .then(() => {
      console.log("dados enviados para a tabela com sucesso!");
      res.redirect("/");
    })
    .catch((err) => {
      console.error("Houve um erro ao adicionar dados na tabela", err);
    });
});

//pagina onde mostra as perguntas
app.get("/pergunta/:id", (req, res) => {
  const id = req.params.id;
  Pergunta.findOne({
    where: { id },
  })
    .then((pergunta) => {
      if (pergunta !== null) {
        //Encontre todas as resposatas com o mesmo id passado por perguntaId
        Resposta.findAll({
          where: { perguntaId: pergunta.id },
          order:[['id', 'DESC']]
        }).then((respostas)=>{
            //se achar respostas salva na variável respostas definida pelo then e renderiza a página de pergunta e envia as respostas junto das perguntas
            res.render("pergunta", { pergunta, respostas });
        })
      } else {
        res.redirect("/");
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

//Resposta do Usuário, redirecionando para a pagina de pergunta com o id referente a PERGUNTA respondida
app.post("/responder", (req, res) => {
  const corpo = req.body.corpo;
  const perguntaId = req.body.pergunta;
  Resposta.create({
    corpo,
    perguntaId,
  })
    .then(() => {
      res.redirect("/pergunta/" + perguntaId);
    })
    .catch((err) => {
      console.error("Erro ao redirecionar", err);
    });
});

//roda o servidor
app.listen(PORT, () => {
  console.log("App rodando!");
});
