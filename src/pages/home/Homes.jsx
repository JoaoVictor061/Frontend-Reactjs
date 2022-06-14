import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Homes = () => {

  return (
    <div>
        <Container>

  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="http://empreendedorbr.com.br/wp-content/uploads/2020/02/RQ5BAG_t20_3JVPd3-e1525460616537.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Cadastrar Eventos</h3>
      <Link className='btn btn-primary' to={"/eventos/create"}><p>Cliquei aqui para ser redirecionado.</p></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="http://empreendedorbr.com.br/wp-content/uploads/2020/02/RQ5BAG_t20_3JVPd3-e1525460616537.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Cadastrar Fornecedor</h3>
      <Link className='btn btn-primary' to={"/fornecedors/create"}><p>Cliquei aqui para ser redirecionado.</p></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.eclipseeventos.com/wp-content/uploads/2018/10/INICIO2.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Escolher Seleção</h3>
      <Link className='btn btn-primary' to={"/selecaos/create"}><p>Cliquei aqui para ser redirecionado.</p></Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </Container>
    </div>
  )
}

export default Homes