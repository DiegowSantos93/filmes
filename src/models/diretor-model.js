import conn from "../conn.js"

const Schema = conn.Schema;

const diretorSchema = new Schema ({
    nome: {
        type: Schema.Types.String,
        required: true,
    },
    endereco: {
        type: Object,
        required: true,
    },
    telefone: {
        type: Schema.Types.String,
        required: true,
    }
})

const Diretor = conn.model("Diretor", diretorSchema)

export default Diretor