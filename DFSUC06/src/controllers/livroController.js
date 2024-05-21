import livro from '../models/Livros.js'

class LivroController {
     // encontrar todos os livros que tem
static async listarlivros(req, res){
    try{
        const listalivros = await livro.find({});
        res.status(200).json(listalivros);
        } catch(erro){
            res.status(500).json({message: `${erro.message}- falha na requisição`})
        }
    };

    static async cadastrarLivro(req, res){
        try{
            const novoLivro = await livro.create(req.body)
            res.status(201).json({message: "criado com sucesso", livro:novoLivro})
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`})
        }
    }

}

export default LivroController;