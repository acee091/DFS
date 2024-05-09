import mongoose from "mongoose";
//construir as tabelas
//construção de ecoleção -> Schema
const livrosSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, require: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number}
}, {versionKey: false});

const livro = mongoose.model("livros", livrosSchema)

export default livro;