import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import ConoscoService from '../../services/academico/ConoscoService';
import conoscoValidator from '../../validators/conoscoValidator';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';
import Swal from 'sweetalert2';

const Conoscos = () => {

  const params = useParams()
  const navigate = useNavigate()
  const location = useLocation();
  const state = location.state
  const [image, setImage] = React.useState("")
  const [conoscos, setConoscos] = useState([])
  const { register, handleSubmit, setValue, setFocus, formState: { errors } } = useForm();

  useEffect(() => {

    const fileSelector = document.getElementById("myFileInput");
    fileSelector.addEventListener("change", (event) => {
      const fileList = event.target.files[0];
      getBase64(fileList).then((data) => setImage(data));
    });

    if (params.id) {
      const conosco = ConoscoService.get(params.id)

      for (let campo in conosco) {
        setValue(campo, conosco[campo])
        campo === "image" && setImage(conosco[campo])
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
      ConoscoService.update(params.id,{...dados, image})
    } else {
      ConoscoService.create({...dados, image})
    }

    navigate('/conoscos')
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

  const checkCEP = (event) => {
      const endereço = event.target.value.replace(/\D/g, '')
      console.log(endereço)
      fetch(`https://viacep.com.br/ws/${endereço}/json/`)
      .then(res => res.json()).then(data => {
        //   console.log(data)
          setValue('rua', data.logradouro)
          setValue('bairro', data.bairro)
          setValue('cidade', data.localidade)
          setValue('estado', data.uf)
          setFocus('numero')
      })
  } 

  return (
    <div>
      <h1>Faça seu cadastro</h1>

      <Form >
      <Form.Label><b>Anexar FOTO:</b></Form.Label>
      <input type="file" name="image" id="myFileInput" />


<Row xs={1} md={2} className="g-3">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          src={image}
        />

      <Form.Group className="mb-3" controlId="nomec">
          <Form.Label>Nome Completo: </Form.Label>
          <Form.Control isInvalid={errors.nomec} type="text" {...register("nomec", conoscoValidator.nomec)} />
          {errors.nomec && <span>{errors.nomec.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="datan">
          <Form.Label>Data de Nascimento: </Form.Label>
          <Form.Control isInvalid={errors.datan} type="text" {...register("datan", conoscoValidator.datan)}
           mask="99/99/9999" onChange={handleChange}  />
          {errors.datan && <span>{errors.datan.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control isInvalid={errors.telefone} type="text" {...register("telefone", conoscoValidator.telefone)} 
           mask="(99) 99999-9999" onChange={handleChange}/>
          {errors.telefone && <span>{errors.telefone.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF: </Form.Label>
          <Form.Control isInvalid={errors.cpf} type="text" {...register("cpf", conoscoValidator.cpf)} 
          mask="999.999.999-99" onChange={handleChange} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control isInvalid={errors.email} type="email" {...register("email", conoscoValidator.email)} />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP: </Form.Label>
          <Form.Control isInvalid={errors.cep} type="text" {...register("cep", conoscoValidator.cep)} 
          mask="99999-999" onChange={handleChange} onBlur={checkCEP} />
          {errors.cep && <span>{errors.cep.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="rua">
          <Form.Label>Rua: </Form.Label>
          <Form.Control isInvalid={errors.rua} type="text" {...register("rua", conoscoValidator.rua)} />
          {errors.rua && <span>{errors.rua.message}</span>}
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Número: </Form.Label>
          <Form.Control isInvalid={errors.numero} type="Number" {...register("numero", conoscoValidator.numero)} />
          {errors.numero && <span>{errors.numero.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro: </Form.Label>
          <Form.Control isInvalid={errors.bairro} type="text" {...register("bairro", conoscoValidator.bairro)} />
          {errors.bairro && <span>{errors.bairro.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cidade">
          <Form.Label>Cidade: </Form.Label>
          <Form.Control isInvalid={errors.cidade} type="text" {...register("cidade", conoscoValidator.cidade)} />
          {errors.cidade && <span>{errors.cidade.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="estado">
          <Form.Label>Estado: </Form.Label>
          <Form.Control isInvalid={errors.estado} type="text" {...register("estado", conoscoValidator.estado)} />
          {errors.estado && <span>{errors.estado.message}</span>}
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

export default Conoscos