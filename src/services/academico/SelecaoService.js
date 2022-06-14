class SelecaoService {
    getAll(){
        const selecaos = localStorage.getItem('selecaos')
        return selecaos ? JSON.parse(selecaos) : []
    }

    get(id){
        const selecaos = this.getAll()
        return selecaos[id]
    }

    create(dados){
        const selecaos = this.getAll()
        selecaos.push(dados)
        localStorage.setItem('selecaos', JSON.stringify(selecaos))
    }

    update(id, dados){
        const selecaos = this.getAll()
        selecaos.splice(id, 1, dados)
        localStorage.setItem('selecaos', JSON.stringify(selecaos))
    }

    delete(id){
        const selecaos = this.getAll()
        selecaos.splice(id, 1)
        localStorage.setItem('selecaos', JSON.stringify(selecaos))
    }
}

export default new SelecaoService()