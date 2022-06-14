import React, { useEffect, useState,   } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ConoscoService from '../../services/academico/ConoscoService'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2'


const ConoscosLista = () => {

  const [conoscos, setConoscos] = useState([])

  useEffect(() => {

    setConoscos(ConoscoService.getAll())

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
    ConoscoService.delete(id)
    setConoscos(ConoscoService.getAll())
    Swal.fire(
      'Apagado!',
      'Item apagado com sucesso!',
      'success',
      
    )
  }
})
  }


  return (
    <div>
      <h1>Lista de Candidatos</h1>

      <Row>
        {conoscos.map((item, i,) => (

          <Col md={4} className="mb-3">

            <Card key={i} border="dark">
              <Card.Img variant="top"  src={item.image} />
              <Card.Body>
              <Card.Text>
                  <b>Nome:</b> {item.nomec}
                </Card.Text>
                <Card.Text>
                  <b>Data de Nascimento:</b> {item.datan}
                </Card.Text>
                <Card.Text>
                  <b>Telefone:</b> {item.telefone}
                </Card.Text>
                <Card.Text>
                <b>Email:</b> {item.email}
                </Card.Text>
                <Card.Text>
                <b>Cidade:</b> {item.cidade} - {item.estado}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Text><b>Alterar</b> <Link to={'/conoscos/' + i}><BsPencilFill className='text-dark' /></Link>{' '}
                <b>Deletar</b> <BsTrash onClick={() => apagar(i)} className='text-danger' > </BsTrash></Card.Text>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
export default ConoscosLista