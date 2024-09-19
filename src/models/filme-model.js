import conn from "../conn.js"

const Schema = conn.Schema;

const filmeSchema = new Schema ({
    titulo: {
        type: Schema.Types.String,
        required: true,
    },
    ano: {
        type: Schema.Types.Number,
        required: true,
    },
    genero: {
        type: Schema.Types.String,
        required: true,
    },
    diretor: {
        type: Schema.Types.ObjectId,
        ref: "Diretor"
    },
    produtora: {
        type: Schema.Types.ObjectId,
        ref: "Produtora"
    }
})

const Filme = conn.model("Filme", filmeSchema)

export default Filme