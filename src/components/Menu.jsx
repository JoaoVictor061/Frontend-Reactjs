import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'

const Menu = () => {
  return (
    <div>

      <Navbar bg="secondary" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="/homes">Casa de Eventos</Navbar.Brand>
          <Nav className="me-auto">
          <NavDropdown title="Cadastrar Eventos" className="show" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/eventos/create">Cadastrar Eventos</Link>
              <Link className="dropdown-item" to="/eventos">Listagem de Eventos</Link>
            </NavDropdown>

            <NavDropdown title="Fornecedor de Eventos" className="show" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/fornecedors/create">Cadastrar Fornecedor</Link>
              <Link className="dropdown-item" to="/fornecedors">Listagem Fornecedor</Link>
            </NavDropdown>

            <NavDropdown title="Seleção de Eventos" className="show" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/selecaos/create">Selecionar Evento</Link>
              <Link className="dropdown-item" to="/selecaos">Listagem de Eventos</Link>
            </NavDropdown>
            </Nav>

            <Nav className="justify-content-end">
            <Link className="nav-link" to="/conoscos/create"><h6>Faça parte da nossa equipe</h6></Link>
            <Link className='btn btn-secondary' to="/conoscos02" ><FaEye /><h7> Visualizar Candidatura</h7> </Link>

          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu