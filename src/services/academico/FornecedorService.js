class FornecedorService {
    getAll(){
        const fornecedors = localStorage.getItem('fornecedors')
        return fornecedors ? JSON.parse(fornecedors) : []
    }

    get(id){
        const fornecedors = this.getAll()
        return fornecedors[id]
    }

    create(dados){
        const fornecedors = this.getAll()
        fornecedors.push(dados)
        localStorage.setItem('fornecedors', JSON.stringify(fornecedors))
    }

    update(id, dados){
        const fornecedors = this.getAll()
        fornecedors.splice(id, 1, dados)
        localStorage.setItem('fornecedors', JSON.stringify(fornecedors))
    }

    delete(id){
        const fornecedors = this.getAll()
        fornecedors.splice(id, 1)
        localStorage.setItem('fornecedors', JSON.stringify(fornecedors))
    }
}

export default new FornecedorService()