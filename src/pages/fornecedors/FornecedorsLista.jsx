import React, { useEffect, useState,   } from 'react'
import { Card, Carousel, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FornecedorService from '../../services/academico/FornecedorService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2'


const FornecedorsLista = () => {

  const [fornecedors, setFornecedors] = useState([])

  useEffect(() => {

    setFornecedors(FornecedorService.getAll())


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
        FornecedorService.delete(id)
        setFornecedors(FornecedorService.getAll())
        Swal.fire(
          'Apagado!',
          'Fornecedor apagado com sucesso!',
          'success',
          
        )
      }
    })
  }

  return (
    <div>
      <h1 className='mb-4' >Fornecedores</h1>


      <Row>
        {fornecedors.map((item, i,) => (

          <Col md={4} className="mb-3">

            <Card key={i} border="dark">
              <Card.Img variant="top"  src={item.image} />
              <Card.Body>
              <Card.Text>
                  <b>Nome:</b> {item.nomef}
                </Card.Text>
                <Card.Text>
                  <b>Fornecedor de evento:</b> {item.tipo}
                </Card.Text>
                <Card.Text>
                  <b>Telefone:</b> {item.telefone}
                </Card.Text>
                <Card.Text>
                <b>Email:</b> {item.email}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Text><b>Alterar</b> <Link to={'/fornecedors/' + i}><BsPencilFill className='text-dark' /></Link>{' '}
                <b>Deletar</b> <BsTrash onClick={() => apagar(i)} className='text-danger' > </BsTrash></Card.Text>
              </Card.Footer>
            </Card>

          </Col>
        ))}
      </Row>

        <Carousel class="cart-image" >
        {fornecedors.map((item) => (
        <Carousel.Item interval={1000}>
        <img
      className="cart-image"
      src={item.image}
      alt="First slide"
    />
    </Carousel.Item>
    ))}

</Carousel>
    </div>
  )
}
export default FornecedorsLista