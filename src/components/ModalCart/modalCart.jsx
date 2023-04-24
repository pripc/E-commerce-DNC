import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import './index.scss';

const ModalCart = ({ onClose }) => {
  const handleContinueShopping = () => {
    onClose();
  };

  const initialValues = {
    nome: '',
    cpf: '',
    endereco: '',
    pagamento: '',
  };

  const validationSchema = Yup.object({
    nome: Yup.string().required('Campo obrigatório'),
    cpf: Yup.string()
      .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido')
      .required('Campo obrigatório'),
    endereco: Yup.string().required('Campo obrigatório'),
    pagamento: Yup.string().required('Campo obrigatório'),
  });

  const onSubmit = (values) => {
    console.log(values);
    handleContinueShopping();
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>
          &times;
        </span>

        <h1 className="h1end">Finalizar Compra:</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isValidating}) => (
            <Form>
              <label htmlFor="nome">Digite seu nome:</label>
              <Field 
              type="text" 
              id="inputEnd" 
              name="nome" 
              placeholder="Nome completo" 
              className={
                  touched.nome && errors.nome ? 'input-invalid' : touched.nome ? 'input-valid' : ''
                }
                classNamePrefix="input"
              />
              <ErrorMessage name="nome" component="div" className="error" />

              <label htmlFor="cpf">Digite seu CPF:</label>
              <Field 
              type="text" 
              id="inputEnd" 
              name="cpf" 
              placeholder="xxx.xxx.xxx-xx" 
              as={InputMask}
              mask="999.999.999-99"
              className={
                  touched.cpf && errors.cpf ? 'input-invalid' : touched.cpf ? 'input-valid' : ''
                }
                classNamePrefix="input"
              />
              <ErrorMessage name="cpf" component="div" className="error" />

              <label htmlFor="endereco">Endereço:</label>
              <Field 
              type="text" 
              id="inputEnd" 
              name="endereco" 
              placeholder="Endereço completo" 
              className={
                  touched.endereco && errors.endereco ? 'input-invalid' : touched.endereco ? 'input-valid' : ''
                }
                classNamePrefix="input"  
              />
              <ErrorMessage name="endereco" component="div" className="error" />

              <label htmlFor="pagamento">Forma de Pagamento:</label>
              <Field 
              type="text" 
              id="inputEnd" 
              name="pagamento" 
              placeholder="" 
              className={
                  touched.pagamento && errors.pagamento ? 'input-invalid' : touched.pagamento ? 'input-valid' : ''
                }
                classNamePrefix="input"
              />
              <ErrorMessage name="pagamento" component="div" className="error" />

              <button className="btnEnd" type="submit">Confirmar Pedido</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ModalCart;