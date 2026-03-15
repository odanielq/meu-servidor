const express = require("express");
const path = require("path");

const app = express();

let contador = 0;

// Servir arquivos da pasta public
app.use(express.static(path.join(__dirname, "public")));

// Rota de interação do botão
app.get("/interagir", (req, res) => {
    contador++;
    console.log("Interação recebida. Contador:", contador);
    res.json({ contador });
});

// Porta do servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor rodando em http://localhost:" + PORT);
});