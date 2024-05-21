import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
const conexao = await conectaNaDatabase();

conexao.on("error", (erro) =>{
  console.log("erro de conexao", erro)
})

conexao.once("open", () => {
  console.log("Conexão com banco feita com sucesso!")
})

const app = express();
routes(app)


// app.get("/livros",  async (req, res) => {
  //   const listaLivros = await livro.find({});
  //   res.status(200).json(listaLivros);
  // });
  
  // app.get("/livros/:id", (req, res) => {
  //   const index = livro(req.params.id);
  //   res.status(200).json(livro[index]);
  // })
  
  // app.post("/livros", (req, res) => {
  //   livros.push(req.body);
  //   res.status(201).send("livro cadastrado com sucesso");
  // });
  
  // app.put("/livros/:id", (req, res) => {
  //   const index = buscaLivro(req.params.id);
  //   livros[index].titulo = req.body.titulo;
  //   res.status(200).json(livros);
  // });
  
  // app.delete("/livros/:id", (req, res) => {
  //   const index = buscaLivro(req.params.id);
  //   livros.splice(index, 1);
  //   res.status(200).send("livro removido com sucesso");
  // });
  
  export default app;
  
  // 20/05
  
  //mongodb+srv://admin:admin123@cluster0.508n4t1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  
  // npm i mongodb
  //DOWNLOAD npm i mongoose