import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SelecaoService from '../../services/academico/SelecaoService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import FornecedorService from '../../services/academico/FornecedorService'
import Swal from 'sweetalert2'

const SelecaosLista = () => {

  const [selecaos, setSelecaos] = useState([])
  const fornecedors = FornecedorService .getAll()
  useEffect(() => {

    setSelecaos(SelecaoService.getAll())

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
        SelecaoService.delete(id)
        setSelecaos(SelecaoService.getAll())
        Swal.fire(
          'Apagado!',
          'Seleção apagada com sucesso!',
          'success',
          
        )
      }
    })
  }

  return (
    <div>
      <h1>Seleção de Evento</h1>



      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Evento</th>
            <th>Data</th>
            <th>Fornecedor</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {selecaos.map((item, i) => (
            <tr key={i}>
              <td>{item.nome}</td>
              <td>{item.evento}</td>
              <td>{item.data}</td>
              <td>{item.nomef}</td>
              <td>
                <Link to={'/selecaos/' + i}><BsPencilFill /></Link>{'  '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Link className='btn btn-dark mb-3' to={'/selecaos/create'}><FaPlus /> Nova Seleção</Link>
      

    </div>
  )
}

export default SelecaosLista