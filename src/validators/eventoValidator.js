const eventoValidator = {
    nome: {
        required: "O campo Evento é Obrigatório",
        minLength: {
            value: 3,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
    data:{
        required: "O campo Data é Obrigatório",
        minLength: {
            value: 10,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 10,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
}

export default eventoValidator