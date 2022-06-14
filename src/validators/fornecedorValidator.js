const fornecedorValidator = {
    nomef: {
        required: "O campo Fornecedor é Obrigatório",
        minLength: {
            value: 3,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
    tipo:{
        required: "O campo 'TIPO' é Obrigatório",
        minLength: {
            value: 3,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
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
            value: 10,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
    cnpj:{
        required: "O campo 'CNPJ' é Obrigatório",
        minLength: {
            value: 18,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 18,
            message: "Qtd máxima de caracteres ultrapassada"
        }
    },
}

export default fornecedorValidator