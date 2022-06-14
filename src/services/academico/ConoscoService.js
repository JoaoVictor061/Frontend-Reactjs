class ConoscoService {
    getAll(){
        const conoscos = localStorage.getItem('conoscos')
        return conoscos ? JSON.parse(conoscos) : []
    }

    get(id){
        const conoscos = this.getAll()
        return conoscos[id]
    }

    create(dados){
        const conoscos = this.getAll()
        conoscos.push(dados)
        localStorage.setItem('conoscos', JSON.stringify(conoscos))
    }

    update(id, dados){
        const conoscos = this.getAll()
        conoscos.splice(id, 1, dados)
        localStorage.setItem('conoscos', JSON.stringify(conoscos))
    }

    delete(id){
        const conoscos = this.getAll()
        conoscos.splice(id, 1)
        localStorage.setItem('conoscos', JSON.stringify(conoscos))
    }
}

export default new ConoscoService()