# 🚀 Guia Perguntas

Uma plataforma de perguntas e respostas similar ao Yahoo Respostas, desenvolvida com Node.js, Express e MySQL.

## 📋 Sobre o Projeto

Sistema web onde usuários podem fazer perguntas e outros usuários podem responder, criando uma comunidade de conhecimento compartilhado.

## 🛠️ Tecnologias Utilizadas

- **Backend:** Node.js, Express.js, Sequelize ORM
- **Banco de Dados:** MySQL
- **Frontend:** EJS (Template Engine), Bootstrap 5
- **Linguagens:** JavaScript, EJS, CSS

## ⚡ Funcionalidades

- ✅ Criar perguntas com título e descrição
- ✅ Visualizar todas as perguntas na página inicial
- ✅ Responder perguntas existentes
- ✅ Interface responsiva e moderna
- ✅ Sistema de relacionamento entre perguntas e respostas

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado
- MySQL instalado e configurado

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/LucasSantos96/appPerguntas.git
cd appPerguntas
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o banco de dados**
- Crie um banco MySQL chamado `guiaperguntas`
- Configure as credenciais em `database/db.js`:
```javascript
const connection = new sequelize('guiaperguntas','root','sua_senha',{
    host: 'localhost',
    dialect: 'mysql'
})
```

4. **Execute o projeto**
```bash
node index.js
```

5. **Acesse a aplicação**
```
http://localhost:3000
```

## 📊 Estrutura do Banco de Dados

### Tabela `pergunta`
- `id` (Primary Key)
- `titulo` (VARCHAR) - Título da pergunta
- `descricao` (TEXT) - Descrição detalhada
- `createdAt`, `updatedAt` (Timestamps)

### Tabela `respostas`
- `id` (Primary Key)
- `corpo` (TEXT) - Conteúdo da resposta
- `perguntaId` (INTEGER) - Foreign Key para pergunta
- `createdAt`, `updatedAt` (Timestamps)

## 📁 Estrutura do Projeto

```
appPerguntas/
├── database/          # Modelos e conexão com banco
│   ├── db.js         # Configuração Sequelize
│   ├── Pergunta.js   # Modelo da tabela pergunta
│   └── Resposta.js   # Modelo da tabela respostas
├── public/           # Arquivos estáticos
│   ├── css/         # Bootstrap e CSS customizado
│   ├── js/          # JavaScript Bootstrap
│   └── img/         # Logo e imagens
├── views/           # Templates EJS
│   ├── partials/    # Componentes reutilizáveis
│   ├── index.ejs    # Página inicial
│   ├── perguntar.ejs # Formulário de pergunta
│   └── pergunta.ejs  # Visualização de pergunta
├── index.js         # Servidor principal
└── package.json     # Dependências do projeto
```

## 🔧 Rotas da Aplicação

- `GET /` - Página inicial (lista todas as perguntas)
- `GET /perguntar` - Formulário para criar nova pergunta
- `POST /salvarpergunta` - Salva nova pergunta no banco
- `GET /pergunta/:id` - Visualiza pergunta específica e suas respostas
- `POST /responder` - Adiciona resposta a uma pergunta

## 👨‍💻 Autor

**Lucas Santos**
- GitHub: [@LucasSantos96](https://github.com/LucasSantos96)

## 📄 Licença

Este projeto está sob a licença ISC.

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
