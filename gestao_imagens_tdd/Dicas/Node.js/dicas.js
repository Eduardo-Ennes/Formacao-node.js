/*  
BACKEND:
  INICIALIZAÇÃO DE UM PROJETO NODE.JS:
  npm init 

  EXPRESS: 
  npm install express --save  
  npm install express-session --save 
  npm install express-flash --save 

  NODEMAILER: 
  npm install nodemailer --save -> biblioteca para enviar email

  NODEMON: 
  npm install nodemon -g -> (não precisa ficar sempre inicializando o projeto)

  EJS:
  npm install ejs --save 

  BODY-PARSE:
  npm install body-parser --save 
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json()) -> para trazer os dados em formatos json.
  npm install --save cookie-parse -> ?
  npm install validator --save -> são metodos para validação de formularios, porem depende do body-parse

  JEST:
  npm install jest -> testes automatizados
  npm install @types/jest -> para resolver os problemas de autocomplete
  npm install supertest -> para testar requisições HTTP

  SLIGIFY:
  npm install --save slugify

  BCRYPTJS:
  npm install --save bcryptjs -> para criptografar senhas 

  HTML-PDF:
  npm install html-pdf --save 

  AXIOS:
  npm install axios -> ferramenta para requisições http, dominios e para trabalhar com APIS
  npm install cors --save -> é um mecanismo que permite a integração de aplicações, permitindo que aplicativos web clientes interajam com recursos de outros domínios

  Socket.io:
  npm install socket.io --save

  TOKEN-JSON:
  npm install --save jsonwebtoken -> geração de token json

  Lodash:
  npm i --save lodash

  TINYMCE:
  3 - TinyMCE -> para trabalhar com textarea personalizada, deve-se baixar no google

  

BANCO DE DAODS:
  SQUELIZE:
  npm install --save sequelize -> serve para se conectar aos banco de dados
  MYSQL:
  npm install --save mysql2 -> instalação do mysql (um tipo de banco de dados))

  KNEX:
  npm install knex --save
  bancos: 
  npm install pg
  npm install pg-native
  npm install sqlite3
  npm install better-sqlite3
  npm install mysql
  npm install mysql2
  npm install oracledb
  npm install tedious
  MONGOOSE:
  npm install mongoose --save -> biblioteca para trabalha com mongoDB
  }



FRONTEND:
  VUE.JS:
  npm install cors --save
  vue create nomedoprojeto
  cd nomedoprojeto
  npm run serve
  npm run build -> para criar uma compilação para produção
  conf:
    'vue/multi-word-component-names': 0

  BOOTSTRAP:
  npm install bootstrap

  BULMA:
  npm install bulma

  FULLCALENDAR: -> uma biblioteca para trabalhar com calendarios
  npm install fullcalendar 

  jQuery-Mask-Plugins -> para mascara nos inputs html, ir ate o site



------------ Outros --------------
!!! npm audit fix 
!!! npm audit fix --force -> dois codigos que podem resolver os problemas de vulnerabilidade dos pacotes instalados 

OUTRAS:
- <%=  %> --> essa tag exibi o valor de uma variavel no html
- <%  %> --> sem o igual é para condições pu estruturas de repetição

!!! include:
<%- include('./partials/nome.ejs') %>
*/