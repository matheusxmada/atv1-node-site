// Arquivo principal do back-end

// Importando o Express para o projeto.
const express = require("express");

// Importando os dados dos eventos dos carros
const audiEventos = require("./data/audiEventos");
const deltaEventos = require("./data/deltaEventos");
const subaruEventos = require("./data/subaruEventos");
const stratosEventos = require("./data/stratosEventos");
const peugeotEventos = require("./data/peugeotEventos");

// Criando uma instância do Express
const app = express();

// Configurando o EJS
app.set("view engine", "ejs");

// Configurando os arquivos estáticos (CSS, Imagens e scripts .JS)
app.use(express.static("public"));

// ROTAS
// ROTA PRINCIPAL
app.get("/", (req, res) => {
    res.render("index");
});

// ROTA SOBRE
app.get("/about", (req, res) => {
  res.render("about");
});

// ROTA CONTATO
app.get("/contact", (req, res) => {
  res.render("contact");
});

// ROTA FAQ
app.get("/faq", (req, res) => {
  res.render("faq");
});

// ROTA PRIVACIDADE
app.get("/privacy", (req, res) => {
  res.render("privacy");
});

// ROTA CREDITOS
app.get("/credits", (req, res) => {
  res.render("credits");
});

// ROTA DE OUTROS
app.get("/other", (req, res) => {
  res.render("other");
});







// ROTAS CARROS

// ROTA do cards dos carros
app.get("/cars", (req, res) => {
  res.render("cars");
});

// ROTA do AudiQuattro
app.get("/AudiQuattro", (req, res) => {
    res.render("carros/AudiQuattro", {
        audiEventos: audiEventos
    });
});

// ROTA do Lancia Delta
app.get("/LanciaDelta", (req, res) => {
    res.render("carros/LanciaDelta", {
        deltaEventos: deltaEventos
    });
});

// ROTA do Subaru Impreza
app.get("/SubaruImpreza", (req, res) => {
    res.render("carros/SubaruImpreza", {
        subaruEventos: subaruEventos
    });
});

// ROTA do Lancia Stratos
app.get("/LanciaStratos", (req, res) => {
    res.render("carros/LanciaStratos", {
        stratosEventos: stratosEventos
    });
});

// ROTA do Peugeot205
app.get("/Peugeot205", (req, res) => {
    res.render("carros/Peugeot205", {
        peugeotEventos: peugeotEventos
    });
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