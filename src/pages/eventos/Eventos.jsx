import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import EventoService from '../../services/academico/EventoService';
import eventoValidator from '../../validators/eventoValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';
import Swal from 'sweetalert2';

const Eventos = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      const evento = EventoService.get(params.id)

      for (let campo in evento) {
        setValue(campo, evento[campo])
      }
    }
  }, [])

  function salvar(dados) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Cadastro Salvo!!',
      showConfirmButton: false,
      timer: 1500
    })

    if (params.id) {
      EventoService.update(params.id, dados)
    } else {
      EventoService.create(dados)
    }

    navigate('/eventos')
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1>Cadastrar Evento Novo</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome do Evento: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", eventoValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="data">
          <Form.Label>Data do Evento: </Form.Label>
          <Form.Control isInvalid={errors.data} type="text" {...register("data", eventoValidator.data)} 
           mask="99/99/9999" onChange={handleChange} />
          {errors.data && <span>{errors.data.message}</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>
    </div>
  )
}

export default Eventos