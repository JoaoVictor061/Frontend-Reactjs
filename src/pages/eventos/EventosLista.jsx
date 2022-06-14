import React, { useEffect, useState,   } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EventoService from '../../services/academico/EventoService'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2'


const EventosLista = () => {

  const [eventos, setEventos] = useState([])

  useEffect(() => {

    setEventos(EventoService.getAll())

  }, [])

  function apagar(id) {
    Swal.fire({
      title: 'Deseja mesmo apagar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, quero apagar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        EventoService.delete(id)
        setEventos(EventoService.getAll())
        Swal.fire(
          'Apagado!',
          'Evento apagado com sucesso!',
          'success',
          
        )
      }
    })
  }

  return (
    <div>
      <h1>Eventos</h1>

      <Row>
        {eventos.map((item, i,) => (
          <Col md={4} className="mb-3">
            <Card key={i}>
              <Card.Img variant="top" src="https://www.eclipseeventos.com/wp-content/uploads/2018/10/INICIO2.jpg" />
              <Card.Title>{item.nome}</Card.Title>
              <Card.Body>
                <Card.Text>
                  Data do Evento: {item.data}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Text>Alterar <Link to={'/eventos/' + i}><BsPencilFill className='text-dark' /></Link>{' '}
                Deletar <BsTrash onClick={() => apagar(i)} className='text-danger' > </BsTrash></Card.Text>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
export default EventosLista