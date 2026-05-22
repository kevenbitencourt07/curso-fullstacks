const express = require("express");
const app = express();

const PORT = 3000; // Executar na porta 3000


// Rota Principal
app.get("/", (req, res) => {
    res.send("Rota Principal")
})

app.listen(PORT, () => {
    console.log(`Servidor rodando no enndereço http://localhost:${PORT}`)
});


// Rota Teste
app.get("/teste", (req, res) => {
    res.send("Rota Teste")
})