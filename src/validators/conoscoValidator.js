const conoscoValidator = {
    nomec: {
        required: "O campo 'NOME' é Obrigatório",
        minLength: {
            value: 3,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
    datan:{
        required: "O campo 'Data de Nascimento' é Obrigatório",
        minLength: {
            value: 10,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 10,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
    telefone:{
        required: "O campo 'TELEFONE' é Obrigatório",
        minLength: {
            value: 14,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 15,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
    cpf:{
        required: "O campo 'CPF' é Obrigatório",
        minLength: {
            value: 14,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 14,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
    email:{
        required: "O campo 'EMAIL' é Obrigatório",
        minLength: {
            value: 8,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
    cep:{
        required: "O campo 'CEP' é Obrigatório",
        minLength: {
            value: 9,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 9,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
    rua: {
        required: "O campo 'RUA' é Obrigatório",
        minLength: {
            value: 2,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 75,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
    bairro: {
        required: "O campo 'BAIRRO' é Obrigatório",
        minLength: {
            value: 2,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 70,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
    numero: {
        minLength: {
            value: 1,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 10,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
    cidade: {
        required: "O campo 'CIDADE' é Obrigatório",
        minLength: {
            value: 1,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
    estado: {
        required: "O campo 'ESTADO' é Obrigatório",
        minLength: {
            value: 1,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
}

export default conoscoValidator