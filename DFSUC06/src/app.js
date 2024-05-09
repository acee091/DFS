import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livros.js"
const app = express();
app.use(express.json());

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) =>{
    console.log("Erro de conexão", erro)
})

// se a conexao for um sucesso
conexao.once("open", () =>{
    console.log("Conexão com o banco feita com sucesso!")
})
const livros = [
    {
        id: 1,
        title: "O senhor dos Aneis"
    },
    {
        id: 2,
        title: "O Hobbit"
    }
]
    // function buscaLivro(id){
    //     return livros.findIndex(livro =>{
    //         return livro.id === Number(id)
    //     })
    // }

app.get('/livros', async(req, res)=>{
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros)
})
app.get("/", (req, res)=>{
    res.status(200).send("Livraria do Tobias")
})

app.post("/livros/:id", (req, res)=>{
    const index = livro(req.params.id)
    res.status(200).json(livro[index])
})
app.post("/livros", (req, res)=>{
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso")
})
app.put('/livros/:id', (req, res)=>{
    const index = buscaLivro(req.params.id)
    livros[index].title= req.body.title
    res.status(200).json(livros)
})

app.delete('/livros/:id', (req, res)=>{
    const index = buscaLivro(req.params.id)
    livros.splice(index, 1)
    res.status(200).send("Livro deletado com sucesso")
})

export default app;

//mongodb+srv://admin:admin123@cluster0.508n4t1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// npm i mongodb
//DOWNLOAD npm i mongoose