const express = require("express");
const app = express();

app.use(express.json());
const PORT = 3000; // Executar na porta 3000

// Mock
const nomes = [
    { id: 1, nome: "Fernanda", idade: 18, casado: true },
    { id: 2, nome: "Juliana", idade: 22, casado: false },
    { id: 3, nome: "Doris", idade: 15, casado: false }
];

// Criando Funções Auxiliares
// Retornar o objeto por ID
function buscarNomePorId(id) {
    console.log(id)
    return nomes.filter((nome) => nome.id == id);
}

// Pegar a posição ou index do elemento do Array por ID
function buscarIdNomes(id) {
    // findIndex
    return nomes.findIndex((nome) => nome?.id == id);
}


// Rota Principal
app.get("/", (req, res) => {
    res.send("Rota Principal")
});

// Rota Teste
app.get("/teste", (req, res) => {
    res.send("Rota Teste")
});

// Buscando nomes (listaNomes)
app.get("/listaNomes", (req, res) => {
    res.send(nomes)
});

// Buscando por ID
app.get("/listaNomes/:id", (req, res) => {
    let index = req.params.id;

    res.json(buscarNomePorId(index));
});

// Criando um cadastro
app.post("/listaNomes", (req, res) => {
    nomes.push(req.body)
    res.status(201).send("Nomes cadastrado com sucesso!");

});

// Criando Rota Excluir
app.delete("/listaNomes/:id", (req, res) => {
   let id = req.params.id;
   let index = buscarIdNomes(id);

   // Se naõ encontrar, retornar erro
    if(index === -1) {
        return res.status(404).send(`Nenhum nome com id ${id} foi encontrado`);
    }

   // Splice
    nomes.splice(index, 1);
    return res.send(`Nomes com id ${req.params.id} excluída com sucesso!`);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando no enndereço http://localhost:${PORT}`);
});
