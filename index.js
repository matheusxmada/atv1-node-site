// Arquivo principal do back-end

// Importando o Express para o projeto.
const express = require("express");

// Criando uma instância do Express
const app = express();

// Configurando o EJS
app.set("view engine", "ejs");

// Configurando os arquivos estáticos (CSS, Imagens e scripts .JS)
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

// ROTAS
// ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.render("index");
});

// ROTA do AudiQuattro
app.get("/", (req, res) => {
  res.render("AudiQuattro");
});

// ROTA do Lancia Delta
app.get("/", (req, res) => {
  res.render("LanciaDelta");
});

// ROTA do Subaru Impreza
app.get("/", (req, res) => {
  res.render("Subaru Impreza");
});

// ROTA do Lancia Stratos
app.get("/", (req, res) => {
  res.render("LanciaStratos");
});

// ROTA do Peugeot205
app.get("/", (req, res) => {
  res.render("Peugeot205");
});


// Método para iniciar o servidor back-end
const port = 3001;

app.listen(port, (error) => {
  // Tratando erros de inicialização
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servieor. Erro: ${error}`);
    // Caso de sucesso
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
