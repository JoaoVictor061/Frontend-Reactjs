import React, { useEffect, useState,   } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ConoscoService from '../../services/academico/ConoscoService'
import { BsArrowLeft } from 'react-icons/bs'


const ConoscosLista = () => {

  const [conoscos, setConoscos] = useState([])

  useEffect(() => {

    setConoscos(ConoscoService.getAll())

  }, [])

  function apagar(id) {
    if (window.confirm('Deseja realmente excluir o registro?')) {
      ConoscoService.delete(id)
      setConoscos(ConoscoService.getAll())
    }
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
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center">
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
    </div>
  )
}
export default ConoscosLista