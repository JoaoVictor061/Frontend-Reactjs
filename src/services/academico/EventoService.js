class EventoService {
    getAll(){
        const eventos = localStorage.getItem('eventos')
        return eventos ? JSON.parse(eventos) : []
    }

    get(id){
        const eventos = this.getAll()
        return eventos[id]
    }

    create(dados){
        const eventos = this.getAll()
        eventos.push(dados)
        localStorage.setItem('eventos', JSON.stringify(eventos))
    }

    update(id, dados){
        const eventos = this.getAll()
        eventos.splice(id, 1, dados)
        localStorage.setItem('eventos', JSON.stringify(eventos))
    }

    delete(id){
        const eventos = this.getAll()
        eventos.splice(id, 1)
        localStorage.setItem('eventos', JSON.stringify(eventos))
    }
}

export default new EventoService()