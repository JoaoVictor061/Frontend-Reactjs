import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import FornecedorService from '../../services/academico/FornecedorService';
import fornecedorValidator from '../../validators/fornecedorValidator';
import { mask } from 'remask';
import Swal from 'sweetalert2';

const Fornecedors = () => {

  const params = useParams()
  const navigate = useNavigate()
  const location = useLocation();
  const state = location.state
  const [image, setImage] = React.useState("")
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {

    const fileSelector = document.getElementById("myFileInput");
    fileSelector.addEventListener("change", (event) => {
      const fileList = event.target.files[0];
      getBase64(fileList).then((data) => setImage(data));
    });

    if (params.id) {
      const fornecedor = FornecedorService.get(params.id)

      for (let campo in fornecedor) {
        setValue(campo, fornecedor[campo])
        campo === "image" && setImage(fornecedor[campo])
      }
    }
  }, [])

  function salvar(dados) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Cadastro Salvo!!',
      showConfirmButton: false,
      timer: 1100
    })
    if (params.id) {
      FornecedorService.update(params.id,{...dados, image})
    } else {
      FornecedorService.create({...dados, image})
    }

    navigate('/fornecedors')
  }

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
    }
    function handleChange(event) {
        const mascara = event.target.getAttribute('mask')
        setValue(event.target.name, mask(event.target.value, mascara))
      }

  return (
    <div>
      <h1>Cadastrar Fornecedor Novo</h1>

      <Form >
      <Form.Label><b>Anexar FOTO do Fornecedor:</b></Form.Label>
      <input type="file" name="image" id="myFileInput" />


<Row xs={1} md={2} className="g-3">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          src={image}
        />

        <Form.Group className="mb-3" controlId="nomef">
          <Form.Label>Nome do Fornecedor: </Form.Label>
          <Form.Control isInvalid={errors.nomef} type="text" {...register("nomef", fornecedorValidator.nomef)} />
          {errors.nomef && <span>{errors.nomef.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Tipo de evento: </Form.Label>
          <Form.Control isInvalid={errors.tipo} type="text" {...register("tipo", fornecedorValidator.tipo)} />
          {errors.tipo && <span>{errors.tipo.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control isInvalid={errors.telefone} type="text" {...register("telefone", fornecedorValidator.telefone)} 
           mask="(99) 99999-9999" onChange={handleChange}/>
          {errors.telefone && <span>{errors.telefone.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF: </Form.Label>
          <Form.Control isInvalid={errors.cpf} type="text" {...register("cpf", fornecedorValidator.cpf)} 
          mask="999.999.999-99" onChange={handleChange} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control isInvalid={errors.email} type="email" {...register("email", fornecedorValidator.email)} />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cnpj">
          <Form.Label>CNPJ: </Form.Label>
          <Form.Control isInvalid={errors.cnpj} type="cnpj" {...register("cnpj", fornecedorValidator.cnpj)}
          mask="99.999.999/9999-99" onChange={handleChange} />
          {errors.cnpj && <span>{errors.cnpj.message}</span>}
        </Form.Group>

        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
        </Card>
          </Col>
        ))}
      </Row>
      </Form>


    </div>
  )
}

export default Fornecedors