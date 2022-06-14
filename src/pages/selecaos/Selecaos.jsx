import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import SelecaoService from '../../services/academico/SelecaoService';
import EventoService from '../../services/academico/EventoService';
import selecaoValidator from '../../validators/selacaoValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FornecedorService from '../../services/academico/FornecedorService';
import Swal from 'sweetalert2';


const Selecaos = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const eventos = EventoService.getAll()

  const fornecedors = FornecedorService.getAll()

  useEffect(() => {

    if (params.id) {
      const selecao = SelecaoService.get(params.id)

      for (let campo in selecao) {
        setValue(campo, selecao[campo])
      }
    }
  }, [])

  function salvar(dados) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Seleção Salva!!',
      showConfirmButton: false,
      timer: 1100
    })

    if (params.id) {
      SelecaoService.update(params.id, dados)
    } else {
      SelecaoService.create(dados)
    }

    navigate('/selecaos')
  }

  return (
    <div>
      <h1>Seleções de Eventos</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", selecaoValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="evento">
          <Form.Label>Evento: </Form.Label>
          <Form.Select {...register("evento", selecaoValidator.evento)}>
            <option></option>
            {eventos.map((item, i) => (
              <option key={i} value={item.nome}>{item.nome}</option>
            ))}
          </Form.Select>
          {errors.evento && <span>{errors.evento.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="data">
          <Form.Label>Data do Evento: </Form.Label>
          <Form.Select {...register("data", selecaoValidator.data)}>
            <option></option>
            {eventos.map((item, i) => (
              <option key={i} value={item.data}>{item.data}</option>
            ))}
          </Form.Select>
          {errors.evento && <span>{errors.data.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="nomef">
          <Form.Label>Fornecedor: </Form.Label>
          <Form.Select {...register("nomef", selecaoValidator.nomef)}>
            <option></option>
            {fornecedors.map((item, i) => (
              <option key={i} value={item.nomef}>{item.nomef}</option>
            ))}
          </Form.Select>
          {errors.evento && <span>{errors.nomef.message}</span>}
        </Form.Group>

        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Selecaos